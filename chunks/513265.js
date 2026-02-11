n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(563495),
    d = n(311907),
    o = n(397927),
    c = n(775602),
    u = n(384377),
    A = n(518477),
    x = n(985018),
    m = n(263919),
    p = n(114138);
let h = {
        [A.jM.WIDGET_ADDED]: {
            message: x.intl.string(x.t.fFP1Uy),
            icon: (0, i.jsx)(o.A9s, { size: "sm", color: o.LU0.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [A.jM.WIDGET_REMOVED]: {
            message: x.intl.string(x.t.zzsK7h),
            icon: (0, i.jsx)(o.A9s, { size: "sm", color: o.LU0.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [A.jM.WIDGET_SAVE_FAILURE]: {
            message: x.intl.string(x.t["84MExs"]),
            icon: (0, i.jsx)(o.d$L, { size: "sm", color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_widget_save_failure",
            type: o.ToastType.FAILURE,
        },
        [A.jM.SOMETHING_WENT_WRONG]: {
            message: x.intl.string(x.t.F8FvUy),
            icon: (0, i.jsx)(o.d$L, { size: "sm", color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: o.ToastType.FAILURE,
        },
    },
    f = (e) => {
        let { message: t, icon: n, type: s } = e;
        return (0, i.jsxs)("div", {
            className: a()(p.oR, m.oR),
            "data-type": s,
            children: [
                (0, i.jsx)("div", { className: m.RC, children: n }),
                (0, i.jsx)(o.Text, { color: "text-strong", variant: "text-sm/semibold", children: t }),
            ],
        });
    },
    g = (e) => {
        let { className: t, onAutoHide: n } = e,
            l = (0, u.fu)(),
            A = (0, d.bG)([c.A], () => c.A.useReducedMotion),
            [x, p] = s.useState(!1),
            [g, I] = s.useState(null);
        s.useEffect(() => {
            null !== l ? (p(!0), I(h[l]), o.ORC.announce(h[l].message)) : p(!1);
        }, [l]);
        let j = (0, o.pnh)(
            x,
            {
                from: { transform: A ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: A ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            s.useEffect(() => {
                if (x) {
                    let e = setTimeout(() => {
                        n?.();
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [x, n]),
            (0, i.jsx)(i.Fragment, {
                children: j(
                    (e, n) =>
                        n &&
                        null !== g &&
                        (0, i.jsx)(r.animated.div, {
                            className: a()(t, m.Jt),
                            style: e,
                            children: (0, i.jsx)(f, { ...g }),
                        }),
                ),
            })
        );
    };
