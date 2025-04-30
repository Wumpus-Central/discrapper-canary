n.d(t, {
    Ne: () => f,
    Ny: () => g,
    Or: () => b,
    jt: () => y
}),
    n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(456100),
    a = n(44315),
    c = n(246364),
    u = n(460562),
    d = n(981631),
    h = n(176330);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t, n) {
    return (0, r.jsx)(o.mAB, {
        count: e,
        color: t,
        'aria-hidden': n
    });
}
function g() {
    return (0, r.jsx)(o.G2e, {
        icon: (0, o.GSL)(u.Z),
        disableColor: !0,
        className: h.unavailableBadge
    });
}
function m(e) {
    let { enabled: t } = s.c.useExperiment({ location: 'renderMediaBadge' }, { autoTrackExposure: !0 }),
        n = t ? o.iWm : o.nG3;
    return (0, r.jsx)(n, p({}, e));
}
function b(e) {
    let t,
        { audio: n, video: r, screenshare: i, isCurrentUserConnected: l, liveStage: s, activeEvent: a, activity: c } = e;
    if (a) t = o.Que;
    else if (s) t = o.ewx;
    else if (c) t = m;
    else if (i) t = o.pzj;
    else if (r) t = o.Odl;
    else {
        if (!n) return null;
        t = o.gj8;
    }
    return _({
        icon: t,
        isCurrentUserConnected: l
    });
}
function y(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, r] = (function (e) {
            switch (e) {
                case c.wB.SUBMITTED:
                    return [void 0, o.T39];
                case c.wB.REJECTED:
                    return [d.Ilk.RED_400, o.Dio];
                case c.wB.APPROVED:
                    return [d.Ilk.GREEN_360, o.dz2];
                default:
                    return [void 0, o.vdY];
            }
        })(t);
    return _({
        icon: r,
        color: n
    });
}
function _(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, a.Lq)(n) };
    return (0, r.jsx)(
        o.G2e,
        p(
            {
                icon: t,
                className: l()(h.iconBadge, { [h.isCurrentUserConnected]: i })
            },
            s
        )
    );
}
