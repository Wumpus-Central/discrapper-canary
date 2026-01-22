t.d(l, {
    A: () => h,
}),
    t(896048);
var n = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(108531),
    o = t(311907),
    d = t(397927),
    c = t(775602),
    u = t(384377),
    f = t(518477),
    p = t(985018),
    m = t(845913),
    x = t(910200);
let A = {
        [f.jM.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1Uy),
            icon: (0, n.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [f.jM.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7h),
            icon: (0, n.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [f.jM.WIDGET_SAVE_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, n.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE,
        },
        [f.jM.SOMETHING_WENT_WRONG]: {
            message: p.intl.string(p.t.F8FvUy),
            icon: (0, n.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE,
        },
    },
    j = (e) => {
        let { message: l, icon: t, type: i } = e;
        return (0, n.jsxs)("div", {
            className: s()(x.oR, m.oR),
            "data-type": i,
            children: [
                (0, n.jsx)("div", {
                    className: m.RC,
                    children: t,
                }),
                (0, n.jsx)(d.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: l,
                }),
            ],
        });
    },
    h = (e) => {
        let { className: l, onAutoHide: t } = e,
            r = (0, u.fu)(),
            f = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            [p, x] = i.useState(!1),
            [h, g] = i.useState(null);
        i.useEffect(() => {
            null !== r ? (x(!0), g(A[r]), d.ORC.announce(A[r].message)) : x(!1);
        }, [r]);
        let v = (0, d.pnh)(
            p,
            {
                from: {
                    transform: f ? "translateY(0)" : "translateY(-12px)",
                    opacity: 0,
                },
                enter: {
                    transform: "translateY(0)",
                    opacity: 1,
                },
                leave: {
                    transform: f ? "translateY(0)" : "translateY(-12px)",
                    opacity: 0,
                },
                config: {
                    mass: 1,
                    tension: 200,
                    friction: 18,
                    clamp: !0,
                },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => {
                if (p) {
                    let e = setTimeout(() => {
                        null == t || t();
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [p, t]),
            (0, n.jsx)(n.Fragment, {
                children: v(
                    (e, t) =>
                        t &&
                        null !== h &&
                        (0, n.jsx)(a.animated.div, {
                            className: s()(l, m.Jt),
                            style: e,
                            children: (0, n.jsx)(
                                j,
                                (function (e) {
                                    for (var l = 1; l < arguments.length; l++) {
                                        var t = null != arguments[l] ? arguments[l] : {},
                                            n = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (l) {
                                                var n;
                                                (n = t[l]),
                                                    l in e
                                                        ? Object.defineProperty(e, l, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[l] = n);
                                            });
                                    }
                                    return e;
                                })({}, h),
                            ),
                        }),
                ),
            })
        );
    };
