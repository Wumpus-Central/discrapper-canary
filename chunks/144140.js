n.d(t, { Z: () => K }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(786761),
    u = n(131704),
    c = n(23750),
    d = n(598077),
    f = n(592125),
    _ = n(375954),
    p = n(709054),
    h = n(124368),
    m = n(981631);
function g(e, t, n) {
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
let E = new Set(),
    v = {},
    y = {};
function I(e) {
    v = a().omitBy(v, (t) => {
        let n = t.guildId === e;
        return n && delete y[t.parentId], n;
    });
}
function b(e) {
    (v = a().omitBy(v, (t) => t.parentId === e)), delete y[e];
}
function T(e, t) {
    u.AW.has(e.type) && S(N(e), t);
}
function S(e, t) {
    var n;
    let i = (null !== (n = y[e.parentId]) && void 0 !== n ? n : 0) + 1;
    (y[e.parentId] = i), t(e);
}
function A(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(C);
}
function N(e) {
    if (!(e.id in v)) {
        var t;
        v[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
            mostRecentRawMessage: null,
            mostRecentMessage: null
        };
    }
    return v[e.id];
}
function C(e) {
    T(e, (t) => {
        var n;
        null != e.messageCount && (t.count = e.messageCount);
        let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
        null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function R(e) {
    if (null != e && !(e.id in v)) {
        let t = f.Z.getChannel(e.id);
        if (null != t) return C(t), !0;
    }
    return !1;
}
function O(e) {
    (y = {}), E.clear(), e.guilds.forEach(A);
}
function D(e) {
    let { threadMessages: t } = e;
    for (let e in (v = { ...t })) {
        let n = t[e].mostRecentMessage;
        null != n &&
            (t[e].mostRecentMessage = new c.ZP({
                ...n,
                author: new d.Z(n.author)
            }));
    }
}
function x(e) {
    let { guild: t } = e;
    A(t);
}
function L(e) {
    let { guild: t } = e;
    I(t.id);
}
function P(e) {
    let { channel: t } = e;
    C(t);
}
function w(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach(C),
        null == n ||
            n.forEach((e) => {
                let t = f.Z.getChannel(e.channel_id);
                null != t &&
                    e.type !== m.uaV.THREAD_STARTER_MESSAGE &&
                    T(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
}
function M(e) {
    let { threads: t } = e;
    t.forEach(R);
}
function k(e) {
    let { messages: t, threads: n } = e;
    for (let e of t) for (let t of e) R(t.thread);
    n.forEach(R);
}
function U(e) {
    let { channel: t } = e;
    b(t.id);
}
function G(e) {
    let { channel: t } = e;
    delete v[t.id];
}
function B(e) {
    let { message: t, optimistic: n, isPushNotification: i, sendMessageOptions: r } = e;
    if (n || i || null != r) return !1;
    let a = f.Z.getChannel(t.channel_id);
    if (null == a || !u.Ec.has(a.type) || !Z(a, t)) return !1;
    T(a, (e) => {
        (e.count = Math.min(e.count + 1, h.M3)), (e.mostRecentRawMessage = t), (e.mostRecentMessage = null);
    });
}
function Z(e, t) {
    return !(t.type === m.uaV.THREAD_STARTER_MESSAGE || (e.isForumPost() && t.id === p.default.castChannelIdAsMessageId(e.id)));
}
function F(e) {
    var t;
    let { message: n } = e,
        i = v[n.channel_id],
        r = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
    if (null == i || null == r || r.id !== n.id) return !1;
    S(i, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.wi)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.gx)(e.mostRecentRawMessage, n));
    });
}
function V(e) {
    let { id: t, channelId: n } = e,
        i = v[n];
    if (null == i) return !1;
    let r = p.default.castChannelIdAsMessageId(n) !== t,
        a = !E.has(t);
    S(i, (e) => {
        var n;
        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
        null != i && i.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count = r && a ? Math.max(e.count - 1, 0) : e.count), E.add(t);
    });
}
function j(e) {
    let { ids: t, channelId: n } = e,
        i = v[n];
    if (null == i) return !1;
    let r = t.filter((e) => {
        let t = p.default.castChannelIdAsMessageId(n) !== e,
            i = !E.has(e);
        return t && i;
    }).length;
    r > 0 &&
        S(i, (e) => {
            var n;
            let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
            null != i && t.includes(i.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count -= r), t.forEach((e) => E.add(e));
        });
}
function H(e) {
    let t = !1;
    for (let n of e.messages) t = R(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = f.Z.getChannel(e.channelId);
    if (null == n || !u.Ec.has(n.type)) return t;
    T(n, (t) => {
        if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
        else {
            var n;
            let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
            (t.count = e.messages.length >= h.M3 ? h.M3 : t.count), (null == i ? void 0 : i.type) !== m.uaV.THREAD_STARTER_MESSAGE && ((t.mostRecentRawMessage = i), (t.mostRecentMessage = null));
        }
    });
}
function Y() {
    for (let e in v) {
        let t = v[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = _.Z.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class W extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.Z);
    }
    getCount(e) {
        var t, n;
        return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null;
    }
    getMostRecentMessage(e) {
        var t, n;
        let i = v[e];
        return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && ((i.mostRecentMessage = null !== (t = _.Z.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, l.e5)(i.mostRecentRawMessage)), (i.mostRecentRawMessage = null)), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null);
    }
    getChannelThreadsVersion(e) {
        return y[e];
    }
    getInitialOverlayState() {
        return v;
    }
}
g(W, 'displayName', 'ThreadMessageStore');
let K = new W(o.Z, {
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: D,
    GUILD_CREATE: x,
    GUILD_DELETE: L,
    THREAD_CREATE: P,
    THREAD_UPDATE: P,
    THREAD_LIST_SYNC: w,
    LOAD_THREADS_SUCCESS: M,
    LOAD_ARCHIVED_THREADS_SUCCESS: M,
    RELATIONSHIP_ADD: Y,
    RELATIONSHIP_UPDATE: Y,
    RELATIONSHIP_REMOVE: Y,
    SEARCH_FINISH: k,
    MOD_VIEW_SEARCH_FINISH: k,
    THREAD_DELETE: G,
    CHANNEL_DELETE: U,
    MESSAGE_CREATE: B,
    MESSAGE_UPDATE: F,
    MESSAGE_DELETE: V,
    MESSAGE_DELETE_BULK: j,
    LOAD_MESSAGES_SUCCESS: H
});
