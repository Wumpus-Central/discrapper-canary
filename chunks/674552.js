n.d(t, {
    Ne: () => h,
    Ny: () => p,
    Or: () => m,
    jt: () => g
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(44315),
    s = n(246364),
    c = n(460562),
    d = n(981631),
    u = n(940722);
function h(e, t) {
    return (0, i.jsx)(a.mAB, {
        count: e,
        color: t
    });
}
function p() {
    return (0, i.jsx)(a.G2e, {
        icon: (0, a.GSL)(c.Z),
        disableColor: !0,
        className: u.unavailableBadge
    });
}
function m(e) {
    let t,
        { audio: n, video: i, screenshare: l, isCurrentUserConnected: r, liveStage: o, activeEvent: s, activity: c } = e;
    if (s) t = a.Que;
    else if (o) t = a.ewx;
    else if (c) t = a.nG3;
    else if (l) t = a.pzj;
    else if (i) t = a.Odl;
    else {
        if (!n) return null;
        t = a.gj8;
    }
    return f({
        icon: t,
        isCurrentUserConnected: r
    });
}
function g(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, a.T39];
                case s.wB.REJECTED:
                    return [d.Ilk.RED_400, a.Dio];
                case s.wB.APPROVED:
                    return [d.Ilk.GREEN_360, a.dz2];
                default:
                    return [void 0, a.vdY];
            }
        })(t);
    return f({
        icon: i,
        color: n
    });
}
function f(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, o.Lq)(n) };
    return (0, i.jsx)(a.G2e, {
        icon: t,
        className: r()(u.iconBadge, { [u.isCurrentUserConnected]: l }),
        ...s
    });
}
