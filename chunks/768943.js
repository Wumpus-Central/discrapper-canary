n.d(t, { Z: () => Z }), n(415506), n(388685);
var r,
    i = n(442837),
    a = n(759174),
    o = n(570140),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        throw Error("Invalid date given (".concat(e, ")"));
    }
}
function p(e) {
    return null != e.dueAt ? _(e.dueAt) : f - _(e.savedAt);
}
let h = new a.h(
        (e) => {
            let { saveData: t } = e;
            return [c._l.ALL, null != t.dueAt ? c._l.REMINDER : c._l.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return p(t);
        },
    ),
    m = !0,
    g = 0,
    E = new Set(),
    b = new Set(),
    y = new Map();
function O(e) {
    let t = y.get(e);
    return null != t && t.size > 0;
}
function v(e) {
    let { channelId: t, messageId: n } = e;
    return "".concat(t, "-").concat(n);
}
function I(e) {
    var t;
    let n = v(e.saveData);
    null == h.get(n) && (g = Date.now()), h.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        a = null != (t = y.get(i)) ? t : new Set();
    a.add(r),
        y.set(i, a),
        null == e.message && b.add(r),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? E.add(r) : E.delete(r);
}
function T(e) {
    var t;
    let n = v(e),
        r = h.get(n);
    if (null == r) return !1;
    h.delete(n);
    let i = e.messageId;
    null == (t = y.get(r.saveData.channelId)) || t.delete(i), b.delete(i), E.delete(i), (g = Date.now());
}
function S() {
    m = !0;
}
function A() {
    (m = !0), h.clear(), y.clear(), b.clear();
}
function C(e) {
    let { savedMessages: t } = e;
    for (let e of ((m = !1), h.clear(), y.clear(), b.clear(), t)) I(e);
}
function N(e) {
    let { savedMessage: t } = e;
    I(t);
}
function R(e) {
    let { savedMessageData: t } = e;
    return T(t);
}
function P(e) {
    let { messageId: t, channelId: n } = e,
        r = v({
            messageId: t,
            channelId: n,
        }),
        i = h.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = d({}, i);
    return (a.message = null), h.set(r, a), !0;
}
function w(e) {
    let { id: t, channelId: n } = e;
    return P({
        messageId: t,
        channelId: n,
    });
}
function D(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        P({
            messageId: e,
            channelId: n,
        });
}
function x(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = v({
            messageId: t.id,
            channelId: t.channel_id,
        }),
        r = h.get(n);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let i = d({}, r);
    (i.message = (0, s.wi)(r.message, t)), h.set(n, i);
}
function L() {
    if (0 === b.size || m) return !1;
    m = !0;
}
function M(e) {
    let { channel: t } = e;
    if (0 === b.size || m || !O(t.id)) return !1;
    m = !0;
}
function j(e) {
    let { channels: t } = e;
    if (0 === b.size || m) return !1;
    let n = !1;
    for (let e of t) O(e.id) && ((m = !0), (n = !0));
    return n;
}
function k(e) {
    let { channel: t } = e;
    if (0 === b.size || m || !O(t.id)) return !1;
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
    initialize() {
        this.waitFor(l.default);
    }
    getSavedMessages() {
        return h.values(c._l.ALL);
    }
    getSavedMessage(e, t) {
        return h.get(
            v({
                channelId: e,
                messageId: t,
            }),
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
            v({
                channelId: e,
                messageId: t,
            }),
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = h.get(
            v({
                channelId: e,
                messageId: t,
            }),
        );
        return null != n && null != n.saveData.dueAt;
    }
}
u(B, "displayName", "SavedMessagesStore");
let Z = new B(o.Z, {
    POST_CONNECTION_OPEN: S,
    LOGOUT: A,
    SAVED_MESSAGES_UPDATE: C,
    SAVED_MESSAGE_CREATE: N,
    SAVED_MESSAGE_DELETE: R,
    MESSAGE_DELETE: w,
    MESSAGE_DELETE_BULK: D,
    MESSAGE_UPDATE: x,
    GUILD_CREATE: L,
    GUILD_UPDATE: L,
    GUILD_DELETE: L,
    CHANNEL_CREATE: M,
    CHANNEL_UPDATES: j,
    CHANNEL_DELETE: k,
    GUILD_MEMBER_UPDATE: U,
    GUILD_ROLE_CREATE: L,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: L,
    MESSAGE_REMINDER_DUE: G,
});
