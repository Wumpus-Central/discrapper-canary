"use strict";
n.d(t, { Sy: () => _, VT: () => d, nW: () => c });
var r = n(627968),
    i = n(158954),
    s = n(827734),
    a = n(975807),
    o = n(271469),
    l = n(985018),
    u = n(944191),
    c = (function (e) {
        return (
            (e[(e.OVERALL_GOOD = 0)] = "OVERALL_GOOD"),
            (e[(e.OVERALL_BAD = 1)] = "OVERALL_BAD"),
            (e[(e.GOOD = 2)] = "GOOD"),
            (e[(e.WARN = 3)] = "WARN"),
            (e[(e.BAD = 4)] = "BAD"),
            e
        );
    })({});
function d(e) {
    let { overallStatus: t, name: n, steps: s, isChosen: a } = e;
    return (0, r.jsxs)("div", {
        className: u.Wk,
        children: [
            (0, r.jsx)(_, { status: t, text: n }),
            s.map((e, t) => (0, r.jsx)(f, { ...e }, t)),
            a &&
                (0, r.jsx)("div", {
                    className: u.MH,
                    children: (0, r.jsx)(i.EYj, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: l.intl.string(o.default.OEkrCx),
                    }),
                }),
        ],
    });
}
function _(e) {
    let { text: t, status: n } = e;
    return (0, r.jsxs)("div", {
        className: u.Km,
        children: [
            (0, r.jsx)(i.EYj, { variant: "text-md/semibold", color: "text-subtle", children: t }),
            (0, r.jsx)(p, { status: n }),
        ],
    });
}
function f(e) {
    let { status: t, text: n, description: s, learnMoreLink: o } = e;
    return (0, r.jsxs)("div", {
        className: u.jf,
        children: [
            (0, r.jsx)(p, { status: t }),
            (0, r.jsxs)("div", {
                className: u.bc,
                children: [
                    (0, r.jsx)(i.EYj, { variant: "text-md/medium", children: n }),
                    null != s && (0, r.jsx)(i.EYj, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                    null != o &&
                        (0, r.jsx)(i.QWc, {
                            textVariant: "text-sm/medium",
                            text: l.intl.string(l.t.hvVgAZ),
                            onClick: () => (0, a.A)(o),
                        }),
                ],
            }),
        ],
    });
}
function p(e) {
    let { status: t } = e,
        n = { size: "sm", className: u.I8 };
    switch (t) {
        case 0:
            return (0, r.jsx)(i.yr3, { ...n, color: s.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, r.jsx)(i.aXh, { ...n, color: s.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, r.jsx)(i.Uzd, { ...n, color: s.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, r.jsx)(i.id, { ...n, color: s.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, r.jsx)(i.PGe, { ...n, color: s.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
