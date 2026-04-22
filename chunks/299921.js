n.d(e, { A: () => y });
var a = n(627968),
    s = n(64700),
    c = n(503698),
    i = n.n(c),
    r = n(231483),
    l = n(827734),
    o = n(834730),
    d = n(691540),
    _ = n(857250),
    u = n(97483),
    p = n(939249),
    x = n(340833),
    b = n(913642),
    f = n(544231),
    g = n(349435),
    m = n(665909),
    h = n(985018),
    A = n(543972),
    E = n(861173);
function j() {
    return (0, a.jsxs)("div", {
        className: i()(E.oR, A.oR),
        children: [
            (0, a.jsx)(r.l, { color: l.A.colors.TEXT_BRAND }),
            (0, a.jsx)(o.E, {
                className: E.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: h.intl.string(h.t["gd/Yqs"]),
            }),
        ],
    });
}
function y(t) {
    let { channelId: e, warningId: n, senderId: c, safetyWarning: r } = t,
        l = s.useMemo(() => r?.feedback_type === g.fy.UPVOTE, [r]),
        E = s.useMemo(() => r?.feedback_type === g.fy.DOWNVOTE, [r]),
        y = s.useCallback(
            (t, s) => {
                r?.feedback_type !== t &&
                    ((0, f.v2)(e, n, t),
                    (0, d.P0)((0, _.o)(h.intl.string(h.t["gd/Yqs"]), u.Ck.CUSTOM, { component: (0, a.jsx)(j, {}) })),
                    (0, m._$)({ channelId: e, warningId: n, senderId: c, warningType: r?.type, cta: s }));
            },
            [r, e, n, c],
        );
    return (0, a.jsxs)("div", {
        className: A.mp,
        children: [
            (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: h.intl.string(h.t.L84yVm) }),
            (0, a.jsxs)("div", {
                className: A.NC,
                children: [
                    (0, a.jsx)(p.D, {
                        className: i()([A.eH, l ? A.QT : A.LM, { [A.r9]: l }]),
                        onClick: () => y(g.fy.UPVOTE, m.Wm.FEEDBACK_UPVOTE),
                        "aria-label": h.intl.string(h.t["2GrOCN"]),
                        children: (0, a.jsx)(b.A, {
                            className: A.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                    (0, a.jsx)(p.D, {
                        className: i()([A.eH, E ? A.QT : A.LM, { [A.r9]: E }]),
                        onClick: () => y(g.fy.DOWNVOTE, m.Wm.FEEDBACK_DOWNVOTE),
                        "aria-label": h.intl.string(h.t.COp9BO),
                        children: (0, a.jsx)(x.A, {
                            className: A.__invalid_buttonIcon,
                            color: "interactive-text-default",
                        }),
                    }),
                ],
            }),
        ],
    });
}
