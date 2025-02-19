n.d(t, {
    Ne: () => p,
    Ny: () => h,
    Or: () => f,
    jt: () => g
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(44315),
    s = n(246364),
    c = n(460562),
    u = n(981631),
    d = n(626050);
function p(e, t) {
    return (0, r.jsx)(o.mAB, {
        count: e,
        color: t
    });
}
function h() {
    return (0, r.jsx)(o.G2e, {
        icon: (0, o.GSL)(c.Z),
        disableColor: !0,
        className: d.unavailableBadge
    });
}
function f(e) {
    let t,
        { audio: n, video: r, screenshare: i, isCurrentUserConnected: l, liveStage: a, activeEvent: s, activity: c } = e;
    if (s) t = o.Que;
    else if (a) t = o.ewx;
    else if (c) t = o.nG3;
    else if (i) t = o.pzj;
    else if (r) t = o.Odl;
    else {
        if (!n) return null;
        t = o.gj8;
    }
    return m({
        icon: t,
        isCurrentUserConnected: l
    });
}
function g(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, r] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, o.T39];
                case s.wB.REJECTED:
                    return [u.Ilk.RED_400, o.Dio];
                case s.wB.APPROVED:
                    return [u.Ilk.GREEN_360, o.dz2];
                default:
                    return [void 0, o.vdY];
            }
        })(t);
    return m({
        icon: r,
        color: n
    });
}
function m(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, a.Lq)(n) };
    return (0, r.jsx)(
        o.G2e,
        (function (e) {
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
        })(
            {
                icon: t,
                className: l()(d.iconBadge, { [d.isCurrentUserConnected]: i })
            },
            s
        )
    );
}
