(n.d(t, {
    $R: () => D,
    C7: () => N,
    Ek: () => T,
    Gu: () => B,
    JQ: () => A,
    NE: () => b,
    RG: () => L,
    Xb: () => k,
    Xu: () => O,
    Y: () => G,
    cD: () => v,
    ki: () => y,
    kn: () => w,
    tM: () => E,
    tc: () => P,
    xl: () => x,
    yw: () => U
}),
    n(388685));
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    o = n(442837),
    s = n(622822),
    l = n(987170),
    c = n(590293),
    u = n(901461),
    d = n(131704),
    _ = n(314897),
    f = n(592125),
    p = n(496675),
    h = n(709054),
    m = n(601070),
    g = n(981631);
let E = (0, l.Z)({
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
function b(e, t) {
    return I(
        (0, o.e7)(
            [p.Z],
            () => {
                let t = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : a.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
                return p.Z.can(t, e);
            },
            [e]
        ),
        e,
        t
    );
}
function y(e, t) {
    let n = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : a.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
    return I(p.Z.can(n, e), e, t);
}
function O(e) {
    let t = (0, o.e7)([p.Z], () => p.Z.can(a.$e(g.Plq.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === g.d4z.GUILD_TEXT && I(t, e);
}
function v(e) {
    let t = b(e),
        n = O(e);
    return t || n;
}
function I(e, t, n) {
    return !(__OVERLAY__ || !e || !d.uC.has(t.type) || (null != n && (n.hasFlag(g.iLy.HAS_THREAD) || (0, u.Z)(n)))) && !0;
}
function T(e) {
    let t = (0, o.e7)([f.Z], () => f.Z.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]);
    return S(
        (0, o.e7)([p.Z], () => p.Z.can(g.Plq.VIEW_CHANNEL, t), [t]),
        e,
        t
    );
}
function S(e, t, n) {
    return !!t.hasFlag(g.iLy.HAS_THREAD) && null != n && !!e;
}
function A(e) {
    return (0, o.cj)([m.Z, p.Z], () => {
        let t = m.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = m.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i()(n).some((e) => p.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
            o = i()(t).some((e) => !(e.channel.id in n) && p.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
            s = i()(r).some((e) => p.Z.can(g.Plq.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: a || o || s,
            hasMoreActiveThreads: s || o
        };
    });
}
function N(e) {
    let t = (0, o.e7)([f.Z], () => f.Z.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, o.e7)([p.Z], () => null != t && p.Z.can(g.Plq.MANAGE_THREADS, t), [t]),
        r = (0, o.e7)([_.default], () => _.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === r));
}
function C(e, t) {
    return null != e && t.can(g.Plq.SEND_MESSAGES_IN_THREADS, e);
}
function R(e, t, n) {
    var r;
    return null != e && !!e.isThread() && ((null == (r = e.threadMetadata) ? void 0 : r.locked) ? n : t);
}
function P(e) {
    let t = (0, o.e7)([p.Z], () => C(e, p.Z)),
        n = k(e);
    return R(e, t, n);
}
function w(e) {
    let t = C(e, p.Z),
        n = j(e);
    return R(e, t, n);
}
function D(e) {
    var t;
    let n = (0, o.e7)([p.Z], () => null != e && p.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && n));
}
function L(e) {
    var t;
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && p.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e)));
}
function x(e) {
    let t = p.Z.can(g.Plq.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function M(e, t) {
    return null != e && t.can(g.Plq.MANAGE_THREADS, e);
}
function k(e) {
    return (0, o.e7)([p.Z], () => j(e, [p.Z]));
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [p.Z],
        [n] = t;
    return M(e, n);
}
function U(e) {
    return (0, o.e7)([f.Z, p.Z, _.default], () => {
        let t = f.Z.getChannel(e);
        if (null == t) return !1;
        let n = _.default.getId();
        return (t.type === g.d4z.PRIVATE_THREAD && t.ownerId === n) || j(t, [p.Z]);
    });
}
function G(e) {
    let t = (0, c.Z)(),
        n = (0, o.e7)([p.Z], () => p.Z.can(g.Plq.CONNECT, e)),
        r = D(e),
        i = E.useExperiment(
            {
                guildId: e.guild_id,
                location: 'e791ea_1'
            },
            { autoTrackExposure: !1 }
        ).enabled,
        a = (0, s.Kt)() && (0, s.zd)(e.id);
    return !t && e.isVocalThread() && i && n && r && !a;
}
function B(e) {
    let t = k(e);
    return e.isLockedThread() && !t;
}
