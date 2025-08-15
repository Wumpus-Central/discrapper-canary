n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(717976),
    c = n(442837),
    s = n(481060),
    d = n(607070),
    u = n(872269),
    f = n(228168),
    p = n(388032),
    m = n(361623),
    g = n(583140);
let b = {
        [f.qb.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1U1),
            icon: (0, r.jsx)(s.dz2, {
                size: "sm",
                color: s.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [f.qb.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7u),
            icon: (0, r.jsx)(s.dz2, {
                size: "sm",
                color: s.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [f.qb.WIDGET_SAVE_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, r.jsx)(s.Uz9, {
                size: "sm",
                color: s.TVs.colors.STATUS_DANGER.css,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: s.ToastType.FAILURE,
        },
    },
    j = (e) => {
        let { message: t, icon: n, type: i } = e;
        return (0, r.jsxs)("div", {
            className: o()(g.toast, m.toast),
            "data-type": i,
            children: [
                (0, r.jsx)("div", {
                    className: m.toastIcon,
                    children: n,
                }),
                (0, r.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-sm/semibold",
                    children: t,
                }),
            ],
        });
    },
    y = (e) => {
        let { className: t, onAutoHide: n } = e,
            l = (0, u.be)(),
            f = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            [p, g] = i.useState(!1),
            [y, O] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (g(!0), O(b[l]), s.uvj.announce(b[l].message)) : g(!1);
        }, [l]);
        let x = (0, s.Yzy)(
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
                        null == n || n();
                    }, 2000);
                    return () => clearTimeout(e);
                }
            }, [p, n]),
            (0, r.jsx)(r.Fragment, {
                children: x(
                    (e, n) =>
                        n &&
                        null !== y &&
                        (0, r.jsx)(a.animated.div, {
                            className: o()(t, m.toastContainer),
                            style: e,
                            children: (0, r.jsx)(
                                j,
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
                                })({}, y),
                            ),
                        }),
                ),
            })
        );
    };
