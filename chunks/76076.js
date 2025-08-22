t.d(n, { Z: () => j }), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(120356),
    i = t.n(o),
    c = t(202841),
    s = t(442837),
    a = t(481060),
    d = t(607070),
    u = t(872269),
    f = t(228168),
    m = t(388032),
    p = t(361623),
    h = t(583140);
let x = {
        [f.qb.WIDGET_ADDED]: {
            message: m.intl.string(m.t.fFP1U1),
            icon: (0, r.jsx)(a.dz2, {
                size: "sm",
                color: a.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [f.qb.WIDGET_REMOVED]: {
            message: m.intl.string(m.t.zzsK7u),
            icon: (0, r.jsx)(a.dz2, {
                size: "sm",
                color: a.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [f.qb.WIDGET_SAVE_FAILURE]: {
            message: m.intl.string(m.t["84MExs"]),
            icon: (0, r.jsx)(a.Uz9, {
                size: "sm",
                color: a.TVs.colors.STATUS_DANGER.css,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: a.ToastType.FAILURE,
        },
    },
    b = (e) => {
        let { message: n, icon: t, type: l } = e;
        return (0, r.jsxs)("div", {
            className: i()(h.toast, p.toast),
            "data-type": l,
            children: [
                (0, r.jsx)("div", {
                    className: p.toastIcon,
                    children: t,
                }),
                (0, r.jsx)(a.Text, {
                    color: "header-primary",
                    variant: "text-sm/semibold",
                    children: n,
                }),
            ],
        });
    },
    j = (e) => {
        let { className: n, onAutoHide: t } = e,
            o = (0, u.be)(),
            f = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            [m, h] = l.useState(!1),
            [j, g] = l.useState(null);
        l.useEffect(() => {
            null !== o ? (h(!0), g(x[o]), a.uvj.announce(x[o].message)) : h(!1);
        }, [o]);
        let v = (0, a.Yzy)(
            m,
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
                if (m) {
                    let e = setTimeout(() => {
                        null == t || t();
                    }, 2000);
                    return () => clearTimeout(e);
                }
            }, [m, t]),
            (0, r.jsx)(r.Fragment, {
                children: v(
                    (e, t) =>
                        t &&
                        null !== j &&
                        (0, r.jsx)(c.animated.div, {
                            className: i()(n, p.toastContainer),
                            style: e,
                            children: (0, r.jsx)(
                                b,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            r = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (n) {
                                                var r;
                                                (r = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[n] = r);
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
