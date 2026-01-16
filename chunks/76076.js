t.d(n, { Z: () => v }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(120356),
    r = t.n(o),
    a = t(81239),
    c = t(442837),
    s = t(481060),
    d = t(607070),
    u = t(872269),
    f = t(228168),
    m = t(388032),
    p = t(969032),
    x = t(141291);
let h = {
        [f.qb.WIDGET_ADDED]: {
            message: m.intl.string(m.t.fFP1Uy),
            icon: (0, l.jsx)(s.dz2, {
                size: "sm",
                color: s.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [f.qb.WIDGET_REMOVED]: {
            message: m.intl.string(m.t.zzsK7h),
            icon: (0, l.jsx)(s.dz2, {
                size: "sm",
                color: s.TVs.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [f.qb.WIDGET_SAVE_FAILURE]: {
            message: m.intl.string(m.t["84MExs"]),
            icon: (0, l.jsx)(s.Uz9, {
                size: "sm",
                color: s.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: s.ToastType.FAILURE,
        },
        [f.qb.SOMETHING_WENT_WRONG]: {
            message: m.intl.string(m.t.F8FvUy),
            icon: (0, l.jsx)(s.Uz9, {
                size: "sm",
                color: s.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
            toast_id: "user_profile_something_went_wrong",
            type: s.ToastType.FAILURE,
        },
    },
    j = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: r()(x.toast, p.toast),
            "data-type": i,
            children: [
                (0, l.jsx)("div", {
                    className: p.toastIcon,
                    children: t,
                }),
                (0, l.jsx)(s.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: n,
                }),
            ],
        });
    },
    v = (e) => {
        let { className: n, onAutoHide: t } = e,
            o = (0, u.be)(),
            f = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            [m, x] = i.useState(!1),
            [v, b] = i.useState(null);
        i.useEffect(() => {
            null !== o ? (x(!0), b(h[o]), s.uvj.announce(h[o].message)) : x(!1);
        }, [o]);
        let g = (0, s.Yzy)(
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
                children: g(
                    (e, t) =>
                        t &&
                        null !== v &&
                        (0, l.jsx)(a.animated.div, {
                            className: r()(n, p.toastContainer),
                            style: e,
                            children: (0, l.jsx)(
                                j,
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
