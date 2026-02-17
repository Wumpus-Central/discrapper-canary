"use strict";
n.d(t, { Qf: () => p, Vm: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(580630);
n(717201);
var u = n(381247),
    c = n(756366),
    d = n(985018),
    _ = n(794873);
function f(e) {
    let { label: t, totalDueLabel: n, lineItems: a, currency: s, defaultExpanded: o = !1 } = e,
        c = a.length > 0,
        d = i.useMemo(() => a.reduce((e, t) => e + t.amount, 0), [a]),
        f = i.useMemo(() => a.reduce((e, t) => (t.amount < 0 ? e + Math.abs(t.amount) : e), 0), [a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: _.y }),
            (0, r.jsx)(u.h, {
                label: t,
                defaultExpanded: o,
                isDisabled: !c,
                collapsedContent: (0, r.jsx)(h, { amount: f, currency: s }),
                children: a.map((e) => {
                    let { id: t, label: n, amount: i, ...a } = e,
                        o = (0, l.$g)(i, s);
                    return (0, r.jsx)(
                        u.i,
                        { label: n, value: o, valueColor: i < 0 ? "text-feedback-positive" : "text-muted", ...a },
                        t,
                    );
                }),
            }),
            null != n && (0, r.jsx)(p, { label: n, value: (0, l.$g)(d, s) }),
        ],
    });
}
function h(e) {
    let { amount: t, currency: n } = e;
    if (0 === t) return null;
    let i = (0, l.$g)(t, n);
    return (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: d.intl.format(c.default.pDVleg, { amount: i }),
    });
}
function p(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: s()(_.p, i),
        children: [
            (0, r.jsx)("span", { children: t ?? d.intl.string(c.default.Zxav97) }),
            (0, r.jsx)("span", { children: n }),
        ],
    });
}
