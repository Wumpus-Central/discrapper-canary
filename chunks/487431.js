e.d(t, { Sy: () => b, VT: () => D, nW: () => v });
var l,
    r = e(477900),
    i = e(503698),
    n = e.n(i),
    c = e(243721),
    a = e(834730),
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
    N = e(605819),
    I = e(375708),
    _ = e(614965),
    v =
        (((l = {})[(l.OVERALL_GOOD = 0)] = "OVERALL_GOOD"),
        (l[(l.OVERALL_BAD = 1)] = "OVERALL_BAD"),
        (l[(l.GOOD = 2)] = "GOOD"),
        (l[(l.WARN = 3)] = "WARN"),
        (l[(l.BAD = 4)] = "BAD"),
        l);
function D(s) {
    let { overallStatus: t, flow: e, name: l, steps: i, isChosen: o, showGlobalFlowToggle: d = !1 } = s,
        x = (0, j.bG)([C.A], () => C.A.getGloballyDisabledAuthorizationFlows()),
        u = x.has(e);
    return (0, r.jsxs)("div", {
        className: _.Wk,
        children: [
            d &&
                (0, r.jsx)("div", {
                    className: _.WV,
                    children: (0, r.jsx)(c.d, {
                        label: I.intl.string(N.default.DWC99q),
                        checked: !u,
                        onChange: () => {
                            u ? O.zi([...x].filter((s) => s !== e)) : O.zi([...x, e]);
                        },
                    }),
                }),
            (0, r.jsx)(b, { status: t, text: l }),
            i.map((s, t) => (0, r.jsx)(f, { ...s }, t)),
            o &&
                (0, r.jsx)("div", {
                    className: _.MH,
                    children: (0, r.jsx)(a.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.string(N.default.OEkrCx),
                    }),
                }),
            u &&
                (0, r.jsx)("div", {
                    className: n()(_.MH, _.vi),
                    children: (0, r.jsx)(a.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.string(N.default.mgsmfY),
                    }),
                }),
        ],
    });
}
function b(s) {
    let { text: t, status: e } = s;
    return (0, r.jsxs)("div", {
        className: _.Km,
        children: [
            (0, r.jsx)(a.E, { variant: "text-md/semibold", color: "text-subtle", children: t }),
            (0, r.jsx)(L, { status: e }),
        ],
    });
}
function f(s) {
    let { status: t, text: e, description: l, learnMoreLink: i } = s;
    return (0, r.jsxs)("div", {
        className: _.jf,
        children: [
            (0, r.jsx)(L, { status: t }),
            (0, r.jsxs)("div", {
                className: _.bc,
                children: [
                    (0, r.jsx)(a.E, { variant: "text-md/medium", children: e }),
                    null != l && (0, r.jsx)(a.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                    null != i &&
                        (0, r.jsx)(o.Q, {
                            textVariant: "text-sm/medium",
                            text: I.intl.string(I.t.hvVgAZ),
                            onClick: () => (0, E.A)(i),
                        }),
                ],
            }),
        ],
    });
}
function L(s) {
    let { status: t } = s,
        e = { size: "sm", className: _.I8 };
    switch (t) {
        case 0:
            return (0, r.jsx)(d.y, { ...e, color: h.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, r.jsx)(x.a, { ...e, color: h.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, r.jsx)(u.U, { ...e, color: h.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, r.jsx)(m.WarningIcon, { ...e, color: h.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, r.jsx)(A.P, { ...e, color: h.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
