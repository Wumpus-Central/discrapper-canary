t.d(n, { Z: () => v }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(120356),
    o = t.n(r),
    s = t(401393),
    a = t(442837),
    c = t(481060),
    d = t(607070),
    u = t(872269),
    f = t(228168),
    m = t(388032),
    p = t(214906),
    h = t(74866);
let j = {
        [f.qb.WIDGET_ADDED]: {
            message: m.intl.string(m.t.fFP1U1),
            icon: (0, l.jsx)(c.dz2, {
                size: "sm",
                color: c.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [f.qb.WIDGET_REMOVED]: {
            message: m.intl.string(m.t.zzsK7u),
            icon: (0, l.jsx)(c.dz2, {
                size: "sm",
                color: c.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [f.qb.WIDGET_SAVE_FAILURE]: {
            message: m.intl.string(m.t["84MExs"]),
            icon: (0, l.jsx)(c.Uz9, {
                size: "sm",
                color: c.TVs.colors.STATUS_DANGER.css,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: c.ToastType.FAILURE,
        },
    },
    x = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: o()(h.toast, p.toast),
            "data-type": i,
            children: [
                (0, l.jsx)("div", {
                    className: p.toastIcon,
                    children: t,
                }),
                (0, l.jsx)(c.Text, {
                    color: "header-primary",
                    variant: "text-sm/semibold",
                    children: n,
                }),
            ],
        });
    },
    v = (e) => {
        let { className: n, onAutoHide: t } = e,
            r = (0, u.be)(),
            f = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            [m, h] = i.useState(!1),
            [v, g] = i.useState(null);
        i.useEffect(() => {
            null !== r ? (h(!0), g(j[r]), c.uvj.announce(j[r].message)) : h(!1);
        }, [r]);
        let b = (0, c.Yzy)(
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
            i.useEffect(() => {
                if (m) {
                    let e = setTimeout(() => {
                        null == t || t();
                    }, 2000);
                    return () => clearTimeout(e);
                }
            }, [m, t]),
            (0, l.jsx)(l.Fragment, {
                children: b(
                    (e, t) =>
                        t &&
                        null !== v &&
                        (0, l.jsx)(s.animated.div, {
                            className: o()(n, p.toastContainer),
                            style: e,
                            children: (0, l.jsx)(
                                x,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            l = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (n) {
                                                var l;
                                                (l = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[n] = l);
                                            });
                                    }
                                    return e;
                                })({}, v),
                            ),
                        }),
                ),
            })
        );
    };
