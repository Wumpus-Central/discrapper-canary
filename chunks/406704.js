n.d(t, {
    AI: () => A,
    D1: () => y,
    Et: () => P,
    H_: () => M,
    Id: () => D,
    NI: () => C,
    NR: () => T,
    R: () => S,
    Tb: () => O,
    UJ: () => L,
    _M: () => G,
    io: () => E,
    jr: () => x,
    lK: () => w,
    n: () => b,
    qi: () => U,
    s5: () => V,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(311907),
    o = n(323073),
    l = n(143770),
    c = n(753727),
    u = n(143413),
    d = n(95701),
    f = n(961350),
    p = n(734057),
    _ = n(576705),
    h = n(661191),
    m = n(863005),
    g = n(652215);
let E = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "On",
            config: {
                enabled: !0,
            },
        },
    ],
});

function b(e, t) {
    return v(
        (0, s.bG)([_.A], () => {
            let t = e.isForumLikeChannel()
                ? g.xBc.SEND_MESSAGES
                : a.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
            return _.A.can(t, e);
        }, [e]),
        e,
        t,
    );
}

function y(e, t) {
    let n = e.isForumLikeChannel()
        ? g.xBc.SEND_MESSAGES
        : a.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
    return v(_.A.can(n, e), e, t);
}

function O(e) {
    let t = (0, s.bG)([_.A], () => _.A.can(a.kg(g.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === g.rbe.GUILD_TEXT && v(t, e);
}

function A(e) {
    let t = b(e),
        n = O(e);
    return t || n;
}

function v(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !d.wE.has(t.type) || (null != n && (n.hasFlag(g.pr7.HAS_THREAD) || (0, u.A)(n)))) && !0
    );
}

function S(e) {
    let t = (0, s.bG)([p.A], () => p.A.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]);
    return I(
        (0, s.bG)([_.A], () => _.A.can(g.xBc.VIEW_CHANNEL, t), [t]),
        e,
        t,
    );
}

function I(e, t, n) {
    return !!t.hasFlag(g.pr7.HAS_THREAD) && null != n && !!e;
}

function T(e) {
    return (0, s.cf)([m.A, _.A], () => {
        let t = m.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = m.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i()(n).some((e) => _.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            s = i()(t).some((e) => !(e.channel.id in n) && _.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            o = i()(r).some((e) => _.A.can(g.xBc.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: a || s || o,
            hasMoreActiveThreads: o || s,
        };
    });
}

function C(e) {
    let t = (0, s.bG)([p.A], () => p.A.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, s.bG)([_.A], () => null != t && _.A.can(g.xBc.MANAGE_THREADS, t), [t]),
        r = (0, s.bG)([f.default], () => f.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === r));
}

function N(e, t) {
    return null != e && t.can(g.xBc.SEND_MESSAGES_IN_THREADS, e);
}

function R(e, t, n) {
    var r;
    return null != e && !!e.isThread() && ((null == (r = e.threadMetadata) ? void 0 : r.locked) ? n : t);
}

function w(e) {
    let t = (0, s.bG)([_.A], () => N(e, _.A)),
        n = M(e);
    return R(e, t, n);
}

function P(e) {
    let t = N(e, _.A),
        n = k(e);
    return R(e, t, n);
}

function D(e) {
    var t;
    let n = (0, s.bG)([_.A], () => null != e && _.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e));
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && n))
    );
}

function x(e) {
    var t;
    return (
        null != e &&
        (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
                (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 &&
                _.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e)))
    );
}

function L(e) {
    let t = _.A.can(g.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}

function j(e, t) {
    return null != e && t.can(g.xBc.MANAGE_THREADS, e);
}

function M(e) {
    return (0, s.bG)([_.A], () => k(e, [_.A]));
}

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [_.A],
        [n] = t;
    return j(e, n);
}

function U(e) {
    return (0, s.bG)([p.A, _.A, f.default], () => {
        let t = p.A.getChannel(e);
        if (null == t) return !1;
        let n = f.default.getId();
        return (t.type === g.rbe.PRIVATE_THREAD && t.ownerId === n) || k(t, [_.A]);
    });
}

function G(e) {
    let t = (0, c.A)(),
        n = (0, s.bG)([_.A], () => _.A.can(g.xBc.CONNECT, e)),
        r = D(e),
        i = E.useExperiment(
            {
                guildId: e.guild_id,
                location: "e791ea_1",
            },
            {
                autoTrackExposure: !1,
            },
        ).enabled,
        a = (0, o.a9)() && (0, o.UK)(e.id);
    return !t && e.isVocalThread() && i && n && r && !a;
}

function V(e) {
    let t = M(e);
    return e.isLockedThread() && !t;
}
