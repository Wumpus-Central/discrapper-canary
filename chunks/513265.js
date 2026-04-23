t.d(n, { A: () => N });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(419354),
    o = t(311907),
    d = t(933832),
    u = t(827734),
    c = t(972213),
    g = t(97483),
    A = t(765178),
    m = t(866323),
    f = t(834730),
    p = t(775602),
    x = t(606758),
    h = t(518477),
    v = t(985018),
    j = t(707238),
    I = t(861173);
let b = {
        [h.jM.WIDGET_ADDED]: {
            message: v.intl.string(v.t.fFP1Uy),
            icon: (0, l.jsx)(d.A, { size: "sm", color: u.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [h.jM.WIDGET_REMOVED]: {
            message: v.intl.string(v.t.zzsK7h),
            icon: (0, l.jsx)(d.A, { size: "sm", color: u.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [h.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: v.intl.string(v.t["84MExs"]),
            icon: (0, l.jsx)(c.d, { size: "sm", color: u.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: g.Ck.FAILURE,
        },
        [h.jM.SOMETHING_WENT_WRONG]: {
            message: v.intl.string(v.t.F8FvUy),
            icon: (0, l.jsx)(c.d, { size: "sm", color: u.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: g.Ck.FAILURE,
        },
    },
    C = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: a()(I.oR, j.oR),
            "data-type": i,
            children: [
                (0, l.jsx)("div", { className: j.RC, children: t }),
                (0, l.jsx)(f.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    N = (e) => {
        let { className: n } = e,
            t = (0, x.fu)(),
            r = (0, o.bG)([p.A], () => p.A.useReducedMotion),
            [d, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (u(!0), g(b[t]), A.O.announce(b[t].message)) : u(!1);
        }, [t]);
        let f = (0, m.p)(
            d,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, x.XA)(null), []),
            i.useEffect(() => {
                if (d) {
                    let e = setTimeout(() => {
                        (0, x.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [d]),
            (0, l.jsx)(l.Fragment, {
                children: f(
                    (e, t) =>
                        t &&
                        null !== c &&
                        (0, l.jsx)(s.animated.div, {
                            className: a()(n, j.Jt),
                            style: e,
                            children: (0, l.jsx)(C, { ...c }),
                        }),
                ),
            })
        );
    };
