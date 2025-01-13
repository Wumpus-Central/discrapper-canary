var i,
    a = r(47120);
var s = r(442837),
    o = r(759174),
    l = r(570140),
    u = r(786761),
    c = r(594174),
    d = r(686478);
function f(e, n, r) {
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
function _(e) {
    var n, r, i, a;
    let s = 10000000000000;
    return (null !== (i = null === (n = e.dueAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : s) - (null !== (a = null === (r = e.savedAt) || void 0 === r ? void 0 : r.getTime()) && void 0 !== a ? a : s);
}
let h = new o.h(
        (e) => {
            let { saveData: n } = e;
            return [d._l.ALL, null != n.dueAt ? d._l.REMINDER : d._l.BOOKMARK];
        },
        (e) => {
            let { saveData: n } = e;
            return _(n);
        }
    ),
    p = !0,
    m = 0,
    g = new Set(),
    E = new Set(),
    v = new Map();
function I(e) {
    let n = v.get(e);
    return null != n && n.size > 0;
}
function T(e) {
    let { channelId: n, messageId: r } = e;
    return ''.concat(n, '-').concat(r);
}
function b(e) {
    var n;
    let r = T(e.saveData);
    null == h.get(r) && (m = Date.now()), h.set(r, e);
    let i = e.saveData.messageId,
        a = e.saveData.channelId,
        s = null !== (n = v.get(a)) && void 0 !== n ? n : new Set();
    s.add(i), v.set(a, s), null == e.message && E.add(i), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? g.add(i) : g.delete(i);
}
function y(e) {
    var n;
    let r = T(e),
        i = h.get(r);
    if (null == i) return !1;
    h.delete(r);
    let a = e.messageId;
    null === (n = v.get(i.saveData.channelId)) || void 0 === n || n.delete(a), E.delete(a), g.delete(a), (m = Date.now());
}
function S() {
    p = !0;
}
function A() {
    (p = !0), h.clear(), v.clear(), E.clear();
}
function N(e) {
    let { savedMessages: n } = e;
    for (let e of ((p = !1), h.clear(), v.clear(), E.clear(), n)) b(e);
}
function C(e) {
    let { savedMessage: n } = e;
    b(n);
}
function R(e) {
    let { savedMessageData: n } = e;
    return y(n);
}
function O(e) {
    let { messageId: n, channelId: r } = e,
        i = T({
            messageId: n,
            channelId: r
        }),
        a = h.get(i);
    if ((null == a ? void 0 : a.message) == null) return !1;
    let s = { ...a };
    return (s.message = null), h.set(i, s), !0;
}
function D(e) {
    let { id: n, channelId: r } = e;
    return O({
        messageId: n,
        channelId: r
    });
}
function L(e) {
    let { ids: n, channelId: r } = e;
    for (let e of n)
        O({
            messageId: e,
            channelId: r
        });
}
function x(e) {
    let { message: n } = e;
    if (null == n.id || null == n.channel_id) return !1;
    let r = T({
            messageId: n.id,
            channelId: n.channel_id
        }),
        i = h.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    (a.message = (0, u.wi)(i.message, n)), h.set(r, a);
}
function w() {
    if (0 === E.size || p) return !1;
    p = !0;
}
function P(e) {
    let { channel: n } = e;
    if (0 === E.size || p || !I(n.id)) return !1;
    p = !0;
}
function M(e) {
    let { channels: n } = e;
    if (0 === E.size || p) return !1;
    let r = !1;
    for (let e of n) {
        if (!!I(e.id)) (p = !0), (r = !0);
    }
    return r;
}
function k(e) {
    let { channel: n } = e;
    if (0 === E.size || p || !I(n.id)) return !1;
    p = !0;
}
function U(e) {
    var n;
    let { user: r } = e;
    if (0 === E.size || p || r.id !== (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    p = !0;
}
function B(e) {
    let { savedMessage: n } = e;
    g.add(n.saveData.messageId);
}
class G extends (i = s.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return h.values(d._l.ALL);
    }
    getSavedMessage(e, n) {
        return h.get(
            T({
                channelId: e,
                messageId: n
            })
        );
    }
    getMessageBookmarks() {
        return h.values(d._l.BOOKMARK);
    }
    getMessageReminders() {
        return h.values(d._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return g.size;
    }
    hasOverdueReminder() {
        return g.size > 0;
    }
    getSavedMessageCount() {
        return h.size();
    }
    getIsStale() {
        return p;
    }
    getLastChanged() {
        return m;
    }
    isMessageBookmarked(e, n) {
        let r = h.get(
            T({
                channelId: e,
                messageId: n
            })
        );
        return null != r && null == r.saveData.dueAt;
    }
    isMessageReminder(e, n) {
        let r = h.get(
            T({
                channelId: e,
                messageId: n
            })
        );
        return null != r && null != r.saveData.dueAt;
    }
}
f(G, 'displayName', 'SavedMessagesStore'),
    (n.Z = new G(l.Z, {
        POST_CONNECTION_OPEN: S,
        LOGOUT: A,
        SAVED_MESSAGES_UPDATE: N,
        SAVED_MESSAGE_CREATE: C,
        SAVED_MESSAGE_DELETE: R,
        MESSAGE_DELETE: D,
        MESSAGE_DELETE_BULK: L,
        MESSAGE_UPDATE: x,
        GUILD_CREATE: w,
        GUILD_UPDATE: w,
        GUILD_DELETE: w,
        CHANNEL_CREATE: P,
        CHANNEL_UPDATES: M,
        CHANNEL_DELETE: k,
        GUILD_MEMBER_UPDATE: U,
        GUILD_ROLE_CREATE: w,
        GUILD_ROLE_UPDATE: w,
        GUILD_ROLE_DELETE: w,
        MESSAGE_REMINDER_DUE: B
    }));
