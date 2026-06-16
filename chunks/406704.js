"use strict";
n.d(t, {
    AI: () => y,
    D1: () => T,
    Et: () => L,
    H_: () => x,
    Id: () => w,
    NI: () => R,
    NR: () => v,
    R: () => N,
    Tb: () => S,
    UJ: () => P,
    _M: () => G,
    io: () => A,
    jr: () => M,
    lK: () => D,
    n: () => I,
    qi: () => U,
    s5: () => F,
});
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(17928),
    o = n(323073),
    l = n(880006),
    u = n(753727),
    c = n(807632),
    d = n(143413),
    _ = n(95701),
    h = n(495544),
    f = n(734057),
    p = n(576705),
    E = n(935208),
    m = n(695633),
    g = n(652215);
let A = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function I(e, t) {
    return C(
        (0, a.bG)([p.A], () => {
            let t = e.isForumLikeChannel()
                ? g.xBc.SEND_MESSAGES
                : s.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
            return p.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function T(e, t) {
    let n = e.isForumLikeChannel()
        ? g.xBc.SEND_MESSAGES
        : s.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
    return C(p.A.can(n, e), e, t);
}
function S(e) {
    let t = (0, a.bG)([p.A], () => p.A.can(s.kg(g.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === g.rbe.GUILD_TEXT && C(t, e);
}
function y(e) {
    let t = I(e),
        n = S(e);
    return t || n;
}
function C(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !_.wE.has(t.type) || (null != n && (n.hasFlag(g.pr7.HAS_THREAD) || (0, d.A)(n)))) && !0
    );
}
function N(e) {
    var t, n, i;
    let r = (0, a.bG)([f.A], () => f.A.getChannel(E.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, a.bG)([p.A], () => p.A.can(g.xBc.VIEW_CHANNEL, r), [r])),
        (n = e),
        (i = r),
        !!n.hasFlag(g.pr7.HAS_THREAD) && null != i && !!t
    );
}
function v(e) {
    return (0, a.cf)([m.A, p.A], () => {
        let t = m.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = m.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = r()(n).some((e) => p.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            a = r()(t).some((e) => !(e.channel.id in n) && p.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            o = r()(i).some((e) => p.A.can(g.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: s || a || o, hasMoreActiveThreads: o || a };
    });
}
function R(e) {
    let t = (0, a.bG)([f.A], () => f.A.getChannel(e?.parent_id)),
        n = (0, a.bG)([p.A], () => null != t && p.A.can(g.xBc.MANAGE_THREADS, t), [t]),
        i = (0, a.bG)([h.default], () => h.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function O(e, t) {
    return null != e && t.can(g.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function b(e, t, n) {
    return !(null == e || !e.isThread() || e.isMediaThread()) && (e.threadMetadata?.locked ? n : t);
}
function D(e) {
    let t = (0, a.bG)([p.A], () => O(e, p.A)),
        n = x(e);
    return b(e, t, n);
}
function L(e) {
    let t = O(e, p.A),
        n = k(e);
    return b(e, t, n);
}
function w(e) {
    let t = (0, a.bG)([p.A], () => null != e && p.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e));
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function M(e) {
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && p.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function P(e) {
    if (e.isMediaThread()) return !0;
    let t = p.A.can(g.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function x(e) {
    return (0, a.bG)([p.A], () => k(e, [p.A]));
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [p.A],
        [n] = t;
    return null != e && n.can(g.xBc.MANAGE_THREADS, e);
}
function U(e) {
    return (0, a.bG)([f.A, p.A, h.default], () => {
        let t = f.A.getChannel(e);
        if (null == t) return !1;
        let n = h.default.getId();
        return (t.type === g.rbe.PRIVATE_THREAD && t.ownerId === n) || k(t, [p.A]);
    });
}
function G(e) {
    let t = (0, u.A)(),
        n = (0, a.bG)([p.A], () => p.A.can(g.xBc.CONNECT, e)),
        i = w(e),
        r = A.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        s = (0, c.YG)(e),
        l = (0, o.a9)() && (0, o.UK)(e.id);
    return !t && e.isVocalThread() && (r || s) && n && i && !l;
}
function F(e) {
    let t = x(e);
    return e.isLockedThread() && !t;
}
