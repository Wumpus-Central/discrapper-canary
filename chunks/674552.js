n.d(t, {
    Ne: () => d,
    Ny: () => f,
    Or: () => p,
    jt: () => h,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(692547),
    a = n(481060),
    s = n(246364),
    c = n(460562),
    u = n(816827);
function d(e, t, n) {
    return (0, r.jsx)(a.mAB, {
        count: e,
        color: t,
        "aria-hidden": n,
    });
}
function f() {
    return (0, r.jsx)(a.G2e, {
        icon: (0, a.GSL)(c.Z),
        disableColor: !0,
        className: u.unavailableBadge,
    });
}
function p(e) {
    let t,
        {
            audio: n,
            video: r,
            screenshare: i,
            isCurrentUserConnected: l,
            liveStage: o,
            activeEvent: s,
            activity: c,
        } = e;
    if (s) t = a.Que;
    else if (o) t = a.ewx;
    else if (i) t = a.pzj;
    else if (r) t = a.Odl;
    else if (n) t = a.gj8;
    else {
        if (!c) return null;
        t = a.nG3;
    }
    return g({
        icon: t,
        isCurrentUserConnected: l,
    });
}
function h(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, r] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, a.T39];
                case s.wB.REJECTED:
                    return [o.Z.unsafe_rawColors.RED_400.css, a.Dio];
                case s.wB.APPROVED:
                    return [o.Z.unsafe_rawColors.GREEN_360.css, a.dz2];
                default:
                    return [void 0, a.vdY];
            }
        })(t);
    return g({
        icon: r,
        color: n,
    });
}
function g(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e;
    return (0, r.jsx)(
        a.G2e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                icon: t,
                className: l()(u.iconBadge, { [u.isCurrentUserConnected]: i }),
            },
            null == n ? { disableColor: !0 } : { color: n },
        ),
    );
}
