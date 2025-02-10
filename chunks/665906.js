n.d(t, {
    $R: () => L,
    C7: () => N,
    Ek: () => b,
    Gu: () => G,
    JQ: () => A,
    NE: () => E,
    RG: () => x,
    Xb: () => M,
    Xu: () => y,
    Y: () => U,
    cD: () => I,
    ki: () => v,
    kn: () => D,
    tM: () => g,
    tc: () => O,
    xl: () => P
});
var i = n(392711),
    r = n.n(i),
    a = n(149765),
    s = n(442837),
    o = n(987170),
    l = n(590293),
    u = n(901461),
    c = n(131704),
    d = n(314897),
    f = n(592125),
    _ = n(496675),
    p = n(709054),
    h = n(601070),
    m = n(981631);
let g = (0, o.Z)({
    id: '2022-07_voice_in_threads',
    label: 'Voice in Threads',
    kind: 'guild',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function E(e, t) {
    return T(
        (0, s.e7)(
            [_.Z],
            () => {
                let t = e.isForumLikeChannel() ? m.Plq.SEND_MESSAGES : a.$e(m.Plq.CREATE_PUBLIC_THREADS, m.Plq.READ_MESSAGE_HISTORY);
                return _.Z.can(t, e);
            },
            [e]
        ),
        e,
        t
    );
}
function v(e, t) {
    let n = e.isForumLikeChannel() ? m.Plq.SEND_MESSAGES : a.$e(m.Plq.CREATE_PUBLIC_THREADS, m.Plq.READ_MESSAGE_HISTORY);
    return T(_.Z.can(n, e), e, t);
}
function y(e) {
    let t = (0, s.e7)([_.Z], () => _.Z.can(a.$e(m.Plq.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === m.d4z.GUILD_TEXT && T(t, e);
}
function I(e) {
    let t = E(e),
        n = y(e);
    return t || n;
}
function T(e, t, n) {
    return !(__OVERLAY__ || !e || !c.uC.has(t.type) || (null != n && (n.hasFlag(m.iLy.HAS_THREAD) || (0, u.Z)(n))));
}
function b(e) {
    let t = (0, s.e7)([f.Z], () => f.Z.getChannel(p.default.castMessageIdAsChannelId(e.id)), [e]);
    return S(
        (0, s.e7)([_.Z], () => _.Z.can(m.Plq.VIEW_CHANNEL, t), [t]),
        e,
        t
    );
}
function S(e, t, n) {
    return !!t.hasFlag(m.iLy.HAS_THREAD) && null != n && !!e;
}
function A(e) {
    return (0, s.cj)([h.Z, _.Z], () => {
        let t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = r()(n).some((e) => _.Z.can(m.Plq.VIEW_CHANNEL, e.channel)),
            s = r()(t).some((e) => !(e.channel.id in n) && _.Z.can(m.Plq.VIEW_CHANNEL, e.channel)),
            o = r()(i).some((e) => _.Z.can(m.Plq.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: a || s || o,
            hasMoreActiveThreads: o || s
        };
    });
}
function N(e) {
    let t = (0, s.e7)([f.Z], () => f.Z.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, s.e7)([_.Z], () => null != t && _.Z.can(m.Plq.MANAGE_THREADS, t), [t]),
        i = (0, s.e7)([d.default], () => d.default.getId());
    return !!(null != e && null != t && e.isThread()) && (!!n || (!e.isLockedThread() && e.ownerId === i));
}
function C(e, t) {
    return null != e && t.can(m.Plq.SEND_MESSAGES_IN_THREADS, e);
}
function R(e, t, n) {
    var i;
    return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t);
}
function O(e) {
    let t = (0, s.e7)([_.Z], () => C(e, _.Z)),
        n = M(e);
    return R(e, t, n);
}
function D(e) {
    let t = C(e, _.Z),
        n = k(e);
    return R(e, t, n);
}
function L(e) {
    var t;
    let n = (0, s.e7)([_.Z], () => null != e && _.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n));
}
function x(e) {
    var t;
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && _.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e)));
}
function P(e) {
    let t = _.Z.can(m.Plq.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function w(e, t) {
    return null != e && t.can(m.Plq.MANAGE_THREADS, e);
}
function M(e) {
    return (0, s.e7)([_.Z], () => w(e, _.Z));
}
function k(e) {
    return w(e, _.Z);
}
function U(e) {
    let t = (0, l.Z)(),
        n = (0, s.e7)([_.Z], () => _.Z.can(m.Plq.CONNECT, e)),
        i = L(e),
        r = g.useExperiment(
            {
                guildId: e.guild_id,
                location: 'e791ea_1'
            },
            { autoTrackExposure: !1 }
        ).enabled;
    return !t && e.isVocalThread() && r && n && i;
}
function G(e) {
    let t = M(e);
    return e.isLockedThread() && !t;
}
