n.d(t, {
    D: () => p,
    M: () => _,
});
var r = n(723702),
    i = n(850670),
    a = n(206589),
    s = n(125017),
    o = n(625248),
    l = n(833349),
    c = n(287613),
    u = n(659051),
    d = n(702631),
    f = n(652215);
function p(e) {
    var t;
    let {
        presenceActivity: n,
        currentUserPresenceActivity: l,
        currentUserId: p,
        message: _,
        application: h,
        isEmbeddedApplication: m,
        isFrameApplication: g,
        isGameLaunchable: E,
    } = e;
    if (_.author.id === p || !(0, u.A)(n, _, h.id))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    let b = (0, s._)(n);
    if (!(0, c.A)(b) || (0, d.U)(b) || (0, a.w)(l, n) || (0, i.v)(_))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    if (m && g)
        return {
            canJoin: !0,
            remoteJoinPlatform: null,
        };
    if ((null == (t = _.activity) ? void 0 : t.type) === f.xL.JOIN && null != n) {
        let e = (0, o.l)(n);
        if (null != e)
            return {
                canJoin: !0,
                remoteJoinPlatform: e,
            };
    }
    return (0, r.platformSupportsActivityJoin)() && E
        ? {
              canJoin: !0,
              remoteJoinPlatform: null,
          }
        : {
              canJoin: !1,
              remoteJoinPlatform: null,
          };
}
function _(e, t, n, i) {
    return !(null == e || !(0, u.A)(e, n, i.id) || !(0, l.A)(e, f.jUm.SYNC) || !r.isPlatformEmbedded || (0, a.w)(t, e));
}
