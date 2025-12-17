n.d(t, {
    Ne: () => d,
    Ny: () => f,
    Or: () => h,
    jt: () => p,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    o = n(481060),
    s = n(246364),
    c = n(460562),
    u = n(105303);
function d(e, t, n) {
    return (0, r.jsx)(o.mAB, {
        count: e,
        color: t,
        "aria-hidden": n,
    });
}
function f() {
    return (0, r.jsx)(o.G2e, {
        icon: (0, o.GSL)(c.Z),
        disableColor: !0,
        className: u.unavailableBadge,
    });
}
function h(e) {
    let t,
        {
            audio: n,
            video: r,
            screenshare: i,
            isCurrentUserConnected: l,
            liveStage: a,
            activeEvent: s,
            activity: c,
        } = e;
    if (s) t = o.Que;
    else if (a) t = o.ewx;
    else if (i) t = o.pzj;
    else if (r) t = o.Odl;
    else if (n) t = o.gj8;
    else {
        if (!c) return null;
        t = o.nG3;
    }
    return g({
        icon: t,
        isCurrentUserConnected: l,
    });
}
function p(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, r] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, o.T39];
                case s.wB.REJECTED:
                    return [a.Z.unsafe_rawColors.RED_400.css, o.Dio];
                case s.wB.APPROVED:
                    return [a.Z.unsafe_rawColors.GREEN_360.css, o.dz2];
                default:
                    return [void 0, o.vdY];
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
        o.G2e,
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
