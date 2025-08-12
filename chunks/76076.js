n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(717976),
    c = n(442837),
    s = n(481060),
    d = n(607070),
    u = n(247989),
    f = n(228168),
    p = n(388032),
    m = n(918857),
    b = n(276441);
let g = {
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
    },
    j = (e) => {
        let { message: t, icon: n } = e;
        return (0, r.jsxs)("div", {
            className: o()(b.toast, m.toast),
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
            i = (0, u.be)(),
            f = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            [p, b] = l.useState(!1),
            [y, O] = l.useState(null);
        l.useEffect(() => {
            null !== i ? (b(!0), O(g[i]), s.uvj.announce(g[i].message)) : b(!1);
        }, [i]);
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
            l.useEffect(() => {
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
