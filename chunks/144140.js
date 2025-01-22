var i,
    a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(786761),
    d = r(131704),
    f = r(23750),
    p = r(598077),
    h = r(592125),
    _ = r(375954),
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
let y = new Set(),
    b = {},
    I = {};
function T(e) {
    b = s().omitBy(b, (n) => {
        let r = n.guildId === e;
        return r && delete I[n.parentId], r;
    });
}
function S(e) {
    (b = s().omitBy(b, (n) => n.parentId === e)), delete I[e];
}
function A(e, n) {
    d.AW.has(e.type) && C(R(e), n);
}
function C(e, n) {
    var r;
    let i = (null !== (r = I[e.parentId]) && void 0 !== r ? r : 0) + 1;
    (I[e.parentId] = i), n(e);
}
function N(e) {
    var n;
    null === (n = e.threads) || void 0 === n || n.forEach(O);
}
function R(e) {
    if (!(e.id in b)) {
        var n;
        b[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            count: null !== (n = e.messageCount) && void 0 !== n ? n : 0,
            mostRecentRawMessage: null,
            mostRecentMessage: null
        };
    }
    return b[e.id];
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
    if (null != e && !(e.id in b)) {
        let n = h.Z.getChannel(e.id);
        if (null != n) return O(n), !0;
    }
    return !1;
}
function x(e) {
    (I = {}), y.clear(), e.guilds.forEach(N);
}
function L(e) {
    let { threadMessages: n } = e;
    for (let e in (b = { ...n })) {
        let r = n[e].mostRecentMessage;
        null != r &&
            (n[e].mostRecentMessage = new f.ZP({
                ...r,
                author: new p.Z(r.author)
            }));
    }
}
function w(e) {
    let { guild: n } = e;
    N(n);
}
function P(e) {
    let { guild: n } = e;
    T(n.id);
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
    delete b[n.id];
}
function F(e) {
    let { message: n, optimistic: r, isPushNotification: i, sendMessageOptions: a } = e;
    if (r || i || null != a) return !1;
    let o = h.Z.getChannel(n.channel_id);
    if (null == o || !d.Ec.has(o.type) || !V(o, n)) return !1;
    A(o, (e) => {
        (e.count = Math.min(e.count + 1, g.M3)), (e.mostRecentRawMessage = n), (e.mostRecentMessage = null);
    });
}
function V(e, n) {
    return !(n.type === E.uaV.THREAD_STARTER_MESSAGE || (e.isForumPost() && n.id === m.default.castChannelIdAsMessageId(e.id))) && !0;
}
function j(e) {
    var n;
    let { message: r } = e,
        i = b[r.channel_id],
        a = null !== (n = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== n ? n : null == i ? void 0 : i.mostRecentMessage;
    if (null == i || null == a || a.id !== r.id) return !1;
    C(i, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, c.wi)(e.mostRecentMessage, r)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, c.gx)(e.mostRecentRawMessage, r));
    });
}
function H(e) {
    let { id: n, channelId: r } = e,
        i = b[r];
    if (null == i) return !1;
    let a = m.default.castChannelIdAsMessageId(r) !== n,
        o = !y.has(n);
    C(i, (e) => {
        var r;
        let i = null !== (r = e.mostRecentRawMessage) && void 0 !== r ? r : e.mostRecentMessage;
        null != i && i.id === n && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count = a && o ? Math.max(e.count - 1, 0) : e.count), y.add(n);
    });
}
function Y(e) {
    let { ids: n, channelId: r } = e,
        i = b[r];
    if (null == i) return !1;
    let a = n.filter((e) => {
        let n = m.default.castChannelIdAsMessageId(r) !== e,
            i = !y.has(e);
        return n && i;
    }).length;
    a > 0 &&
        C(i, (e) => {
            var r;
            let i = null !== (r = e.mostRecentRawMessage) && void 0 !== r ? r : e.mostRecentMessage;
            null != i && n.includes(i.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count -= a), n.forEach((e) => y.add(e));
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
    for (let e in b) {
        let n = b[e];
        if (null != n && null != n.mostRecentMessage) {
            let r = _.Z.getMessage(e, n.mostRecentMessage.id);
            if (null == r) continue;
            n.mostRecentMessage = r;
        }
    }
}
class z extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, _.Z);
    }
    getCount(e) {
        var n, r;
        return null !== (r = null === (n = b[e]) || void 0 === n ? void 0 : n.count) && void 0 !== r ? r : null;
    }
    getMostRecentMessage(e) {
        var n, r;
        let i = b[e];
        return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && ((i.mostRecentMessage = null !== (n = _.Z.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== n ? n : (0, c.e5)(i.mostRecentRawMessage)), (i.mostRecentRawMessage = null)), null !== (r = i.mostRecentMessage) && void 0 !== r ? r : null);
    }
    getChannelThreadsVersion(e) {
        return I[e];
    }
    getInitialOverlayState() {
        return b;
    }
}
v(z, 'displayName', 'ThreadMessageStore'),
    (n.Z = new z(u.Z, {
        CONNECTION_OPEN: x,
        OVERLAY_INITIALIZE: L,
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
