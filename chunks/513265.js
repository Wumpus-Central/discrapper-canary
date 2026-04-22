l.d(n, { A: () => N });
var t = l(627968),
    i = l(64700),
    r = l(503698),
    s = l.n(r),
    a = l(517738),
    o = l(311907),
    d = l(933832),
    c = l(827734),
    u = l(972213),
    g = l(97483),
    A = l(765178),
    m = l(866323),
    f = l(834730),
    p = l(775602),
    x = l(606758),
    h = l(518477),
    v = l(985018),
    j = l(707238),
    I = l(861173);
let b = {
        [h.jM.WIDGET_ADDED]: {
            message: v.intl.string(v.t.fFP1Uy),
            icon: (0, t.jsx)(d.A, { size: "sm", color: c.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [h.jM.WIDGET_REMOVED]: {
            message: v.intl.string(v.t.zzsK7h),
            icon: (0, t.jsx)(d.A, { size: "sm", color: c.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [h.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: v.intl.string(v.t["84MExs"]),
            icon: (0, t.jsx)(u.d, { size: "sm", color: c.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: g.Ck.FAILURE,
        },
        [h.jM.SOMETHING_WENT_WRONG]: {
            message: v.intl.string(v.t.F8FvUy),
            icon: (0, t.jsx)(u.d, { size: "sm", color: c.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: g.Ck.FAILURE,
        },
    },
    C = (e) => {
        let { message: n, icon: l, type: i } = e;
        return (0, t.jsxs)("div", {
            className: s()(I.oR, j.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: j.RC, children: l }),
                (0, t.jsx)(f.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    N = (e) => {
        let { className: n } = e,
            l = (0, x.fu)(),
            r = (0, o.bG)([p.A], () => p.A.useReducedMotion),
            [d, c] = i.useState(!1),
            [u, g] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (c(!0), g(b[l]), A.O.announce(b[l].message)) : c(!1);
        }, [l]);
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
            (0, t.jsx)(t.Fragment, {
                children: f(
                    (e, l) =>
                        l &&
                        null !== u &&
                        (0, t.jsx)(a.animated.div, {
                            className: s()(n, j.Jt),
                            style: e,
                            children: (0, t.jsx)(C, { ...u }),
                        }),
                ),
            })
        );
    };
