"use strict";
n.d(t, { Qf: () => T, Vm: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(450873),
    l = n.n(o),
    u = n(397927),
    c = n(580630);
n(717201);
var d = n(381247),
    _ = n(756366),
    f = n(985018),
    p = n(794873);
function h(e) {
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("div", { className: p.y }), (0, r.jsx)(A, { ...e })] });
}
function m(e) {
    return "tax" === e.id;
}
function E(e) {
    return 0 === e.amount;
}
function g(e) {
    let t = e.filter((e) => !(m(e) && E(e))),
        { tax: n = 0, other: r = 0 } = l()(t, (e) => (m(e) ? "tax" : "other"));
    if (1 === r) {
        if (0 === n) return [];
        if (1 === n) return [t.find(m)];
    }
    return t;
}
function A(e) {
    let { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: a, defaultExpanded: o = !1 } = e,
        l = n.length > 0,
        _ = i.useMemo(() => n.reduce((e, t) => (t.amount < 0 ? e + Math.abs(t.amount) : e), 0), [n]),
        f = g(n);
    if (0 === f.length) return null;
    if (1 === f.length) {
        let { amount: e, ...t } = f[0],
            n = (0, c.$g)(e, s);
        return (0, r.jsx)(d.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, r.jsx)(d.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !l,
        collapsedContent:
            null != a
                ? (0, r.jsx)(u.Text, { variant: "text-md/medium", color: "text-feedback-positive", children: a })
                : (0, r.jsx)(I, { amount: _, currency: s }),
        children: f.map((e) => {
            let { id: t, label: n, amount: i, ...a } = e,
                o = (0, c.$g)(i, s);
            return (0, r.jsx)(
                d.i,
                { label: n, value: o, valueColor: i < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function I(e) {
    let { amount: t, currency: n } = e;
    if (0 === t) return null;
    let i = (0, c.$g)(t, n);
    return (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: f.intl.format(_.default.pDVleg, { amount: i }),
    });
}
function T(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)(u.Text, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(p.p, i),
        children: [
            (0, r.jsx)("span", { children: t ?? f.intl.string(_.default.Zxav97) }),
            (0, r.jsx)("span", { children: n }),
        ],
    });
}
