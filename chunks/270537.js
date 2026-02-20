"use strict";
n.d(t, { Qf: () => h, Vm: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(580630);
n(717201);
var u = n(381247),
    c = n(756366),
    d = n(985018),
    _ = n(794873);
function f(e) {
    let {
            label: t,
            totalDueLabel: n,
            lineItems: s,
            currency: a,
            collapsedContentLabelOverride: c,
            defaultExpanded: d = !1,
        } = e,
        f = s.length > 0,
        m = i.useMemo(() => s.reduce((e, t) => e + t.amount, 0), [s]),
        E = i.useMemo(() => s.reduce((e, t) => (t.amount < 0 ? e + Math.abs(t.amount) : e), 0), [s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: _.y }),
            (0, r.jsx)(u.h, {
                label: t,
                defaultExpanded: d,
                isDisabled: !f,
                collapsedContent:
                    null != c
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-md/medium",
                              color: "text-feedback-positive",
                              children: c,
                          })
                        : (0, r.jsx)(p, { amount: E, currency: a }),
                children: s.map((e) => {
                    let { id: t, label: n, amount: i, ...s } = e,
                        o = (0, l.$g)(i, a);
                    return (0, r.jsx)(
                        u.i,
                        { label: n, value: o, valueColor: i < 0 ? "text-feedback-positive" : "text-muted", ...s },
                        t,
                    );
                }),
            }),
            null != n && (0, r.jsx)(h, { label: n, value: (0, l.$g)(m, a) }),
        ],
    });
}
function p(e) {
    let { amount: t, currency: n } = e;
    if (0 === t) return null;
    let i = (0, l.$g)(t, n);
    return (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: d.intl.format(c.default.pDVleg, { amount: i }),
    });
}
function h(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(_.p, i),
        children: [
            (0, r.jsx)("span", { children: t ?? d.intl.string(c.default.Zxav97) }),
            (0, r.jsx)("span", { children: n }),
        ],
    });
}
