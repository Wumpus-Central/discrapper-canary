e.d(t, { Sy: () => b, VT: () => D, nW: () => v });
var l,
    r = e(477900),
    i = e(503698),
    n = e.n(i),
    c = e(17928),
    a = e(661531),
    o = e(193249),
    d = e(834730),
    x = e(123292),
    u = e(628284),
    m = e(285796),
    A = e(478016),
    j = e(738188),
    h = e(789645),
    E = e(975807),
    C = e(878118),
    O = e(281020),
    N = e(211850),
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
    let { overallStatus: t, flow: e, name: l, steps: i, isChosen: a, showGlobalFlowToggle: x = !1 } = s,
        u = (0, c.bG)([C.A], () => C.A.getGloballyDisabledAuthorizationFlows()),
        m = u.has(e);
    return (0, r.jsxs)("div", {
        className: _.Wk,
        children: [
            x &&
                (0, r.jsx)("div", {
                    className: _.WV,
                    children: (0, r.jsx)(o.d, {
                        label: I.intl.string(N.default.DWC99q),
                        checked: !m,
                        onChange: () => {
                            m ? O.zi([...u].filter((s) => s !== e)) : O.zi([...u, e]);
                        },
                    }),
                }),
            (0, r.jsx)(b, { status: t, text: l }),
            i.map((s, t) => (0, r.jsx)(f, { ...s }, t)),
            a &&
                (0, r.jsx)("div", {
                    className: _.MH,
                    children: (0, r.jsx)(d.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.string(N.default.OEkrCx),
                    }),
                }),
            m &&
                (0, r.jsx)("div", {
                    className: n()(_.MH, _.vi),
                    children: (0, r.jsx)(d.E, {
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
            (0, r.jsx)(d.E, { variant: "text-md/semibold", color: "text-subtle", children: t }),
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
                    (0, r.jsx)(d.E, { variant: "text-md/medium", children: e }),
                    null != l && (0, r.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                    null != i &&
                        (0, r.jsx)(x.Q, {
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
            return (0, r.jsx)(u.y, { ...e, color: a.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, r.jsx)(m.a, { ...e, color: a.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, r.jsx)(A.U, { ...e, color: a.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, r.jsx)(j.WarningIcon, { ...e, color: a.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, r.jsx)(h.P, { ...e, color: a.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
