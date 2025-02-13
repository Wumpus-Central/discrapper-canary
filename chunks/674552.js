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
    o = n(481060),
    a = n(44315),
    s = n(246364),
    c = n(460562),
    d = n(981631),
    u = n(663345);
function h(e, t) {
    return (0, i.jsx)(o.mAB, {
        count: e,
        color: t
    });
}
function p() {
    return (0, i.jsx)(o.G2e, {
        icon: (0, o.GSL)(c.Z),
        disableColor: !0,
        className: u.unavailableBadge
    });
}
function m(e) {
    let t,
        { audio: n, video: i, screenshare: l, isCurrentUserConnected: r, liveStage: a, activeEvent: s, activity: c } = e;
    if (s) t = o.Que;
    else if (a) t = o.ewx;
    else if (c) t = o.nG3;
    else if (l) t = o.pzj;
    else if (i) t = o.Odl;
    else {
        if (!n) return null;
        t = o.gj8;
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
                    return [void 0, o.T39];
                case s.wB.REJECTED:
                    return [d.Ilk.RED_400, o.Dio];
                case s.wB.APPROVED:
                    return [d.Ilk.GREEN_360, o.dz2];
                default:
                    return [void 0, o.vdY];
            }
        })(t);
    return f({
        icon: i,
        color: n
    });
}
function f(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, a.Lq)(n) };
    return (0, i.jsx)(o.G2e, {
        icon: t,
        className: r()(u.iconBadge, { [u.isCurrentUserConnected]: l }),
        ...s
    });
}
