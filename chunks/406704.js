n.d(t, {
    AI: () => m,
    D1: () => f,
    Et: () => M,
    H_: () => y,
    Id: () => P,
    NI: () => g,
    NR: () => R,
    R: () => C,
    Tb: () => p,
    UJ: () => v,
    _M: () => x,
    io: () => S,
    jr: () => U,
    lK: () => b,
    n: () => N,
    qi: () => w,
    s5: () => V,
});
var i = n(735438),
    a = n.n(i),
    r = n(136722),
    s = n(17928),
    l = n(323073),
    o = n(36200),
    d = n(753727),
    c = n(143413),
    _ = n(95701),
    E = n(495544),
    u = n(734057),
    A = n(576705),
    I = n(935208),
    T = n(695633),
    h = n(652215);
let S = (0, o.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function N(e, t) {
    return O(
        (0, s.bG)([A.A], () => {
            let t = e.isForumLikeChannel()
                ? h.xBc.SEND_MESSAGES
                : r.kg(h.xBc.CREATE_PUBLIC_THREADS, h.xBc.READ_MESSAGE_HISTORY);
            return A.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function f(e, t) {
    let n = e.isForumLikeChannel()
        ? h.xBc.SEND_MESSAGES
        : r.kg(h.xBc.CREATE_PUBLIC_THREADS, h.xBc.READ_MESSAGE_HISTORY);
    return O(A.A.can(n, e), e, t);
}
function p(e) {
    let t = (0, s.bG)([A.A], () => A.A.can(r.kg(h.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === h.rbe.GUILD_TEXT && O(t, e);
}
function m(e) {
    let t = N(e),
        n = p(e);
    return t || n;
}
function O(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !_.wE.has(t.type) || (null != n && (n.hasFlag(h.pr7.HAS_THREAD) || (0, c.A)(n)))) && !0
    );
}
function C(e) {
    var t, n, i;
    let a = (0, s.bG)([u.A], () => u.A.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, s.bG)([A.A], () => A.A.can(h.xBc.VIEW_CHANNEL, a), [a])),
        (n = e),
        (i = a),
        !!n.hasFlag(h.pr7.HAS_THREAD) && null != i && !!t
    );
}
function R(e) {
    return (0, s.cf)([T.A, A.A], () => {
        let t = T.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = T.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = T.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            r = a()(n).some((e) => A.A.can(h.xBc.VIEW_CHANNEL, e.channel)),
            s = a()(t).some((e) => !(e.channel.id in n) && A.A.can(h.xBc.VIEW_CHANNEL, e.channel)),
            l = a()(i).some((e) => A.A.can(h.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: r || s || l, hasMoreActiveThreads: l || s };
    });
}
function g(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e?.parent_id)),
        n = (0, s.bG)([A.A], () => null != t && A.A.can(h.xBc.MANAGE_THREADS, t), [t]),
        i = (0, s.bG)([E.default], () => E.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function L(e, t) {
    return null != e && t.can(h.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function D(e, t, n) {
    return null != e && !!e.isThread() && (e.threadMetadata?.locked ? n : t);
}
function b(e) {
    let t = (0, s.bG)([A.A], () => L(e, A.A)),
        n = y(e);
    return D(e, t, n);
}
function M(e) {
    let t = L(e, A.A),
        n = G(e);
    return D(e, t, n);
}
function P(e) {
    let t = (0, s.bG)([A.A], () => null != e && A.A.can(h.xBc.SEND_MESSAGES_IN_THREADS, e));
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function U(e) {
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && A.A.can(h.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function v(e) {
    let t = A.A.can(h.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function y(e) {
    return (0, s.bG)([A.A], () => G(e, [A.A]));
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [A.A],
        [n] = t;
    return null != e && n.can(h.xBc.MANAGE_THREADS, e);
}
function w(e) {
    return (0, s.bG)([u.A, A.A, E.default], () => {
        let t = u.A.getChannel(e);
        if (null == t) return !1;
        let n = E.default.getId();
        return (t.type === h.rbe.PRIVATE_THREAD && t.ownerId === n) || G(t, [A.A]);
    });
}
function x(e) {
    let t = (0, d.A)(),
        n = (0, s.bG)([A.A], () => A.A.can(h.xBc.CONNECT, e)),
        i = P(e),
        a = S.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        r = (0, l.a9)() && (0, l.UK)(e.id);
    return !t && e.isVocalThread() && a && n && i && !r;
}
function V(e) {
    let t = y(e);
    return e.isLockedThread() && !t;
}
