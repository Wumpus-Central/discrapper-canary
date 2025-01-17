var i,
    a = r(411104);
var s = r(47120);
var o = r(442837),
    l = r(759174),
    u = r(570140),
    c = r(786761),
    d = r(594174),
    f = r(686478);
function _(e, n, r) {
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
function p(e) {
    if (null == e) return h;
    try {
        return new Date(e).getTime();
    } catch (n) {
        throw Error('Invalid date given ('.concat(e, ')'));
    }
}
function m(e) {
    return p(e.dueAt) - p(e.savedAt);
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
    I = new Set(),
    T = new Set(),
    b = new Map();
function y(e) {
    let n = b.get(e);
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
        s = null !== (n = b.get(a)) && void 0 !== n ? n : new Set();
    s.add(i), b.set(a, s), null == e.message && T.add(i), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? I.add(i) : I.delete(i);
}
function N(e) {
    var n;
    let r = S(e),
        i = g.get(r);
    if (null == i) return !1;
    g.delete(r);
    let a = e.messageId;
    null === (n = b.get(i.saveData.channelId)) || void 0 === n || n.delete(a), T.delete(a), I.delete(a), (v = Date.now());
}
function C() {
    E = !0;
}
function R() {
    (E = !0), g.clear(), b.clear(), T.clear();
}
function O(e) {
    let { savedMessages: n } = e;
    for (let e of ((E = !1), g.clear(), b.clear(), T.clear(), n)) A(e);
}
function D(e) {
    let { savedMessage: n } = e;
    A(n);
}
function L(e) {
    let { savedMessageData: n } = e;
    return N(n);
}
function x(e) {
    let { messageId: n, channelId: r } = e,
        i = S({
            messageId: n,
            channelId: r
        }),
        a = g.get(i);
    if ((null == a ? void 0 : a.message) == null) return !1;
    let s = { ...a };
    return (s.message = null), g.set(i, s), !0;
}
function w(e) {
    let { id: n, channelId: r } = e;
    return x({
        messageId: n,
        channelId: r
    });
}
function P(e) {
    let { ids: n, channelId: r } = e;
    for (let e of n)
        x({
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
    if (0 === T.size || E) return !1;
    E = !0;
}
function U(e) {
    let { channel: n } = e;
    if (0 === T.size || E || !y(n.id)) return !1;
    E = !0;
}
function B(e) {
    let { channels: n } = e;
    if (0 === T.size || E) return !1;
    let r = !1;
    for (let e of n) {
        if (!!y(e.id)) (E = !0), (r = !0);
    }
    return r;
}
function G(e) {
    let { channel: n } = e;
    if (0 === T.size || E || !y(n.id)) return !1;
    E = !0;
}
function Z(e) {
    var n;
    let { user: r } = e;
    if (0 === T.size || E || r.id !== (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    E = !0;
}
function F(e) {
    let { savedMessage: n } = e;
    I.add(n.saveData.messageId);
}
class V extends (i = o.ZP.Store) {
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
        return I.size;
    }
    hasOverdueReminder() {
        return I.size > 0;
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
_(V, 'displayName', 'SavedMessagesStore'),
    (n.Z = new V(u.Z, {
        POST_CONNECTION_OPEN: C,
        LOGOUT: R,
        SAVED_MESSAGES_UPDATE: O,
        SAVED_MESSAGE_CREATE: D,
        SAVED_MESSAGE_DELETE: L,
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
