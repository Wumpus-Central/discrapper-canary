n.d(t, { Z: () => F }), n(411104), n(47120);
var r,
    i = n(442837),
    o = n(759174),
    a = n(570140),
    s = n(786761),
    l = n(594174),
    c = n(686478);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = 10000000000000;
function _(e) {
    if (null == e) return f;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error('Invalid date given ('.concat(e, ')'));
    }
}
function p(e) {
    return _(e.dueAt) - _(e.savedAt);
}
let h = new o.h(
        (e) => {
            let { saveData: t } = e;
            return [c._l.ALL, null != t.dueAt ? c._l.REMINDER : c._l.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return p(t);
        }
    ),
    m = !0,
    g = 0,
    E = new Set(),
    b = new Set(),
    y = new Map();
function v(e) {
    let t = y.get(e);
    return null != t && t.size > 0;
}
function O(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function I(e) {
    var t;
    let n = O(e.saveData);
    null == h.get(n) && (g = Date.now()), h.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        o = null != (t = y.get(i)) ? t : new Set();
    o.add(r), y.set(i, o), null == e.message && b.add(r), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? E.add(r) : E.delete(r);
}
function S(e) {
    var t;
    let n = O(e),
        r = h.get(n);
    if (null == r) return !1;
    h.delete(n);
    let i = e.messageId;
    null == (t = y.get(r.saveData.channelId)) || t.delete(i), b.delete(i), E.delete(i), (g = Date.now());
}
function T() {
    m = !0;
}
function N() {
    (m = !0), h.clear(), y.clear(), b.clear();
}
function A(e) {
    let { savedMessages: t } = e;
    for (let e of ((m = !1), h.clear(), y.clear(), b.clear(), t)) I(e);
}
function C(e) {
    let { savedMessage: t } = e;
    I(t);
}
function R(e) {
    let { savedMessageData: t } = e;
    return S(t);
}
function P(e) {
    let { messageId: t, channelId: n } = e,
        r = O({
            messageId: t,
            channelId: n
        }),
        i = h.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let o = d({}, i);
    return (o.message = null), h.set(r, o), !0;
}
function w(e) {
    let { id: t, channelId: n } = e;
    return P({
        messageId: t,
        channelId: n
    });
}
function D(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        P({
            messageId: e,
            channelId: n
        });
}
function L(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = O({
            messageId: t.id,
            channelId: t.channel_id
        }),
        r = h.get(n);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let i = d({}, r);
    (i.message = (0, s.wi)(r.message, t)), h.set(n, i);
}
function x() {
    if (0 === b.size || m) return !1;
    m = !0;
}
function M(e) {
    let { channel: t } = e;
    if (0 === b.size || m || !v(t.id)) return !1;
    m = !0;
}
function k(e) {
    let { channels: t } = e;
    if (0 === b.size || m) return !1;
    let n = !1;
    for (let e of t) v(e.id) && ((m = !0), (n = !0));
    return n;
}
function j(e) {
    let { channel: t } = e;
    if (0 === b.size || m || !v(t.id)) return !1;
    m = !0;
}
function U(e) {
    var t;
    let { user: n } = e;
    if (0 === b.size || m || n.id !== (null == (t = l.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    m = !0;
}
function G(e) {
    let { savedMessage: t } = e;
    E.add(t.saveData.messageId);
}
class B extends (r = i.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return h.values(c._l.ALL);
    }
    getSavedMessage(e, t) {
        return h.get(
            O({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return h.values(c._l.BOOKMARK);
    }
    getMessageReminders() {
        return h.values(c._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return E.size;
    }
    hasOverdueReminder() {
        return E.size > 0;
    }
    getSavedMessageCount() {
        return h.size();
    }
    getIsStale() {
        return m;
    }
    getLastChanged() {
        return g;
    }
    isMessageBookmarked(e, t) {
        let n = h.get(
            O({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = h.get(
            O({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
}
u(B, 'displayName', 'SavedMessagesStore');
let F = new B(a.Z, {
    POST_CONNECTION_OPEN: T,
    LOGOUT: N,
    SAVED_MESSAGES_UPDATE: A,
    SAVED_MESSAGE_CREATE: C,
    SAVED_MESSAGE_DELETE: R,
    MESSAGE_DELETE: w,
    MESSAGE_DELETE_BULK: D,
    MESSAGE_UPDATE: L,
    GUILD_CREATE: x,
    GUILD_UPDATE: x,
    GUILD_DELETE: x,
    CHANNEL_CREATE: M,
    CHANNEL_UPDATES: k,
    CHANNEL_DELETE: j,
    GUILD_MEMBER_UPDATE: U,
    GUILD_ROLE_CREATE: x,
    GUILD_ROLE_UPDATE: x,
    GUILD_ROLE_DELETE: x,
    MESSAGE_REMINDER_DUE: G
});
