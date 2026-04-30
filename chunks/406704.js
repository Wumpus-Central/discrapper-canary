"use strict";
n.d(t, {
    AI: () => S,
    D1: () => I,
    Et: () => D,
    H_: () => P,
    Id: () => L,
    NI: () => v,
    NR: () => C,
    R: () => y,
    Tb: () => T,
    UJ: () => M,
    _M: () => k,
    io: () => g,
    jr: () => w,
    lK: () => b,
    n: () => A,
    qi: () => U,
    s5: () => G,
});
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(17928),
    o = n(323073),
    l = n(880006),
    u = n(753727),
    c = n(143413),
    d = n(95701),
    _ = n(495544),
    f = n(734057),
    h = n(576705),
    p = n(935208),
    E = n(695633),
    m = n(652215);
let g = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function A(e, t) {
    return N(
        (0, a.bG)([h.A], () => {
            let t = e.isForumLikeChannel()
                ? m.xBc.SEND_MESSAGES
                : s.kg(m.xBc.CREATE_PUBLIC_THREADS, m.xBc.READ_MESSAGE_HISTORY);
            return h.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}
function I(e, t) {
    let n = e.isForumLikeChannel()
        ? m.xBc.SEND_MESSAGES
        : s.kg(m.xBc.CREATE_PUBLIC_THREADS, m.xBc.READ_MESSAGE_HISTORY);
    return N(h.A.can(n, e), e, t);
}
function T(e) {
    let t = (0, a.bG)([h.A], () => h.A.can(s.kg(m.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === m.rbe.GUILD_TEXT && N(t, e);
}
function S(e) {
    let t = A(e),
        n = T(e);
    return t || n;
}
function N(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !d.wE.has(t.type) || (null != n && (n.hasFlag(m.pr7.HAS_THREAD) || (0, c.A)(n)))) && !0
    );
}
function y(e) {
    var t, n, i;
    let r = (0, a.bG)([f.A], () => f.A.getChannel(p.default.castMessageIdAsChannelId(e.id)), [e]);
    return (
        (t = (0, a.bG)([h.A], () => h.A.can(m.xBc.VIEW_CHANNEL, r), [r])),
        (n = e),
        (i = r),
        !!n.hasFlag(m.pr7.HAS_THREAD) && null != i && !!t
    );
}
function C(e) {
    return (0, a.cf)([E.A, h.A], () => {
        let t = E.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = E.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = E.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = r()(n).some((e) => h.A.can(m.xBc.VIEW_CHANNEL, e.channel)),
            a = r()(t).some((e) => !(e.channel.id in n) && h.A.can(m.xBc.VIEW_CHANNEL, e.channel)),
            o = r()(i).some((e) => h.A.can(m.xBc.VIEW_CHANNEL, e));
        return { hasActiveThreads: s || a || o, hasMoreActiveThreads: o || a };
    });
}
function v(e) {
    let t = (0, a.bG)([f.A], () => f.A.getChannel(e?.parent_id)),
        n = (0, a.bG)([h.A], () => null != t && h.A.can(m.xBc.MANAGE_THREADS, t), [t]),
        i = (0, a.bG)([_.default], () => _.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function O(e, t) {
    return null != e && t.can(m.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function R(e, t, n) {
    return null != e && !!e.isThread() && (e.threadMetadata?.locked ? n : t);
}
function b(e) {
    let t = (0, a.bG)([h.A], () => O(e, h.A)),
        n = P(e);
    return R(e, t, n);
}
function D(e) {
    let t = O(e, h.A),
        n = x(e);
    return R(e, t, n);
}
function L(e) {
    let t = (0, a.bG)([h.A], () => null != e && h.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, e));
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
            (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && h.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}
function M(e) {
    let t = h.A.can(m.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function P(e) {
    return (0, a.bG)([h.A], () => x(e, [h.A]));
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [h.A],
        [n] = t;
    return null != e && n.can(m.xBc.MANAGE_THREADS, e);
}
function U(e) {
    return (0, a.bG)([f.A, h.A, _.default], () => {
        let t = f.A.getChannel(e);
        if (null == t) return !1;
        let n = _.default.getId();
        return (t.type === m.rbe.PRIVATE_THREAD && t.ownerId === n) || x(t, [h.A]);
    });
}
function k(e) {
    let t = (0, u.A)(),
        n = (0, a.bG)([h.A], () => h.A.can(m.xBc.CONNECT, e)),
        i = L(e),
        r = g.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
        s = (0, o.a9)() && (0, o.UK)(e.id);
    return !t && e.isVocalThread() && r && n && i && !s;
}
function G(e) {
    let t = P(e);
    return e.isLockedThread() && !t;
}
