n.d(t, {
    A: () => j,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(92674),
    a = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(384377),
    p = n(518477),
    f = n(985018),
    m = n(845913),
    A = n(910200);
let x = {
        [p.jM.WIDGET_ADDED]: {
            message: f.intl.string(f.t.fFP1Uy),
            icon: (0, l.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_added",
        },
        [p.jM.WIDGET_REMOVED]: {
            message: f.intl.string(f.t.zzsK7h),
            icon: (0, l.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css,
            }),
            toast_id: "user_profile_widget_removed",
        },
        [p.jM.WIDGET_SAVE_FAILURE]: {
            message: f.intl.string(f.t["84MExs"]),
            icon: (0, l.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE,
        },
        [p.jM.SOMETHING_WENT_WRONG]: {
            message: f.intl.string(f.t.F8FvUy),
            icon: (0, l.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE,
        },
    },
    g = (e) => {
        let { message: t, icon: n, type: i } = e;
        return (0, l.jsxs)("div", {
            className: s()(A.oR, m.oR),
            "data-type": i,
            children: [
                (0, l.jsx)("div", {
                    className: m.RC,
                    children: n,
                }),
                (0, l.jsx)(d.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: t,
                }),
            ],
        });
    },
    j = (e) => {
        let { className: t, onAutoHide: n } = e,
            r = (0, u.fu)(),
            p = (0, a.bG)([c.A], () => c.A.useReducedMotion),
            [f, A] = i.useState(!1),
            [j, h] = i.useState(null);
        i.useEffect(() => {
            null !== r ? (A(!0), h(x[r]), d.ORC.announce(x[r].message)) : A(!1);
        }, [r]);
        let b = (0, d.pnh)(
            f,
            {
                from: {
                    transform: p ? "translateY(0)" : "translateY(-12px)",
                    opacity: 0,
                },
                enter: {
                    transform: "translateY(0)",
                    opacity: 1,
                },
                leave: {
                    transform: p ? "translateY(0)" : "translateY(-12px)",
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
                if (f) {
                    let e = setTimeout(() => {
                        null == n || n();
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [f, n]),
            (0, l.jsx)(l.Fragment, {
                children: b(
                    (e, n) =>
                        n &&
                        null !== j &&
                        (0, l.jsx)(o.animated.div, {
                            className: s()(t, m.Jt),
                            style: e,
                            children: (0, l.jsx)(
                                g,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
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
