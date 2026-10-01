n.d(t, {
    AI: () => O,
    D1: () => m,
    Et: () => P,
    H_: () => x,
    Id: () => U,
    NI: () => D,
    NR: () => y,
    R: () => L,
    Tb: () => S,
    UJ: () => G,
    _M: () => V,
    gZ: () => B,
    io: () => T,
    jr: () => w,
    lK: () => M,
    n: () => g,
    qi: () => F,
    s5: () => H,
    vy: () => N,
});
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(17928),
    l = n(323073),
    o = n(36200),
    d = n(753727),
    c = n(807632),
    u = n(143413),
    _ = n(95701),
    E = n(280450),
    A = n(734057),
    h = n(576705),
    I = n(935208),
    f = n(863005),
    p = n(652215);
let T = (0, o.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function g(e, t) {
    return R(
        (0, s.bG)(
            [h.A],
            () => {
                let t = e.isForumLikeChannel()
                    ? p.xBc.SEND_MESSAGES
                    : a.kg(p.xBc.CREATE_PUBLIC_THREADS, p.xBc.READ_MESSAGE_HISTORY);
                return h.A.can(t, e);
            },
            [e],
        ),
        e,
        t,
    );
}
function m(e, t) {
    let n = e.isForumLikeChannel()
        ? p.xBc.SEND_MESSAGES
        : a.kg(p.xBc.CREATE_PUBLIC_THREADS, p.xBc.READ_MESSAGE_HISTORY);
    return R(h.A.can(n, e), e, t);
}
function S(e) {
    return C(
        (0, s.bG)([h.A], () => h.A.can(a.kg(p.xBc.CREATE_PRIVATE_THREADS), e), [e]),
        e,
    );
}
function N(e, t) {
    return C(h.A.can(p.xBc.CREATE_PRIVATE_THREADS, e), e, t);
}
function C(e, t, n) {
    return (t.type === p.rbe.GUILD_TEXT || t.type === p.rbe.GUILD_APP) && R(e, t, n);
}
function O(e) {
    let t = g(e),
        n = S(e);
    return t || n;
}
function R(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !_.wE.has(t.type) || (null != n && (n.hasFlag(p.pr7.HAS_THREAD) || (0, u.A)(n)))) && !0
    );
}
function L(e) {
    var t, n, i;
    let r = (0, s.bG)([A.A], () => A.A.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, s.bG)([h.A], () => h.A.can(p.xBc.VIEW_CHANNEL, r), [r])),
        (n = e),
        (i = r),
        !!n.hasFlag(p.pr7.HAS_THREAD) && null != i && !!t
    );
}
function y(e) {
    return (0, s.cf)([f.A, h.A], () => {
        let t = f.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = f.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = f.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = r()(n).some((e) => h.A.can(p.xBc.VIEW_CHANNEL, e.channel)),
            s = r()(t).some((e) => !(e.channel.id in n) && h.A.can(p.xBc.VIEW_CHANNEL, e.channel)),
            l = r()(i).some((e) => h.A.can(p.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: a || s || l, hasMoreActiveThreads: l || s };
    });
}
function D(e) {
    let t = (0, s.bG)([A.A], () => A.A.getChannel(e?.parent_id)),
        n = (0, s.bG)([h.A], () => null != t && h.A.can(p.xBc.MANAGE_THREADS, t), [t]),
        i = (0, s.bG)([E.default], () => E.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function v(e, t) {
    return null != e && t.can(p.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function b(e, t, n) {
    return !(null == e || !e.isThread() || e.isMediaThread()) && (e.threadMetadata?.locked ? n : t);
}
function M(e) {
    let t = (0, s.bG)(
            [h.A],
            () => null != e && h.A.can(p.xBc.SEND_MESSAGES_IN_THREADS, e) && h.A.can(p.xBc.SEND_MESSAGES, e),
        ),
        n = (0, s.bG)(
            [h.A, A.A],
            () => {
                let t = null != e ? A.A.getChannel(e.parent_id) : null;
                return null != t && h.A.can(p.xBc.SEND_MESSAGES_IN_THREADS, e) && h.A.can(p.xBc.SEND_MESSAGES, t);
            },
            [e],
        ),
        i = x(e);
    return b(e, t && n, i);
}
function P(e) {
    let t = v(e, h.A),
        n = v(null != e ? A.A.getChannel(e.parent_id) : null, h.A),
        i = k(e);
    return b(e, t && n, i);
}
function U(e) {
    let t = M(e);
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function w(e) {
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && P(e)))
    );
}
function G(e) {
    if (e.isMediaThread()) return !0;
    let t = h.A.can(p.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function x(e) {
    return (0, s.bG)([h.A], () => k(e, [h.A]));
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [h.A],
        [n] = t;
    return null != e && n.can(p.xBc.MANAGE_THREADS, e);
}
function F(e) {
    return (0, s.bG)([A.A, h.A, E.default], () => {
        let t = A.A.getChannel(e);
        if (null == t) return !1;
        let n = E.default.getId();
        return (t.type === p.rbe.PRIVATE_THREAD && t.ownerId === n) || k(t, [h.A]);
    });
}
function B(e) {
    let t = (0, s.bG)([h.A], () => h.A.can(p.xBc.CONNECT, e)),
        n = U(e);
    return t && n;
}
function V(e) {
    let t = (0, d.A)(),
        n = B(e),
        i = T.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        r = (0, c.YG)(e),
        a = (0, l.a9)() && (0, l.UK)(e.id);
    return !t && e.isVocalThread() && (i || r) && n && !a;
}
function H(e) {
    let t = x(e);
    return e.isLockedThread() && !t;
}
