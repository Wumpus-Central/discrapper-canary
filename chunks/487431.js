a.d(t, { Sy: () => _, VT: () => b, nW: () => v });
var n,
    l = a(627968),
    i = a(834730),
    s = a(123292),
    r = a(628284),
    o = a(285796),
    d = a(478016),
    c = a(738188),
    u = a(789645),
    m = a(827734),
    h = a(975807),
    p = a(311350),
    x = a(985018),
    g = a(90528),
    v =
        (((n = {})[(n.OVERALL_GOOD = 0)] = "OVERALL_GOOD"),
        (n[(n.OVERALL_BAD = 1)] = "OVERALL_BAD"),
        (n[(n.GOOD = 2)] = "GOOD"),
        (n[(n.WARN = 3)] = "WARN"),
        (n[(n.BAD = 4)] = "BAD"),
        n);
function b(e) {
    let { overallStatus: t, name: a, steps: n, isChosen: s } = e;
    return (0, l.jsxs)("div", {
        className: g.Wk,
        children: [
            (0, l.jsx)(_, { status: t, text: a }),
            n.map((e, t) => (0, l.jsx)(f, { ...e }, t)),
            s &&
                (0, l.jsx)("div", {
                    className: g.MH,
                    children: (0, l.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: x.intl.string(p.default.OEkrCx),
                    }),
                }),
        ],
    });
}
function _(e) {
    let { text: t, status: a } = e;
    return (0, l.jsxs)("div", {
        className: g.Km,
        children: [
            (0, l.jsx)(i.E, { variant: "text-md/semibold", color: "text-subtle", children: t }),
            (0, l.jsx)(j, { status: a }),
        ],
    });
}
function f(e) {
    let { status: t, text: a, description: n, learnMoreLink: r } = e;
    return (0, l.jsxs)("div", {
        className: g.jf,
        children: [
            (0, l.jsx)(j, { status: t }),
            (0, l.jsxs)("div", {
                className: g.bc,
                children: [
                    (0, l.jsx)(i.E, { variant: "text-md/medium", children: a }),
                    null != n && (0, l.jsx)(i.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                    null != r &&
                        (0, l.jsx)(s.Q, {
                            textVariant: "text-sm/medium",
                            text: x.intl.string(x.t.hvVgAZ),
                            onClick: () => (0, h.A)(r),
                        }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { status: t } = e,
        a = { size: "sm", className: g.I8 };
    switch (t) {
        case 0:
            return (0, l.jsx)(r.y, { ...a, color: m.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, l.jsx)(o.a, { ...a, color: m.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, l.jsx)(d.U, { ...a, color: m.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, l.jsx)(c.i, { ...a, color: m.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, l.jsx)(u.P, { ...a, color: m.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
