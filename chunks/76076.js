n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    o = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(803948),
    c = n(442837),
    s = n(481060),
    d = n(607070),
    u = n(872269),
    f = n(228168),
    p = n(388032),
    m = n(361623),
    b = n(583140);
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
    h = (e) => {
        let { message: t, icon: n, type: o } = e;
        return (0, r.jsxs)("div", {
            className: l()(b.toast, m.toast),
            "data-type": o,
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
    x = (e) => {
        let { className: t, onAutoHide: n } = e,
            i = (0, u.be)(),
            f = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            [p, b] = o.useState(!1),
            [x, _] = o.useState(null);
        o.useEffect(() => {
            null !== i ? (b(!0), _(g[i]), s.uvj.announce(g[i].message)) : b(!1);
        }, [i]);
        let j = (0, s.Yzy)(
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
            o.useEffect(() => {
                if (p) {
                    let e = setTimeout(() => {
                        null == n || n();
                    }, 2000);
                    return () => clearTimeout(e);
                }
            }, [p, n]),
            (0, r.jsx)(r.Fragment, {
                children: j(
                    (e, n) =>
                        n &&
                        null !== x &&
                        (0, r.jsx)(a.animated.div, {
                            className: l()(t, m.toastContainer),
                            style: e,
                            children: (0, r.jsx)(
                                h,
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
                                })({}, x),
                            ),
                        }),
                ),
            })
        );
    };
