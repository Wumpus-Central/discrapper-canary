var t,
    r = l(477900),
    c = l(503698),
    i = l.n(c),
    n = l(855986),
    a = l(646514),
    o = l(143129),
    d = l(834730),
    u = l(123292),
    m = l(628284),
    x = l(285796),
    A = l(478016),
    h = l(738188),
    j = l(789645),
    C = l(975807),
    E = l(878118),
    I = l(281020),
    O = l(86495),
    b = l(792996),
    N = l(614965),
    _ =
        (((t = {})[(t.OVERALL_GOOD = 0)] = "OVERALL_GOOD"),
        (t[(t.OVERALL_BAD = 1)] = "OVERALL_BAD"),
        (t[(t.GOOD = 2)] = "GOOD"),
        (t[(t.WARN = 3)] = "WARN"),
        (t[(t.BAD = 4)] = "BAD"),
        t);
function v(s) {
    let { text: e, status: l } = s;
    return (0, r.jsxs)("div", {
        className: N.Km,
        children: [
            (0, r.jsx)(d.E, { variant: "body-md/semibold", color: "text-subtle", children: e }),
            (0, r.jsx)(k, { status: l }),
        ],
    });
}
function D(s) {
    let { status: e, text: l, description: t, learnMoreLink: c } = s;
    return (0, r.jsxs)("div", {
        className: N.jf,
        children: [
            (0, r.jsx)(k, { status: e }),
            (0, r.jsxs)("div", {
                className: N.bc,
                children: [
                    (0, r.jsx)(d.E, { variant: "body-md/medium", children: l }),
                    null != t && (0, r.jsx)(d.E, { variant: "body-sm/medium", color: "text-subtle", children: t }),
                    null != c &&
                        (0, r.jsx)(u.Q, {
                            textVariant: "body-sm/medium",
                            text: b.intl.string(b.t.hvVgAZ),
                            onClick: () => (0, C.A)(c),
                        }),
                ],
            }),
        ],
    });
}
function k(s) {
    let { status: e } = s,
        l = { size: "sm", className: N.I8 };
    switch (e) {
        case 0:
            return (0, r.jsx)(m.CircleCheckIcon, { ...l, color: a.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, r.jsx)(x.CircleXIcon, { ...l, color: a.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, r.jsx)(A.CheckmarkSmallIcon, { ...l, color: a.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, r.jsx)(h.WarningIcon, { ...l, color: a.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, r.jsx)(j.XSmallIcon, { ...l, color: a.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
l.d(
    e,
    {},
    {
        Sy: v,
        VT: function (s) {
            let { overallStatus: e, flow: l, name: t, steps: c, isChosen: a, showGlobalFlowToggle: u = !1 } = s,
                m = (0, n.bG)([E.A], () => E.A.getGloballyDisabledAuthorizationFlows()),
                x = m.has(l);
            return (0, r.jsxs)("div", {
                className: N.Wk,
                children: [
                    u &&
                        (0, r.jsx)("div", {
                            className: N.WV,
                            children: (0, r.jsx)(o.d, {
                                label: b.intl.string(O.default.DWC99q),
                                checked: !x,
                                onChange: () => {
                                    x ? I.zi([...m].filter((s) => s !== l)) : I.zi([...m, l]);
                                },
                            }),
                        }),
                    (0, r.jsx)(v, { status: e, text: t }),
                    c.map((s, e) => (0, r.jsx)(D, { ...s }, e)),
                    a &&
                        (0, r.jsx)("div", {
                            className: N.MH,
                            children: (0, r.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                children: b.intl.string(O.default.OEkrCx),
                            }),
                        }),
                    x &&
                        (0, r.jsx)("div", {
                            className: i()(N.MH, N.vi),
                            children: (0, r.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                children: b.intl.string(O.default.mgsmfY),
                            }),
                        }),
                ],
            });
        },
        kW: k,
        nW: _,
    },
);
