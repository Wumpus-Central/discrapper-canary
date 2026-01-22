n.d(t, {
    eW: () => h,
    em: () => f,
    oi: () => p,
    wN: () => d,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(827734),
    s = n(397927),
    o = n(513461),
    c = n(791606),
    u = n(283237);

function d(e, t, n) {
    return (0, r.jsx)(s.hVq, {
        count: e,
        color: t,
        "aria-hidden": n,
    });
}

function f() {
    return (0, r.jsx)(s.fkz, {
        icon: (0, s.kHD)(c.A),
        disableColor: !0,
        className: u.yk,
    });
}

function p(e) {
    let t,
        {
            audio: n,
            video: r,
            screenshare: l,
            isCurrentUserConnected: i,
            liveStage: a,
            activeEvent: o,
            activity: c,
        } = e;
    if (o) t = s.CTc;
    else if (a) t = s.qux;
    else if (l) t = s.kN9;
    else if (r) t = s.npA;
    else if (n) t = s.HKD;
    else {
        if (!c) return null;
        t = s.bxf;
    }
    return b({
        icon: t,
        isCurrentUserConnected: i,
    });
}

function h(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, r] = (function (e) {
            switch (e) {
                case o.B5.SUBMITTED:
                    return [void 0, s.O4];
                case o.B5.REJECTED:
                    return [a.A.unsafe_rawColors.RED_400.css, s.PGe];
                case o.B5.APPROVED:
                    return [a.A.unsafe_rawColors.GREEN_360.css, s.A9s];
                default:
                    return [void 0, s.R2l];
            }
        })(t);
    return b({
        icon: r,
        color: n,
    });
}

function b(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e;
    return (0, r.jsx)(
        s.fkz,
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
                className: i()(u.bG, {
                    [u.gB]: l,
                }),
            },
            null == n
                ? {
                      disableColor: !0,
                  }
                : {
                      color: n,
                  },
        ),
    );
}
