t.d(l, { A: () => h });
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(880013),
    o = t(311907),
    d = t(397927),
    c = t(775602),
    u = t(606758),
    m = t(518477),
    A = t(985018),
    p = t(194399),
    x = t(549290);
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
    f = (e) => {
        let { message: l, icon: t, type: n } = e;
        return (0, i.jsxs)("div", {
            className: a()(x.oR, p.oR),
            "data-type": n,
            children: [
                (0, i.jsx)("div", { className: p.RC, children: t }),
                (0, i.jsx)(d.Text, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    h = (e) => {
        let { className: l } = e,
            t = (0, u.fu)(),
            s = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            [m, A] = n.useState(!1),
            [x, h] = n.useState(null);
        n.useEffect(() => {
            null !== t ? (A(!0), h(g[t]), d.ORC.announce(g[t].message)) : A(!1);
        }, [t]);
        let j = (0, d.pnh)(
            m,
            {
                from: { transform: s ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            n.useEffect(() => () => (0, u.XA)(null), []),
            n.useEffect(() => {
                if (m) {
                    let e = setTimeout(() => {
                        (0, u.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [m]),
            (0, i.jsx)(i.Fragment, {
                children: j(
                    (e, t) =>
                        t &&
                        null !== x &&
                        (0, i.jsx)(r.animated.div, {
                            className: a()(l, p.Jt),
                            style: e,
                            children: (0, i.jsx)(f, { ...x }),
                        }),
                ),
            })
        );
    };
