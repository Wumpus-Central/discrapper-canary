var i,
    a = r(411104);
var o = r(47120);
var s = r(442837),
    l = r(759174),
    u = r(570140),
    c = r(786761),
    d = r(594174),
    f = r(686478);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = 10000000000000;
function _(e) {
    if (null == e) return h;
    try {
        return new Date(e).getTime();
    } catch (n) {
        throw Error('Invalid date given ('.concat(e, ')'));
    }
}
function m(e) {
    return _(e.dueAt) - _(e.savedAt);
}
let g = new l.h(
        (e) => {
            let { saveData: n } = e;
            return [f._l.ALL, null != n.dueAt ? f._l.REMINDER : f._l.BOOKMARK];
        },
        (e) => {
            let { saveData: n } = e;
            return m(n);
        }
    ),
    E = !0,
    v = 0,
    y = new Set(),
    b = new Set(),
    I = new Map();
function T(e) {
    let n = I.get(e);
    return null != n && n.size > 0;
}
function S(e) {
    let { channelId: n, messageId: r } = e;
    return ''.concat(n, '-').concat(r);
}
function A(e) {
    var n;
    let r = S(e.saveData);
    null == g.get(r) && (v = Date.now()), g.set(r, e);
    let i = e.saveData.messageId,
        a = e.saveData.channelId,
        o = null !== (n = I.get(a)) && void 0 !== n ? n : new Set();
    o.add(i), I.set(a, o), null == e.message && b.add(i), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? y.add(i) : y.delete(i);
}
function C(e) {
    var n;
    let r = S(e),
        i = g.get(r);
    if (null == i) return !1;
    g.delete(r);
    let a = e.messageId;
    null === (n = I.get(i.saveData.channelId)) || void 0 === n || n.delete(a), b.delete(a), y.delete(a), (v = Date.now());
}
function N() {
    E = !0;
}
function R() {
    (E = !0), g.clear(), I.clear(), b.clear();
}
function O(e) {
    let { savedMessages: n } = e;
    for (let e of ((E = !1), g.clear(), I.clear(), b.clear(), n)) A(e);
}
function D(e) {
    let { savedMessage: n } = e;
    A(n);
}
function x(e) {
    let { savedMessageData: n } = e;
    return C(n);
}
function L(e) {
    let { messageId: n, channelId: r } = e,
        i = S({
            messageId: n,
            channelId: r
        }),
        a = g.get(i);
    if ((null == a ? void 0 : a.message) == null) return !1;
    let o = { ...a };
    return (o.message = null), g.set(i, o), !0;
}
function w(e) {
    let { id: n, channelId: r } = e;
    return L({
        messageId: n,
        channelId: r
    });
}
function P(e) {
    let { ids: n, channelId: r } = e;
    for (let e of n)
        L({
            messageId: e,
            channelId: r
        });
}
function M(e) {
    let { message: n } = e;
    if (null == n.id || null == n.channel_id) return !1;
    let r = S({
            messageId: n.id,
            channelId: n.channel_id
        }),
        i = g.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    (a.message = (0, c.wi)(i.message, n)), g.set(r, a);
}
function k() {
    if (0 === b.size || E) return !1;
    E = !0;
}
function U(e) {
    let { channel: n } = e;
    if (0 === b.size || E || !T(n.id)) return !1;
    E = !0;
}
function B(e) {
    let { channels: n } = e;
    if (0 === b.size || E) return !1;
    let r = !1;
    for (let e of n) {
        if (!!T(e.id)) (E = !0), (r = !0);
    }
    return r;
}
function G(e) {
    let { channel: n } = e;
    if (0 === b.size || E || !T(n.id)) return !1;
    E = !0;
}
function Z(e) {
    var n;
    let { user: r } = e;
    if (0 === b.size || E || r.id !== (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    E = !0;
}
function F(e) {
    let { savedMessage: n } = e;
    y.add(n.saveData.messageId);
}
class V extends (i = s.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return g.values(f._l.ALL);
    }
    getSavedMessage(e, n) {
        return g.get(
            S({
                channelId: e,
                messageId: n
            })
        );
    }
    getMessageBookmarks() {
        return g.values(f._l.BOOKMARK);
    }
    getMessageReminders() {
        return g.values(f._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return y.size;
    }
    hasOverdueReminder() {
        return y.size > 0;
    }
    getSavedMessageCount() {
        return g.size();
    }
    getIsStale() {
        return E;
    }
    getLastChanged() {
        return v;
    }
    isMessageBookmarked(e, n) {
        let r = g.get(
            S({
                channelId: e,
                messageId: n
            })
        );
        return null != r && null == r.saveData.dueAt;
    }
    isMessageReminder(e, n) {
        let r = g.get(
            S({
                channelId: e,
                messageId: n
            })
        );
        return null != r && null != r.saveData.dueAt;
    }
}
p(V, 'displayName', 'SavedMessagesStore'),
    (n.Z = new V(u.Z, {
        POST_CONNECTION_OPEN: N,
        LOGOUT: R,
        SAVED_MESSAGES_UPDATE: O,
        SAVED_MESSAGE_CREATE: D,
        SAVED_MESSAGE_DELETE: x,
        MESSAGE_DELETE: w,
        MESSAGE_DELETE_BULK: P,
        MESSAGE_UPDATE: M,
        GUILD_CREATE: k,
        GUILD_UPDATE: k,
        GUILD_DELETE: k,
        CHANNEL_CREATE: U,
        CHANNEL_UPDATES: B,
        CHANNEL_DELETE: G,
        GUILD_MEMBER_UPDATE: Z,
        GUILD_ROLE_CREATE: k,
        GUILD_ROLE_UPDATE: k,
        GUILD_ROLE_DELETE: k,
        MESSAGE_REMINDER_DUE: F
    }));
