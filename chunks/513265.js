n.d(l, { A: () => h });
var t = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(606758),
    m = n(518477),
    p = n(985018),
    x = n(439510),
    A = n(886981);
let g = {
        [m.jM.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1Uy),
            icon: (0, t.jsx)(d.A9s, { size: "sm", color: d.LU0.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [m.jM.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7h),
            icon: (0, t.jsx)(d.A9s, { size: "sm", color: d.LU0.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [m.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, t.jsx)(d.d$L, { size: "sm", color: d.LU0.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: d.ToastType.FAILURE,
        },
        [m.jM.SOMETHING_WENT_WRONG]: {
            message: p.intl.string(p.t.F8FvUy),
            icon: (0, t.jsx)(d.d$L, { size: "sm", color: d.LU0.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE,
        },
    },
    f = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(A.oR, x.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: x.RC, children: n }),
                (0, t.jsx)(d.Text, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    h = (e) => {
        let { className: l } = e,
            n = (0, u.fu)(),
            s = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            [m, p] = i.useState(!1),
            [A, h] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (p(!0), h(g[n]), d.ORC.announce(g[n].message)) : p(!1);
        }, [n]);
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
            i.useEffect(() => () => (0, u.XA)(null), []),
            i.useEffect(() => {
                if (m) {
                    let e = setTimeout(() => {
                        (0, u.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [m]),
            (0, t.jsx)(t.Fragment, {
                children: j(
                    (e, n) =>
                        n &&
                        null !== A &&
                        (0, t.jsx)(r.animated.div, {
                            className: a()(l, x.Jt),
                            style: e,
                            children: (0, t.jsx)(f, { ...A }),
                        }),
                ),
            })
        );
    };
