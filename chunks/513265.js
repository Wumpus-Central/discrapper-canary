l.d(t, { A: () => f });
var i = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(522160),
    o = l(311907),
    d = l(397927),
    c = l(775602),
    u = l(384377),
    m = l(518477),
    A = l(985018),
    x = l(845913),
    p = l(910200);
let g = {
        [m.jM.WIDGET_ADDED]: {
            message: A.intl.string(A.t.fFP1Uy),
            icon: (0, i.jsx)(d.A9s, { size: "sm", color: d.LU0.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [m.jM.WIDGET_REMOVED]: {
            message: A.intl.string(A.t.zzsK7h),
            icon: (0, i.jsx)(d.A9s, { size: "sm", color: d.LU0.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [m.jM.WIDGET_SAVE_FAILURE]: {
            message: A.intl.string(A.t["84MExs"]),
            icon: (0, i.jsx)(d.d$L, { size: "sm", color: d.LU0.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE,
        },
        [m.jM.SOMETHING_WENT_WRONG]: {
            message: A.intl.string(A.t.F8FvUy),
            icon: (0, i.jsx)(d.d$L, { size: "sm", color: d.LU0.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE,
        },
    },
    h = (e) => {
        let { message: t, icon: l, type: n } = e;
        return (0, i.jsxs)("div", {
            className: a()(p.oR, x.oR),
            "data-type": n,
            children: [
                (0, i.jsx)("div", { className: x.RC, children: l }),
                (0, i.jsx)(d.Text, { color: "text-strong", variant: "text-sm/semibold", children: t }),
            ],
        });
    },
    f = (e) => {
        let { className: t, onAutoHide: l } = e,
            s = (0, u.fu)(),
            m = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            [A, p] = n.useState(!1),
            [f, j] = n.useState(null);
        n.useEffect(() => {
            null !== s ? (p(!0), j(g[s]), d.ORC.announce(g[s].message)) : p(!1);
        }, [s]);
        let I = (0, d.pnh)(
            A,
            {
                from: { transform: m ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: m ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            n.useEffect(() => {
                if (A) {
                    let e = setTimeout(() => {
                        l?.();
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [A, l]),
            (0, i.jsx)(i.Fragment, {
                children: I(
                    (e, l) =>
                        l &&
                        null !== f &&
                        (0, i.jsx)(r.animated.div, {
                            className: a()(t, x.Jt),
                            style: e,
                            children: (0, i.jsx)(h, { ...f }),
                        }),
                ),
            })
        );
    };
