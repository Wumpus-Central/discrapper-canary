n.d(t, {
    $R: () => w,
    C7: () => N,
    Ek: () => I,
    Gu: () => U,
    JQ: () => T,
    NE: () => E,
    RG: () => D,
    Xb: () => M,
    Xu: () => y,
    Y: () => j,
    cD: () => v,
    ki: () => b,
    kn: () => P,
    tM: () => g,
    tc: () => R,
    xl: () => L
});
var r = n(392711),
    i = n.n(r),
    o = n(149765),
    a = n(442837),
    s = n(987170),
    l = n(590293),
    c = n(901461),
    u = n(131704),
    d = n(314897),
    f = n(592125),
    _ = n(496675),
    p = n(709054),
    h = n(601070),
    m = n(981631);
let g = (0, s.Z)({
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
    return O(
        (0, a.e7)(
            [_.Z],
            () => {
                let t = e.isForumLikeChannel() ? m.Plq.SEND_MESSAGES : o.$e(m.Plq.CREATE_PUBLIC_THREADS, m.Plq.READ_MESSAGE_HISTORY);
                return _.Z.can(t, e);
            },
            [e]
        ),
        e,
        t
    );
}
function b(e, t) {
    let n = e.isForumLikeChannel() ? m.Plq.SEND_MESSAGES : o.$e(m.Plq.CREATE_PUBLIC_THREADS, m.Plq.READ_MESSAGE_HISTORY);
    return O(_.Z.can(n, e), e, t);
}
function y(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.can(o.$e(m.Plq.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === m.d4z.GUILD_TEXT && O(t, e);
}
function v(e) {
    let t = E(e),
        n = y(e);
    return t || n;
}
function O(e, t, n) {
    return !(__OVERLAY__ || !e || !u.uC.has(t.type) || (null != n && (n.hasFlag(m.iLy.HAS_THREAD) || (0, c.Z)(n)))) && !0;
}
function I(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getChannel(p.default.castMessageIdAsChannelId(e.id)), [e]);
    return S(
        (0, a.e7)([_.Z], () => _.Z.can(m.Plq.VIEW_CHANNEL, t), [t]),
        e,
        t
    );
}
function S(e, t, n) {
    return !!t.hasFlag(m.iLy.HAS_THREAD) && null != n && !!e;
}
function T(e) {
    return (0, a.cj)([h.Z, _.Z], () => {
        let t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            o = i()(n).some((e) => _.Z.can(m.Plq.VIEW_CHANNEL, e.channel)),
            a = i()(t).some((e) => !(e.channel.id in n) && _.Z.can(m.Plq.VIEW_CHANNEL, e.channel)),
            s = i()(r).some((e) => _.Z.can(m.Plq.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: o || a || s,
            hasMoreActiveThreads: s || a
        };
    });
}
function N(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, a.e7)([_.Z], () => null != t && _.Z.can(m.Plq.MANAGE_THREADS, t), [t]),
        r = (0, a.e7)([d.default], () => d.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === r));
}
function A(e, t) {
    return null != e && t.can(m.Plq.SEND_MESSAGES_IN_THREADS, e);
}
function C(e, t, n) {
    var r;
    return null != e && !!e.isThread() && ((null == (r = e.threadMetadata) ? void 0 : r.locked) ? n : t);
}
function R(e) {
    let t = (0, a.e7)([_.Z], () => A(e, _.Z)),
        n = M(e);
    return C(e, t, n);
}
function P(e) {
    let t = A(e, _.Z),
        n = k(e);
    return C(e, t, n);
}
function w(e) {
    var t;
    let n = (0, a.e7)([_.Z], () => null != e && _.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && n));
}
function D(e) {
    var t;
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && _.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e)));
}
function L(e) {
    let t = _.Z.can(m.Plq.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function x(e, t) {
    return null != e && t.can(m.Plq.MANAGE_THREADS, e);
}
function M(e) {
    return (0, a.e7)([_.Z], () => x(e, _.Z));
}
function k(e) {
    return x(e, _.Z);
}
function j(e) {
    let t = (0, l.Z)(),
        n = (0, a.e7)([_.Z], () => _.Z.can(m.Plq.CONNECT, e)),
        r = w(e),
        i = g.useExperiment(
            {
                guildId: e.guild_id,
                location: 'e791ea_1'
            },
            { autoTrackExposure: !1 }
        ).enabled;
    return !t && e.isVocalThread() && i && n && r;
}
function U(e) {
    let t = M(e);
    return e.isLockedThread() && !t;
}
