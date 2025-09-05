t.d(n, { Z: () => j }), t(388685);
var o = t(951288),
    l = t(647438),
    r = t(120356),
    i = t.n(r),
    c = t(261616),
    a = t(442837),
    s = t(481060),
    d = t(607070),
    u = t(872269),
    f = t(228168),
    p = t(388032),
    m = t(214906),
    x = t(74866);
let b = {
        [f.qb.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1U1),
            icon: (0, o.jsx)(s.dz2, {
                size: "sm",
                color: s.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [f.qb.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7u),
            icon: (0, o.jsx)(s.dz2, {
                size: "sm",
                color: s.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [f.qb.WIDGET_SAVE_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, o.jsx)(s.Uz9, {
                size: "sm",
                color: s.TVs.colors.STATUS_DANGER.css,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: s.ToastType.FAILURE,
        },
    },
    h = (e) => {
        let { message: n, icon: t, type: l } = e;
        return (0, o.jsxs)("div", {
            className: i()(x.toast, m.toast),
            "data-type": l,
            children: [
                (0, o.jsx)("div", {
                    className: m.toastIcon,
                    children: t,
                }),
                (0, o.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-sm/semibold",
                    children: n,
                }),
            ],
        });
    },
    j = (e) => {
        let { className: n, onAutoHide: t } = e,
            r = (0, u.be)(),
            f = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            [p, x] = l.useState(!1),
            [j, g] = l.useState(null);
        l.useEffect(() => {
            null !== r ? (x(!0), g(b[r]), s.uvj.announce(b[r].message)) : x(!1);
        }, [r]);
        let v = (0, s.Yzy)(
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
            l.useEffect(() => {
                if (p) {
                    let e = setTimeout(() => {
                        null == t || t();
                    }, 2000);
                    return () => clearTimeout(e);
                }
            }, [p, t]),
            (0, o.jsx)(o.Fragment, {
                children: v(
                    (e, t) =>
                        t &&
                        null !== j &&
                        (0, o.jsx)(c.animated.div, {
                            className: i()(n, m.toastContainer),
                            style: e,
                            children: (0, o.jsx)(
                                h,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            o = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (o = o.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            o.forEach(function (n) {
                                                var o;
                                                (o = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: o,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[n] = o);
                                            });
                                    }
                                    return e;
                                })({}, j),
                            ),
                        }),
                ),
            })
        );
    };
