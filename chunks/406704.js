n(582128);
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(855986);
(n(361610), n(36124));
var l = n(323073),
    o = n(597306),
    d = n(782460),
    c = n(753727),
    u = n(807632),
    _ = n(143413),
    E = n(95701),
    A = n(46653),
    f = n(734057),
    h = n(576705),
    I = n(811091),
    p = n(863005);
n(219065);
var m = n(652215);
let g = (0, d.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
});
function T(e, t) {
    return C(
        (0, s.bG)(
            [h.A],
            () => {
                let t = e.isForumLikeChannel()
                    ? m.xBc.SEND_MESSAGES
                    : a.kg(m.xBc.CREATE_PUBLIC_THREADS, m.xBc.READ_MESSAGE_HISTORY);
                return h.A.can(t, e);
            },
            [e],
        ),
        e,
        t,
    );
}
function S(e) {
    return N(
        (0, s.bG)([h.A], () => h.A.can(a.kg(m.xBc.CREATE_PRIVATE_THREADS), e), [e]),
        e,
    );
}
function N(e, t, n) {
    return (t.type === m.rbe.GUILD_TEXT || t.type === m.rbe.GUILD_APP) && C(e, t, n);
}
function C(e, t, n) {
    return (
        !(__OVERLAY__ || !e || !E.wE.has(t.type) || (null != n && (n.hasFlag(m.pr7.HAS_THREAD) || (0, _.A)(n)))) && !0
    );
}
function O(e, t) {
    return null != e && t.can(m.xBc.SEND_MESSAGES_IN_THREADS, e);
}
function R(e, t, n) {
    return !(null == e || !e.isThread() || e.isMediaThread()) && (e.threadMetadata?.locked ? n : t);
}
function L(e) {
    let t = (0, s.bG)(
            [h.A],
            () => null != e && h.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, e) && h.A.can(m.xBc.SEND_MESSAGES, e),
        ),
        n = (0, s.bG)(
            [h.A, f.A],
            () => {
                let t = null != e ? f.A.getChannel(e.parent_id) : null;
                return null != t && h.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, e) && h.A.can(m.xBc.SEND_MESSAGES, t);
            },
            [e],
        ),
        i = b(e);
    return R(e, t && n, i);
}
function y(e) {
    let t = O(e, h.A),
        n = O(null != e ? f.A.getChannel(e.parent_id) : null, h.A),
        i = v(e);
    return R(e, t && n, i);
}
function D(e) {
    let t = L(e);
    return (
        null != e &&
        (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && t))
    );
}
function b(e) {
    return (0, s.bG)([h.A], () => v(e, [h.A]));
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [h.A],
        [n] = t;
    return null != e && n.can(m.xBc.MANAGE_THREADS, e);
}
function P(e) {
    let t = (0, s.bG)([h.A], () => h.A.can(m.xBc.CONNECT, e)),
        n = D(e);
    return t && n;
}
n.d(
    t,
    {},
    {
        AI: function (e) {
            let t = T(e),
                n = S(e);
            return t || n;
        },
        D1: function (e, t) {
            let n = e.isForumLikeChannel()
                ? m.xBc.SEND_MESSAGES
                : a.kg(m.xBc.CREATE_PUBLIC_THREADS, m.xBc.READ_MESSAGE_HISTORY);
            return C(h.A.can(n, e), e, t);
        },
        Et: y,
        H_: b,
        Id: D,
        NI: function (e) {
            let t = (0, s.bG)([f.A], () => f.A.getChannel(e?.parent_id)),
                n = (0, s.bG)([h.A], () => null != t && h.A.can(m.xBc.MANAGE_THREADS, t), [t]),
                i = (0, s.bG)([A.default], () => A.default.getId());
            return null != e && null != t && !!e.isThread() && (!!n || (!e.isLockedThread() && e.ownerId === i));
        },
        NR: function (e) {
            return (0, s.cf)([p.A, h.A], () => {
                let t = p.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                    n = p.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                    i = p.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                    a = r()(n).some((e) => h.A.can(m.xBc.VIEW_CHANNEL, e.channel)),
                    s = r()(t).some((e) => !(e.channel.id in n) && h.A.can(m.xBc.VIEW_CHANNEL, e.channel)),
                    l = r()(i).some((e) => h.A.can(m.xBc.VIEW_CHANNEL, e));
                return { hasActiveThreads: a || s || l, hasMoreActiveThreads: l || s };
            });
        },
        R: function (e) {
            var t, n, i;
            let r = (0, s.bG)([f.A], () => f.A.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
            return (
                (t = (0, s.bG)([h.A], () => h.A.can(m.xBc.VIEW_CHANNEL, r), [r])),
                (n = e),
                (i = r),
                !!n.hasFlag(m.pr7.HAS_THREAD) && null != i && !!t
            );
        },
        Tb: S,
        UJ: function (e) {
            if (e.isMediaThread()) return !0;
            let t = h.A.can(m.xBc.MANAGE_THREADS, e);
            return e.isArchivedLockedThread() && !t;
        },
        _M: function (e) {
            let t = (0, c.A)(),
                n = P(e),
                i = g.useExperiment({ guildId: e.guild_id, location: "e791ea_1" }, { autoTrackExposure: !1 }).enabled,
                r = (0, u.YG)(e),
                a = (0, o.a)() && (0, l.UK)(e.id);
            return !t && e.isVocalThread() && (i || r) && n && !a;
        },
        gZ: P,
        io: g,
        jr: function (e) {
            return (
                null != e &&
                (!e.isThread() ||
                    e.isActiveThread() ||
                    (e.isArchivedThread() && e.threadMetadata?.locked !== !0 && y(e)))
            );
        },
        lK: L,
        n: T,
        qi: function (e) {
            return (0, s.bG)([f.A, h.A, A.default], () => {
                let t = f.A.getChannel(e);
                if (null == t) return !1;
                let n = A.default.getId();
                return (t.type === m.rbe.PRIVATE_THREAD && t.ownerId === n) || v(t, [h.A]);
            });
        },
        s5: function (e) {
            let t = b(e);
            return e.isLockedThread() && !t;
        },
        vy: function (e, t) {
            return N(h.A.can(m.xBc.CREATE_PRIVATE_THREADS, e), e, t);
        },
    },
);
