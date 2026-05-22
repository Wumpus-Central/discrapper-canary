n.d(t, { D: () => h, M: () => g });
var i = n(723702),
    l = n(850670),
    s = n(206589),
    r = n(125017),
    a = n(625248),
    o = n(55730),
    d = n(287613),
    c = n(659051),
    u = n(702631),
    m = n(652215);
function h(e) {
    let {
        presenceActivity: t,
        currentUserPresenceActivity: n,
        currentUserId: h,
        message: g,
        application: p,
        isEmbeddedApplication: A,
        isFrameApplication: x,
        isGameLaunchable: f,
    } = e;
    if (g.author.id === h || !(0, c.A)(t, g, p.id)) return { canJoin: !1, remoteJoinPlatform: null };
    let E = (0, r._)(t);
    if (!(0, d.A)(E) || (0, u.U)(E) || (0, s.w)(n, t) || (0, l.v)(g)) return { canJoin: !1, remoteJoinPlatform: null };
    if (A && x) return { canJoin: !0, remoteJoinPlatform: null };
    if (g.activity?.type === m.xL.JOIN && null != t) {
        let e = (0, a.l)(t);
        if (null != e) return { canJoin: !0, remoteJoinPlatform: e };
        if ((0, o.A)(t, m.jUm.SUPPORTS_JOIN_URL)) return { canJoin: !0, remoteJoinPlatform: null };
    }
    return (0, i.platformSupportsActivityJoin)() && f
        ? { canJoin: !0, remoteJoinPlatform: null }
        : { canJoin: !1, remoteJoinPlatform: null };
}
function g(e, t, n, l) {
    return !(null == e || !(0, c.A)(e, n, l.id) || !(0, o.A)(e, m.jUm.SYNC) || !i.isPlatformEmbedded || (0, s.w)(t, e));
}
