n.d(t, { Z: () => Z }), n(411104), n(47120);
var i,
    r = n(442837),
    a = n(759174),
    s = n(570140),
    o = n(786761),
    l = n(594174),
    u = n(686478);
function c(e, t, n) {
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
let d = 10000000000000;
function f(e) {
    if (null == e) return d;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error('Invalid date given ('.concat(e, ')'));
    }
}
function _(e) {
    return f(e.dueAt) - f(e.savedAt);
}
let p = new a.h(
        (e) => {
            let { saveData: t } = e;
            return [u._l.ALL, null != t.dueAt ? u._l.REMINDER : u._l.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return _(t);
        }
    ),
    h = !0,
    m = 0,
    g = new Set(),
    E = new Set(),
    v = new Map();
function y(e) {
    let t = v.get(e);
    return null != t && t.size > 0;
}
function I(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function T(e) {
    var t;
    let n = I(e.saveData);
    null == p.get(n) && (m = Date.now()), p.set(n, e);
    let i = e.saveData.messageId,
        r = e.saveData.channelId,
        a = null !== (t = v.get(r)) && void 0 !== t ? t : new Set();
    a.add(i), v.set(r, a), null == e.message && E.add(i), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? g.add(i) : g.delete(i);
}
function b(e) {
    var t;
    let n = I(e),
        i = p.get(n);
    if (null == i) return !1;
    p.delete(n);
    let r = e.messageId;
    null === (t = v.get(i.saveData.channelId)) || void 0 === t || t.delete(r), E.delete(r), g.delete(r), (m = Date.now());
}
function S() {
    h = !0;
}
function A() {
    (h = !0), p.clear(), v.clear(), E.clear();
}
function N(e) {
    let { savedMessages: t } = e;
    for (let e of ((h = !1), p.clear(), v.clear(), E.clear(), t)) T(e);
}
function C(e) {
    let { savedMessage: t } = e;
    T(t);
}
function R(e) {
    let { savedMessageData: t } = e;
    return b(t);
}
function O(e) {
    let { messageId: t, channelId: n } = e,
        i = I({
            messageId: t,
            channelId: n
        }),
        r = p.get(i);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let a = { ...r };
    return (a.message = null), p.set(i, a), !0;
}
function D(e) {
    let { id: t, channelId: n } = e;
    return O({
        messageId: t,
        channelId: n
    });
}
function L(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        O({
            messageId: e,
            channelId: n
        });
}
function x(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = I({
            messageId: t.id,
            channelId: t.channel_id
        }),
        i = p.get(n);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let r = { ...i };
    (r.message = (0, o.wi)(i.message, t)), p.set(n, r);
}
function w() {
    if (0 === E.size || h) return !1;
    h = !0;
}
function P(e) {
    let { channel: t } = e;
    if (0 === E.size || h || !y(t.id)) return !1;
    h = !0;
}
function M(e) {
    let { channels: t } = e;
    if (0 === E.size || h) return !1;
    let n = !1;
    for (let e of t) y(e.id) && ((h = !0), (n = !0));
    return n;
}
function k(e) {
    let { channel: t } = e;
    if (0 === E.size || h || !y(t.id)) return !1;
    h = !0;
}
function U(e) {
    var t;
    let { user: n } = e;
    if (0 === E.size || h || n.id !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    h = !0;
}
function G(e) {
    let { savedMessage: t } = e;
    g.add(t.saveData.messageId);
}
class B extends (i = r.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return p.values(u._l.ALL);
    }
    getSavedMessage(e, t) {
        return p.get(
            I({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return p.values(u._l.BOOKMARK);
    }
    getMessageReminders() {
        return p.values(u._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return g.size;
    }
    hasOverdueReminder() {
        return g.size > 0;
    }
    getSavedMessageCount() {
        return p.size();
    }
    getIsStale() {
        return h;
    }
    getLastChanged() {
        return m;
    }
    isMessageBookmarked(e, t) {
        let n = p.get(
            I({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = p.get(
            I({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
}
c(B, 'displayName', 'SavedMessagesStore');
let Z = new B(s.Z, {
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
    MESSAGE_REMINDER_DUE: G
});
