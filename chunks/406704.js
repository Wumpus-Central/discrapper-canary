(n.d(t, {
    AI: () => R,
    D1: () => S,
    Et: () => U,
    H_: () => k,
    Id: () => w,
    NI: () => v,
    NR: () => D,
    R: () => y,
    Tb: () => N,
    UJ: () => x,
    _M: () => H,
    gZ: () => V,
    io: () => m,
    jr: () => G,
    lK: () => M,
    n: () => g,
    qi: () => B,
    s5: () => j,
    vy: () => C,
}),
    n(582128));
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(17928);
(n(361610), n(36124));
var l = n(323073),
    o = n(597306),
    d = n(36200),
    c = n(753727),
    u = n(807632),
    _ = n(143413),
    E = n(95701),
    A = n(280450),
    h = n(734057),
    f = n(576705),
    I = n(935208),
    p = n(863005);
n(219065);
var T = n(652215);
let m = (0, d.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function g(e, t) {
    return L(
        (0, s.bG)(
            [f.A],
            () => {
                let t = e.isForumLikeChannel()
                    ? T.xBc.SEND_MESSAGES
                    : a.kg(T.xBc.CREATE_PUBLIC_THREADS, T.xBc.READ_MESSAGE_HISTORY);
                return f.A.can(t, e);
            },
            [e],
        ),
        e,
        t,
    );
}
function S(e, t) {
    let n = e.isForumLikeChannel()
        ? T.xBc.SEND_MESSAGES
        : a.kg(T.xBc.CREATE_PUBLIC_THREADS, T.xBc.READ_MESSAGE_HISTORY);
    return L(f.A.can(n, e), e, t);
}
function N(e) {
    return O(
        (0, s.bG)([f.A], () => f.A.can(a.kg(T.xBc.CREATE_PRIVATE_THREADS), e), [e]),
        e,
    );
}
function C(e, t) {
    return O(f.A.can(T.xBc.CREATE_PRIVATE_THREADS, e), e, t);
}
function O(e, t, n) {
    return (t.type === T.rbe.GUILD_TEXT || t.type === T.rbe.GUILD_APP) && L(e, t, n);
}
function R(e) {
    let t = g(e),
        n = N(e);
    return t || n;
}
function L(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !E.wE.has(t.type) || (null != n && (n.hasFlag(T.pr7.HAS_THREAD) || (0, _.A)(n)))) && !0
    );
}
function y(e) {
    var t, n, i;
    let r = (0, s.bG)([h.A], () => h.A.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, s.bG)([f.A], () => f.A.can(T.xBc.VIEW_CHANNEL, r), [r])),
        (n = e),
        (i = r),
        !!n.hasFlag(T.pr7.HAS_THREAD) && null != i && !!t
    );
}
function D(e) {
    return (0, s.cf)([p.A, f.A], () => {
        let t = p.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = p.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = p.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = r()(n).some((e) => f.A.can(T.xBc.VIEW_CHANNEL, e.channel)),
            s = r()(t).some((e) => !(e.channel.id in n) && f.A.can(T.xBc.VIEW_CHANNEL, e.channel)),
            l = r()(i).some((e) => f.A.can(T.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: a || s || l, hasMoreActiveThreads: l || s };
    });
}
function v(e) {
    let t = (0, s.bG)([h.A], () => h.A.getChannel(e?.parent_id)),
        n = (0, s.bG)([f.A], () => null != t && f.A.can(T.xBc.MANAGE_THREADS, t), [t]),
        i = (0, s.bG)([A.default], () => A.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function b(e, t) {
    return null != e && t.can(T.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function P(e, t, n) {
    return !(null == e || !e.isThread() || e.isMediaThread()) && (e.threadMetadata?.locked ? n : t);
}
function M(e) {
    let t = (0, s.bG)(
            [f.A],
            () => null != e && f.A.can(T.xBc.SEND_MESSAGES_IN_THREADS, e) && f.A.can(T.xBc.SEND_MESSAGES, e),
        ),
        n = (0, s.bG)(
            [f.A, h.A],
            () => {
                let t = null != e ? h.A.getChannel(e.parent_id) : null;
                return null != t && f.A.can(T.xBc.SEND_MESSAGES_IN_THREADS, e) && f.A.can(T.xBc.SEND_MESSAGES, t);
            },
            [e],
        ),
        i = k(e);
    return P(e, t && n, i);
}
function U(e) {
    let t = b(e, f.A),
        n = b(null != e ? h.A.getChannel(e.parent_id) : null, f.A),
        i = F(e);
    return P(e, t && n, i);
}
function w(e) {
    let t = M(e);
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function G(e) {
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && U(e)))
    );
}
function x(e) {
    if (e.isMediaThread()) return !0;
    let t = f.A.can(T.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function k(e) {
    return (0, s.bG)([f.A], () => F(e, [f.A]));
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [f.A],
        [n] = t;
    return null != e && n.can(T.xBc.MANAGE_THREADS, e);
}
function B(e) {
    return (0, s.bG)([h.A, f.A, A.default], () => {
        let t = h.A.getChannel(e);
        if (null == t) return !1;
        let n = A.default.getId();
        return (t.type === T.rbe.PRIVATE_THREAD && t.ownerId === n) || F(t, [f.A]);
    });
}
function V(e) {
    let t = (0, s.bG)([f.A], () => f.A.can(T.xBc.CONNECT, e)),
        n = w(e);
    return t && n;
}
function H(e) {
    let t = (0, c.A)(),
        n = V(e),
        i = m.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        r = (0, u.YG)(e),
        a = (0, o.a)() && (0, l.UK)(e.id);
    return !t && e.isVocalThread() && (i || r) && n && !a;
}
function j(e) {
    let t = k(e);
    return e.isLockedThread() && !t;
}
