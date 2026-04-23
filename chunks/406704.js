n.d(t, {
    AI: () => C,
    D1: () => R,
    Et: () => U,
    H_: () => G,
    Id: () => P,
    NI: () => D,
    NR: () => L,
    R: () => m,
    Tb: () => f,
    UJ: () => y,
    _M: () => w,
    io: () => N,
    jr: () => M,
    lK: () => b,
    n: () => O,
    qi: () => B,
    s5: () => F,
});
var i = n(735438),
    r = n.n(i),
    a = n(136722),
    s = n(17928),
    _ = n(323073),
    l = n(36200),
    o = n(753727),
    E = n(143413),
    d = n(95701),
    c = n(495544),
    u = n(734057),
    I = n(576705),
    A = n(935208),
    T = n(695633),
    S = n(652215);
let N = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function O(e, t) {
    return p(
        (0, s.bG)([I.A], () => {
            let t = e.isForumLikeChannel()
                ? S.xBc.SEND_MESSAGES
                : a.kg(S.xBc.CREATE_PUBLIC_THREADS, S.xBc.READ_MESSAGE_HISTORY);
            return I.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function R(e, t) {
    let n = e.isForumLikeChannel()
        ? S.xBc.SEND_MESSAGES
        : a.kg(S.xBc.CREATE_PUBLIC_THREADS, S.xBc.READ_MESSAGE_HISTORY);
    return p(I.A.can(n, e), e, t);
}
function f(e) {
    let t = (0, s.bG)([I.A], () => I.A.can(a.kg(S.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === S.rbe.GUILD_TEXT && p(t, e);
}
function C(e) {
    let t = O(e),
        n = f(e);
    return t || n;
}
function p(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !d.wE.has(t.type) || (null != n && (n.hasFlag(S.pr7.HAS_THREAD) || (0, E.A)(n)))) && !0
    );
}
function m(e) {
    var t, n, i;
    let r = (0, s.bG)([u.A], () => u.A.getChannel(A.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, s.bG)([I.A], () => I.A.can(S.xBc.VIEW_CHANNEL, r), [r])),
        (n = e),
        (i = r),
        !!n.hasFlag(S.pr7.HAS_THREAD) && null != i && !!t
    );
}
function L(e) {
    return (0, s.cf)([T.A, I.A], () => {
        let t = T.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = T.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = T.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = r()(n).some((e) => I.A.can(S.xBc.VIEW_CHANNEL, e.channel)),
            s = r()(t).some((e) => !(e.channel.id in n) && I.A.can(S.xBc.VIEW_CHANNEL, e.channel)),
            _ = r()(i).some((e) => I.A.can(S.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: a || s || _, hasMoreActiveThreads: _ || s };
    });
}
function D(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e?.parent_id)),
        n = (0, s.bG)([I.A], () => null != t && I.A.can(S.xBc.MANAGE_THREADS, t), [t]),
        i = (0, s.bG)([c.default], () => c.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function h(e, t) {
    return null != e && t.can(S.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function g(e, t, n) {
    return null != e && !!e.isThread() && (e.threadMetadata?.locked ? n : t);
}
function b(e) {
    let t = (0, s.bG)([I.A], () => h(e, I.A)),
        n = G(e);
    return g(e, t, n);
}
function U(e) {
    let t = h(e, I.A),
        n = v(e);
    return g(e, t, n);
}
function P(e) {
    let t = (0, s.bG)([I.A], () => null != e && I.A.can(S.xBc.SEND_MESSAGES_IN_THREADS, e));
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
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && I.A.can(S.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function y(e) {
    let t = I.A.can(S.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function G(e) {
    return (0, s.bG)([I.A], () => v(e, [I.A]));
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [I.A],
        [n] = t;
    return null != e && n.can(S.xBc.MANAGE_THREADS, e);
}
function B(e) {
    return (0, s.bG)([u.A, I.A, c.default], () => {
        let t = u.A.getChannel(e);
        if (null == t) return !1;
        let n = c.default.getId();
        return (t.type === S.rbe.PRIVATE_THREAD && t.ownerId === n) || v(t, [I.A]);
    });
}
function w(e) {
    let t = (0, o.A)(),
        n = (0, s.bG)([I.A], () => I.A.can(S.xBc.CONNECT, e)),
        i = P(e),
        r = N.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        a = (0, _.a9)() && (0, _.UK)(e.id);
    return !t && e.isVocalThread() && r && n && i && !a;
}
function F(e) {
    let t = G(e);
    return e.isLockedThread() && !t;
}
