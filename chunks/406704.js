"use strict";
n.d(t, {
    AI: () => S,
    D1: () => I,
    Et: () => D,
    H_: () => P,
    Id: () => L,
    NI: () => C,
    NR: () => v,
    R: () => N,
    Tb: () => T,
    UJ: () => M,
    _M: () => U,
    io: () => g,
    jr: () => w,
    lK: () => b,
    n: () => A,
    qi: () => k,
    s5: () => G,
});
var r = n(735438),
    i = n.n(r),
    s = n(136722),
    a = n(311907),
    o = n(323073),
    l = n(143770),
    u = n(753727),
    c = n(143413),
    d = n(95701),
    _ = n(961350),
    f = n(734057),
    p = n(576705),
    h = n(661191),
    E = n(863005),
    m = n(652215);
let g = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function A(e, t) {
    return y(
        (0, a.bG)([p.A], () => {
            let t = e.isForumLikeChannel()
                ? m.xBc.SEND_MESSAGES
                : s.kg(m.xBc.CREATE_PUBLIC_THREADS, m.xBc.READ_MESSAGE_HISTORY);
            return p.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function I(e, t) {
    let n = e.isForumLikeChannel()
        ? m.xBc.SEND_MESSAGES
        : s.kg(m.xBc.CREATE_PUBLIC_THREADS, m.xBc.READ_MESSAGE_HISTORY);
    return y(p.A.can(n, e), e, t);
}
function T(e) {
    let t = (0, a.bG)([p.A], () => p.A.can(s.kg(m.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === m.rbe.GUILD_TEXT && y(t, e);
}
function S(e) {
    let t = A(e),
        n = T(e);
    return t || n;
}
function y(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !d.wE.has(t.type) || (null != n && (n.hasFlag(m.pr7.HAS_THREAD) || (0, c.A)(n)))) && !0
    );
}
function N(e) {
    var t, n, r;
    let i = (0, a.bG)([f.A], () => f.A.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, a.bG)([p.A], () => p.A.can(m.xBc.VIEW_CHANNEL, i), [i])),
        (n = e),
        (r = i),
        !!n.hasFlag(m.pr7.HAS_THREAD) && null != r && !!t
    );
}
function v(e) {
    return (0, a.cf)([E.A, p.A], () => {
        let t = E.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = E.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = E.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = i()(n).some((e) => p.A.can(m.xBc.VIEW_CHANNEL, e.channel)),
            a = i()(t).some((e) => !(e.channel.id in n) && p.A.can(m.xBc.VIEW_CHANNEL, e.channel)),
            o = i()(r).some((e) => p.A.can(m.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: s || a || o, hasMoreActiveThreads: o || a };
    });
}
function C(e) {
    let t = (0, a.bG)([f.A], () => f.A.getChannel(e?.parent_id)),
        n = (0, a.bG)([p.A], () => null != t && p.A.can(m.xBc.MANAGE_THREADS, t), [t]),
        r = (0, a.bG)([_.default], () => _.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === r));
}
function O(e, t) {
    return null != e && t.can(m.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function R(e, t, n) {
    return null != e && !!e.isThread() && (e.threadMetadata?.locked ? n : t);
}
function b(e) {
    let t = (0, a.bG)([p.A], () => O(e, p.A)),
        n = P(e);
    return R(e, t, n);
}
function D(e) {
    let t = O(e, p.A),
        n = x(e);
    return R(e, t, n);
}
function L(e) {
    let t = (0, a.bG)([p.A], () => null != e && p.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, e));
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function w(e) {
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && p.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function M(e) {
    let t = p.A.can(m.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function P(e) {
    return (0, a.bG)([p.A], () => x(e, [p.A]));
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [p.A],
        [n] = t;
    return null != e && n.can(m.xBc.MANAGE_THREADS, e);
}
function k(e) {
    return (0, a.bG)([f.A, p.A, _.default], () => {
        let t = f.A.getChannel(e);
        if (null == t) return !1;
        let n = _.default.getId();
        return (t.type === m.rbe.PRIVATE_THREAD && t.ownerId === n) || x(t, [p.A]);
    });
}
function U(e) {
    let t = (0, u.A)(),
        n = (0, a.bG)([p.A], () => p.A.can(m.xBc.CONNECT, e)),
        r = L(e),
        i = g.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        s = (0, o.a9)() && (0, o.UK)(e.id);
    return !t && e.isVocalThread() && i && n && r && !s;
}
function G(e) {
    let t = P(e);
    return e.isLockedThread() && !t;
}
