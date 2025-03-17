n.d(t, {
    Ne: () => f,
    Ny: () => g,
    Or: () => b,
    jt: () => v
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(456100),
    s = n(44315),
    c = n(246364),
    u = n(460562),
    d = n(981631),
    p = n(384185);
function h(e) {
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
function f(e, t) {
    return (0, r.jsx)(l.mAB, {
        count: e,
        color: t
    });
}
function g() {
    return (0, r.jsx)(l.G2e, {
        icon: (0, l.GSL)(u.Z),
        disableColor: !0,
        className: p.unavailableBadge
    });
}
function m(e) {
    let { enabled: t } = a.c.useExperiment({ location: 'renderMediaBadge' }, { autoTrackExposure: !0 }),
        n = t ? l.iWm : l.nG3;
    return (0, r.jsx)(n, h({}, e));
}
function b(e) {
    let t,
        { audio: n, video: r, screenshare: i, isCurrentUserConnected: o, liveStage: a, activeEvent: s, activity: c } = e;
    if (s) t = l.Que;
    else if (a) t = l.ewx;
    else if (c) t = m;
    else if (i) t = l.pzj;
    else if (r) t = l.Odl;
    else {
        if (!n) return null;
        t = l.gj8;
    }
    return y({
        icon: t,
        isCurrentUserConnected: o
    });
}
function v(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, r] = (function (e) {
            switch (e) {
                case c.wB.SUBMITTED:
                    return [void 0, l.T39];
                case c.wB.REJECTED:
                    return [d.Ilk.RED_400, l.Dio];
                case c.wB.APPROVED:
                    return [d.Ilk.GREEN_360, l.dz2];
                default:
                    return [void 0, l.vdY];
            }
        })(t);
    return y({
        icon: r,
        color: n
    });
}
function y(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e,
        a = null == n ? { disableColor: !0 } : { color: (0, s.Lq)(n) };
    return (0, r.jsx)(
        l.G2e,
        h(
            {
                icon: t,
                className: o()(p.iconBadge, { [p.isCurrentUserConnected]: i })
            },
            a
        )
    );
}
