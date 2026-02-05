"use strict";
n.d(t, {
    AI: () => y,
    D1: () => I,
    Et: () => L,
    H_: () => k,
    Id: () => w,
    NI: () => N,
    NR: () => b,
    R: () => v,
    Tb: () => T,
    UJ: () => P,
    _M: () => V,
    io: () => E,
    jr: () => x,
    lK: () => D,
    n: () => A,
    qi: () => G,
    s5: () => F,
});
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(311907),
    o = n(323073),
    l = n(143770),
    u = n(753727),
    c = n(143413),
    d = n(95701),
    _ = n(961350),
    f = n(734057),
    p = n(576705),
    h = n(661191),
    m = n(863005),
    g = n(652215);
let E = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function A(e, t) {
    return S(
        (0, s.bG)([p.A], () => {
            let t = e.isForumLikeChannel()
                ? g.xBc.SEND_MESSAGES
                : a.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
            return p.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function I(e, t) {
    let n = e.isForumLikeChannel()
        ? g.xBc.SEND_MESSAGES
        : a.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
    return S(p.A.can(n, e), e, t);
}
function T(e) {
    let t = (0, s.bG)([p.A], () => p.A.can(a.kg(g.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === g.rbe.GUILD_TEXT && S(t, e);
}
function y(e) {
    let t = A(e),
        n = T(e);
    return t || n;
}
function S(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !d.wE.has(t.type) || (null != n && (n.hasFlag(g.pr7.HAS_THREAD) || (0, c.A)(n)))) && !0
    );
}
function v(e) {
    let t = (0, s.bG)([f.A], () => f.A.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]);
    return C(
        (0, s.bG)([p.A], () => p.A.can(g.xBc.VIEW_CHANNEL, t), [t]),
        e,
        t,
    );
}
function C(e, t, n) {
    return !!t.hasFlag(g.pr7.HAS_THREAD) && null != n && !!e;
}
function b(e) {
    return (0, s.cf)([m.A, p.A], () => {
        let t = m.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = m.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i()(n).some((e) => p.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            s = i()(t).some((e) => !(e.channel.id in n) && p.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            o = i()(r).some((e) => p.A.can(g.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: a || s || o, hasMoreActiveThreads: o || s };
    });
}
function N(e) {
    let t = (0, s.bG)([f.A], () => f.A.getChannel(e?.parent_id)),
        n = (0, s.bG)([p.A], () => null != t && p.A.can(g.xBc.MANAGE_THREADS, t), [t]),
        r = (0, s.bG)([_.default], () => _.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === r));
}
function R(e, t) {
    return null != e && t.can(g.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function O(e, t, n) {
    return null != e && !!e.isThread() && (e.threadMetadata?.locked ? n : t);
}
function D(e) {
    let t = (0, s.bG)([p.A], () => R(e, p.A)),
        n = k(e);
    return O(e, t, n);
}
function L(e) {
    let t = R(e, p.A),
        n = U(e);
    return O(e, t, n);
}
function w(e) {
    let t = (0, s.bG)([p.A], () => null != e && p.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e));
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function x(e) {
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && p.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function P(e) {
    let t = p.A.can(g.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function M(e, t) {
    return null != e && t.can(g.xBc.MANAGE_THREADS, e);
}
function k(e) {
    return (0, s.bG)([p.A], () => U(e, [p.A]));
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [p.A],
        [n] = t;
    return M(e, n);
}
function G(e) {
    return (0, s.bG)([f.A, p.A, _.default], () => {
        let t = f.A.getChannel(e);
        if (null == t) return !1;
        let n = _.default.getId();
        return (t.type === g.rbe.PRIVATE_THREAD && t.ownerId === n) || U(t, [p.A]);
    });
}
function V(e) {
    let t = (0, u.A)(),
        n = (0, s.bG)([p.A], () => p.A.can(g.xBc.CONNECT, e)),
        r = w(e),
        i = E.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        a = (0, o.a9)() && (0, o.UK)(e.id);
    return !t && e.isVocalThread() && i && n && r && !a;
}
function F(e) {
    let t = k(e);
    return e.isLockedThread() && !t;
}
