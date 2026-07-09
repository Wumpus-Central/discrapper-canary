e.d(t, { Sy: () => b, VT: () => I, nW: () => D });
var l,
    i = e(627968),
    r = e(503698),
    c = e.n(r),
    a = e(243721),
    n = e(834730),
    o = e(123292),
    d = e(628284),
    x = e(285796),
    u = e(478016),
    m = e(738188),
    A = e(789645),
    j = e(17928),
    h = e(661531),
    E = e(975807),
    C = e(878118),
    O = e(281020),
    N = e(458899),
    _ = e(375708),
    v = e(376480),
    D =
        (((l = {})[(l.OVERALL_GOOD = 0)] = "OVERALL_GOOD"),
        (l[(l.OVERALL_BAD = 1)] = "OVERALL_BAD"),
        (l[(l.GOOD = 2)] = "GOOD"),
        (l[(l.WARN = 3)] = "WARN"),
        (l[(l.BAD = 4)] = "BAD"),
        l);
function I(s) {
    let { overallStatus: t, flow: e, name: l, steps: r, isChosen: o, showGlobalFlowToggle: d = !1 } = s,
        x = (0, j.bG)([C.A], () => C.A.getGloballyDisabledAuthorizationFlows()),
        u = x.has(e);
    return (0, i.jsxs)("div", {
        className: v.Wk,
        children: [
            d &&
                (0, i.jsx)("div", {
                    className: v.WV,
                    children: (0, i.jsx)(a.d, {
                        label: _.intl.string(N.default.DWC99q),
                        checked: !u,
                        onChange: () => {
                            u ? O.zi([...x].filter((s) => s !== e)) : O.zi([...x, e]);
                        },
                    }),
                }),
            (0, i.jsx)(b, { status: t, text: l }),
            r.map((s, t) => (0, i.jsx)(f, { ...s }, t)),
            o &&
                (0, i.jsx)("div", {
                    className: v.MH,
                    children: (0, i.jsx)(n.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: _.intl.string(N.default.OEkrCx),
                    }),
                }),
            u &&
                (0, i.jsx)("div", {
                    className: c()(v.MH, v.vi),
                    children: (0, i.jsx)(n.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: _.intl.string(N.default.mgsmfY),
                    }),
                }),
        ],
    });
}
function b(s) {
    let { text: t, status: e } = s;
    return (0, i.jsxs)("div", {
        className: v.Km,
        children: [
            (0, i.jsx)(n.E, { variant: "text-md/semibold", color: "text-subtle", children: t }),
            (0, i.jsx)(L, { status: e }),
        ],
    });
}
function f(s) {
    let { status: t, text: e, description: l, learnMoreLink: r } = s;
    return (0, i.jsxs)("div", {
        className: v.jf,
        children: [
            (0, i.jsx)(L, { status: t }),
            (0, i.jsxs)("div", {
                className: v.bc,
                children: [
                    (0, i.jsx)(n.E, { variant: "text-md/medium", children: e }),
                    null != l && (0, i.jsx)(n.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                    null != r &&
                        (0, i.jsx)(o.Q, {
                            textVariant: "text-sm/medium",
                            text: _.intl.string(_.t.hvVgAZ),
                            onClick: () => (0, E.A)(r),
                        }),
                ],
            }),
        ],
    });
}
function L(s) {
    let { status: t } = s,
        e = { size: "sm", className: v.I8 };
    switch (t) {
        case 0:
            return (0, i.jsx)(d.y, { ...e, color: h.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, i.jsx)(x.a, { ...e, color: h.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, i.jsx)(u.U, { ...e, color: h.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, i.jsx)(m.i, { ...e, color: h.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, i.jsx)(A.P, { ...e, color: h.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
