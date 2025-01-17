var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(786761),
    d = r(131704),
    f = r(23750),
    _ = r(598077),
    h = r(592125),
    p = r(375954),
    m = r(709054),
    g = r(124368),
    E = r(981631);
function v(e, n, r) {
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
let I = new Set(),
    T = {},
    b = {};
function y(e) {
    T = o().omitBy(T, (n) => {
        let r = n.guildId === e;
        return r && delete b[n.parentId], r;
    });
}
function S(e) {
    (T = o().omitBy(T, (n) => n.parentId === e)), delete b[e];
}
function A(e, n) {
    d.AW.has(e.type) && N(R(e), n);
}
function N(e, n) {
    var r;
    let i = (null !== (r = b[e.parentId]) && void 0 !== r ? r : 0) + 1;
    (b[e.parentId] = i), n(e);
}
function C(e) {
    var n;
    null === (n = e.threads) || void 0 === n || n.forEach(O);
}
function R(e) {
    if (!(e.id in T)) {
        var n;
        T[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            count: null !== (n = e.messageCount) && void 0 !== n ? n : 0,
            mostRecentRawMessage: null,
            mostRecentMessage: null
        };
    }
    return T[e.id];
}
function O(e) {
    A(e, (n) => {
        var r;
        null != e.messageCount && (n.count = e.messageCount);
        let i = null !== (r = n.mostRecentRawMessage) && void 0 !== r ? r : n.mostRecentMessage;
        null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && ((n.mostRecentRawMessage = null), (n.mostRecentMessage = null));
    });
}
function D(e) {
    if (null != e && !(e.id in T)) {
        let n = h.Z.getChannel(e.id);
        if (null != n) return O(n), !0;
    }
    return !1;
}
function L(e) {
    (b = {}), I.clear(), e.guilds.forEach(C);
}
function x(e) {
    let { threadMessages: n } = e;
    for (let e in (T = { ...n })) {
        let r = n[e].mostRecentMessage;
        null != r &&
            (n[e].mostRecentMessage = new f.ZP({
                ...r,
                author: new _.Z(r.author)
            }));
    }
}
function w(e) {
    let { guild: n } = e;
    C(n);
}
function P(e) {
    let { guild: n } = e;
    y(n.id);
}
function M(e) {
    let { channel: n } = e;
    O(n);
}
function k(e) {
    let { threads: n, mostRecentMessages: r } = e;
    n.forEach(O),
        null == r ||
            r.forEach((e) => {
                let n = h.Z.getChannel(e.channel_id);
                null != n &&
                    e.type !== E.uaV.THREAD_STARTER_MESSAGE &&
                    A(n, (n) => {
                        (n.mostRecentRawMessage = e), (n.mostRecentMessage = null);
                    });
            });
}
function U(e) {
    let { threads: n } = e;
    n.forEach(D);
}
function B(e) {
    let { messages: n, threads: r } = e;
    for (let e of n) for (let n of e) D(n.thread);
    r.forEach(D);
}
function G(e) {
    let { channel: n } = e;
    S(n.id);
}
function Z(e) {
    let { channel: n } = e;
    delete T[n.id];
}
function F(e) {
    let { message: n, optimistic: r, isPushNotification: i, sendMessageOptions: a } = e;
    if (r || i || null != a) return !1;
    let s = h.Z.getChannel(n.channel_id);
    if (null == s || !d.Ec.has(s.type) || !V(s, n)) return !1;
    A(s, (e) => {
        (e.count = Math.min(e.count + 1, g.M3)), (e.mostRecentRawMessage = n), (e.mostRecentMessage = null);
    });
}
function V(e, n) {
    return !(n.type === E.uaV.THREAD_STARTER_MESSAGE || (e.isForumPost() && n.id === m.default.castChannelIdAsMessageId(e.id))) && !0;
}
function j(e) {
    var n;
    let { message: r } = e,
        i = T[r.channel_id],
        a = null !== (n = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== n ? n : null == i ? void 0 : i.mostRecentMessage;
    if (null == i || null == a || a.id !== r.id) return !1;
    N(i, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, c.wi)(e.mostRecentMessage, r)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, c.gx)(e.mostRecentRawMessage, r));
    });
}
function H(e) {
    let { id: n, channelId: r } = e,
        i = T[r];
    if (null == i) return !1;
    let a = m.default.castChannelIdAsMessageId(r) !== n,
        s = !I.has(n);
    N(i, (e) => {
        var r;
        let i = null !== (r = e.mostRecentRawMessage) && void 0 !== r ? r : e.mostRecentMessage;
        null != i && i.id === n && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count = a && s ? Math.max(e.count - 1, 0) : e.count), I.add(n);
    });
}
function Y(e) {
    let { ids: n, channelId: r } = e,
        i = T[r];
    if (null == i) return !1;
    let a = n.filter((e) => {
        let n = m.default.castChannelIdAsMessageId(r) !== e,
            i = !I.has(e);
        return n && i;
    }).length;
    a > 0 &&
        N(i, (e) => {
            var r;
            let i = null !== (r = e.mostRecentRawMessage) && void 0 !== r ? r : e.mostRecentMessage;
            null != i && n.includes(i.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count -= a), n.forEach((e) => I.add(e));
        });
}
function W(e) {
    let n = !1;
    for (let r of e.messages) n = D(r.thread) || n;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return n;
    let r = h.Z.getChannel(e.channelId);
    if (null == r || !d.Ec.has(r.type)) return n;
    A(r, (n) => {
        if (0 === e.messages.length) (n.mostRecentRawMessage = null), (n.mostRecentMessage = null), (n.count = 0);
        else {
            var r;
            let i = null !== (r = e.messages[0]) && void 0 !== r ? r : null;
            (n.count = e.messages.length >= g.M3 ? g.M3 : n.count), (null == i ? void 0 : i.type) !== E.uaV.THREAD_STARTER_MESSAGE && ((n.mostRecentRawMessage = i), (n.mostRecentMessage = null));
        }
    });
}
function K() {
    for (let e in T) {
        let n = T[e];
        if (null != n && null != n.mostRecentMessage) {
            let r = p.Z.getMessage(e, n.mostRecentMessage.id);
            if (null == r) continue;
            n.mostRecentMessage = r;
        }
    }
}
class z extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z);
    }
    getCount(e) {
        var n, r;
        return null !== (r = null === (n = T[e]) || void 0 === n ? void 0 : n.count) && void 0 !== r ? r : null;
    }
    getMostRecentMessage(e) {
        var n, r;
        let i = T[e];
        return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && ((i.mostRecentMessage = null !== (n = p.Z.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== n ? n : (0, c.e5)(i.mostRecentRawMessage)), (i.mostRecentRawMessage = null)), null !== (r = i.mostRecentMessage) && void 0 !== r ? r : null);
    }
    getChannelThreadsVersion(e) {
        return b[e];
    }
    getInitialOverlayState() {
        return T;
    }
}
v(z, 'displayName', 'ThreadMessageStore'),
    (n.Z = new z(u.Z, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: x,
        GUILD_CREATE: w,
        GUILD_DELETE: P,
        THREAD_CREATE: M,
        THREAD_UPDATE: M,
        THREAD_LIST_SYNC: k,
        LOAD_THREADS_SUCCESS: U,
        LOAD_ARCHIVED_THREADS_SUCCESS: U,
        RELATIONSHIP_ADD: K,
        RELATIONSHIP_UPDATE: K,
        RELATIONSHIP_REMOVE: K,
        SEARCH_FINISH: B,
        MOD_VIEW_SEARCH_FINISH: B,
        THREAD_DELETE: Z,
        CHANNEL_DELETE: G,
        MESSAGE_CREATE: F,
        MESSAGE_UPDATE: j,
        MESSAGE_DELETE: H,
        MESSAGE_DELETE_BULK: Y,
        LOAD_MESSAGES_SUCCESS: W
    }));
