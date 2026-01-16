n.d(t, { Q: () => d });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(937615);
n(490210);
var s = n(576929),
    l = n(475338),
    c = n(388032),
    u = n(375460);
function d(e) {
    let { label: t, lineItems: n, currency: a, defaultExpanded: l = !1 } = e,
        c = n.length > 0,
        d = i.useMemo(() => n.reduce((e, t) => e + t.amount, 0), [n]),
        _ = i.useMemo(() => n.reduce((e, t) => (t.amount < 0 ? e + Math.abs(t.amount) : e), 0), [n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: u.divider }),
            (0, r.jsx)(s.O, {
                label: t,
                defaultExpanded: l,
                isDisabled: !c,
                collapsedContent: (0, r.jsx)(f, {
                    amount: _,
                    currency: a,
                }),
                children: n.map((e) => {
                    let { id: t, label: n, amount: i } = e,
                        l = (0, o.T4)(i, a);
                    return (0, r.jsx)(
                        s.r,
                        {
                            label: n,
                            value: l,
                            valueColor: i < 0 ? "text-feedback-positive" : "text-muted",
                        },
                        t,
                    );
                }),
            }),
            (0, r.jsx)(p, {
                amount: d,
                currency: a,
            }),
        ],
    });
}
function f(e) {
    let { amount: t, currency: n } = e;
    if (0 === t) return null;
    let i = (0, o.T4)(t, n);
    return (0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: c.intl.format(l.default.pDVleg, { amount: i }),
    });
}
function p(e) {
    let { amount: t, currency: n } = e,
        i = (0, o.T4)(t, n);
    return (0, r.jsxs)(a.Text, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: u.totalDue,
        children: [
            (0, r.jsx)("span", { children: c.intl.string(l.default.Zxav97) }),
            (0, r.jsx)("span", { children: i }),
        ],
    });
}
