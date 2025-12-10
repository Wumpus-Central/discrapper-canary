t.d(n, { Z: () => j }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(120356),
    r = t.n(o),
    s = t(467721),
    a = t(442837),
    c = t(481060),
    d = t(607070),
    u = t(872269),
    m = t(228168),
    p = t(388032),
    f = t(361623),
    x = t(583140);
let h = {
        [m.qb.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1Uy),
            icon: (0, l.jsx)(c.dz2, {
                size: "sm",
                color: c.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [m.qb.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7h),
            icon: (0, l.jsx)(c.dz2, {
                size: "sm",
                color: c.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [m.qb.WIDGET_SAVE_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, l.jsx)(c.Uz9, {
                size: "sm",
                color: c.TVs.colors.STATUS_DANGER.css,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: c.ToastType.FAILURE,
        },
        [m.qb.SOMETHING_WENT_WRONG]: {
            message: p.intl.string(p.t.F8FvUy),
            icon: (0, l.jsx)(c.Uz9, {
                size: "sm",
                color: c.TVs.colors.STATUS_DANGER.css,
            }),
            toast_id: "user_profile_something_went_wrong",
            type: c.ToastType.FAILURE,
        },
    },
    v = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: r()(x.toast, f.toast),
            "data-type": i,
            children: [
                (0, l.jsx)("div", {
                    className: f.toastIcon,
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
    j = (e) => {
        let { className: n, onAutoHide: t } = e,
            o = (0, u.be)(),
            m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            [p, x] = i.useState(!1),
            [j, g] = i.useState(null);
        i.useEffect(() => {
            null !== o ? (x(!0), g(h[o]), c.uvj.announce(h[o].message)) : x(!1);
        }, [o]);
        let b = (0, c.Yzy)(
            p,
            {
                from: {
                    transform: m ? "translateY(0)" : "translateY(-12px)",
                    opacity: 0,
                },
                enter: {
                    transform: "translateY(0)",
                    opacity: 1,
                },
                leave: {
                    transform: m ? "translateY(0)" : "translateY(-12px)",
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
                    }, 2000);
                    return () => clearTimeout(e);
                }
            }, [p, t]),
            (0, l.jsx)(l.Fragment, {
                children: b(
                    (e, t) =>
                        t &&
                        null !== j &&
                        (0, l.jsx)(s.animated.div, {
                            className: r()(n, f.toastContainer),
                            style: e,
                            children: (0, l.jsx)(
                                v,
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
                                })({}, j),
                            ),
                        }),
                ),
            })
        );
    };
