"use strict";
n.d(t, {
    AI: () => N,
    D1: () => g,
    Et: () => b,
    H_: () => w,
    Id: () => M,
    NI: () => L,
    NR: () => O,
    R: () => R,
    Tb: () => S,
    UJ: () => U,
    _M: () => k,
    io: () => T,
    jr: () => P,
    lK: () => v,
    n: () => m,
    qi: () => x,
    s5: () => F,
});
var i = n(735438),
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
    f = n(695633),
    p = n(652215);
let T = (0, o.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function m(e, t) {
    return C(
        (0, s.bG)([h.A], () => {
            let t = e.isForumLikeChannel()
                ? p.xBc.SEND_MESSAGES
                : a.kg(p.xBc.CREATE_PUBLIC_THREADS, p.xBc.READ_MESSAGE_HISTORY);
            return h.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function g(e, t) {
    let n = e.isForumLikeChannel()
        ? p.xBc.SEND_MESSAGES
        : a.kg(p.xBc.CREATE_PUBLIC_THREADS, p.xBc.READ_MESSAGE_HISTORY);
    return C(h.A.can(n, e), e, t);
}
function S(e) {
    let t = (0, s.bG)([h.A], () => h.A.can(a.kg(p.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === p.rbe.GUILD_TEXT && C(t, e);
}
function N(e) {
    let t = m(e),
        n = S(e);
    return t || n;
}
function C(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !_.wE.has(t.type) || (null != n && (n.hasFlag(p.pr7.HAS_THREAD) || (0, u.A)(n)))) && !0
    );
}
function R(e) {
    var t, n, i;
    let r = (0, s.bG)([A.A], () => A.A.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, s.bG)([h.A], () => h.A.can(p.xBc.VIEW_CHANNEL, r), [r])),
        (n = e),
        (i = r),
        !!n.hasFlag(p.pr7.HAS_THREAD) && null != i && !!t
    );
}
function O(e) {
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
function L(e) {
    let t = (0, s.bG)([A.A], () => A.A.getChannel(e?.parent_id)),
        n = (0, s.bG)([h.A], () => null != t && h.A.can(p.xBc.MANAGE_THREADS, t), [t]),
        i = (0, s.bG)([E.default], () => E.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function D(e, t) {
    return null != e && t.can(p.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function y(e, t, n) {
    return !(null == e || !e.isThread() || e.isMediaThread()) && (e.threadMetadata?.locked ? n : t);
}
function v(e) {
    let t = (0, s.bG)([h.A], () => D(e, h.A)),
        n = w(e);
    return y(e, t, n);
}
function b(e) {
    let t = D(e, h.A),
        n = G(e);
    return y(e, t, n);
}
function M(e) {
    let t = (0, s.bG)([h.A], () => null != e && h.A.can(p.xBc.SEND_MESSAGES_IN_THREADS, e));
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function P(e) {
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && h.A.can(p.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function U(e) {
    if (e.isMediaThread()) return !0;
    let t = h.A.can(p.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function w(e) {
    return (0, s.bG)([h.A], () => G(e, [h.A]));
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [h.A],
        [n] = t;
    return null != e && n.can(p.xBc.MANAGE_THREADS, e);
}
function x(e) {
    return (0, s.bG)([A.A, h.A, E.default], () => {
        let t = A.A.getChannel(e);
        if (null == t) return !1;
        let n = E.default.getId();
        return (t.type === p.rbe.PRIVATE_THREAD && t.ownerId === n) || G(t, [h.A]);
    });
}
function k(e) {
    let t = (0, d.A)(),
        n = (0, s.bG)([h.A], () => h.A.can(p.xBc.CONNECT, e)),
        i = M(e),
        r = T.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        a = (0, c.YG)(e),
        o = (0, l.a9)() && (0, l.UK)(e.id);
    return !t && e.isVocalThread() && (r || a) && n && i && !o;
}
function F(e) {
    let t = w(e);
    return e.isLockedThread() && !t;
}
