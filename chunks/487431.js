t.d(e, { Sy: () => D, VT: () => v, kW: () => L, nW: () => _ });
var l,
    r = t(477900),
    i = t(503698),
    n = t.n(i),
    c = t(17928),
    a = t(661531),
    o = t(193249),
    d = t(834730),
    u = t(123292),
    x = t(628284),
    m = t(285796),
    A = t(478016),
    j = t(738188),
    h = t(789645),
    E = t(975807),
    C = t(878118),
    O = t(281020),
    b = t(673051),
    N = t(105292),
    I = t(614965),
    _ =
        (((l = {})[(l.OVERALL_GOOD = 0)] = "OVERALL_GOOD"),
        (l[(l.OVERALL_BAD = 1)] = "OVERALL_BAD"),
        (l[(l.GOOD = 2)] = "GOOD"),
        (l[(l.WARN = 3)] = "WARN"),
        (l[(l.BAD = 4)] = "BAD"),
        l);
function v(s) {
    let { overallStatus: e, flow: t, name: l, steps: i, isChosen: a, showGlobalFlowToggle: u = !1 } = s,
        x = (0, c.bG)([C.A], () => C.A.getGloballyDisabledAuthorizationFlows()),
        m = x.has(t);
    return (0, r.jsxs)("div", {
        className: I.Wk,
        children: [
            u &&
                (0, r.jsx)("div", {
                    className: I.WV,
                    children: (0, r.jsx)(o.d, {
                        label: N.intl.string(b.default.DWC99q),
                        checked: !m,
                        onChange: () => {
                            m ? O.zi([...x].filter((s) => s !== t)) : O.zi([...x, t]);
                        },
                    }),
                }),
            (0, r.jsx)(D, { status: e, text: l }),
            i.map((s, e) => (0, r.jsx)(f, { ...s }, e)),
            a &&
                (0, r.jsx)("div", {
                    className: I.MH,
                    children: (0, r.jsx)(d.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(b.default.OEkrCx),
                    }),
                }),
            m &&
                (0, r.jsx)("div", {
                    className: n()(I.MH, I.vi),
                    children: (0, r.jsx)(d.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(b.default.mgsmfY),
                    }),
                }),
        ],
    });
}
function D(s) {
    let { text: e, status: t } = s;
    return (0, r.jsxs)("div", {
        className: I.Km,
        children: [
            (0, r.jsx)(d.E, { variant: "body-md/semibold", color: "text-subtle", children: e }),
            (0, r.jsx)(L, { status: t }),
        ],
    });
}
function f(s) {
    let { status: e, text: t, description: l, learnMoreLink: i } = s;
    return (0, r.jsxs)("div", {
        className: I.jf,
        children: [
            (0, r.jsx)(L, { status: e }),
            (0, r.jsxs)("div", {
                className: I.bc,
                children: [
                    (0, r.jsx)(d.E, { variant: "body-md/medium", children: t }),
                    null != l && (0, r.jsx)(d.E, { variant: "body-sm/medium", color: "text-subtle", children: l }),
                    null != i &&
                        (0, r.jsx)(u.Q, {
                            textVariant: "body-sm/medium",
                            text: N.intl.string(N.t.hvVgAZ),
                            onClick: () => (0, E.A)(i),
                        }),
                ],
            }),
        ],
    });
}
function L(s) {
    let { status: e } = s,
        t = { size: "sm", className: I.I8 };
    switch (e) {
        case 0:
            return (0, r.jsx)(x.y, { ...t, color: a.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, r.jsx)(m.a, { ...t, color: a.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, r.jsx)(A.U, { ...t, color: a.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, r.jsx)(j.WarningIcon, { ...t, color: a.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, r.jsx)(h.P, { ...t, color: a.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
