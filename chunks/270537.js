n.d(t, { V: () => d });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(580630);
n(717201);
var o = n(381247),
    l = n(756366),
    c = n(985018),
    u = n(794873);
function d(e) {
    let { label: t, lineItems: n, currency: a, defaultExpanded: l = !1 } = e,
        c = n.length > 0,
        d = i.useMemo(() => n.reduce((e, t) => e + t.amount, 0), [n]),
        _ = i.useMemo(() => n.reduce((e, t) => (t.amount < 0 ? e + Math.abs(t.amount) : e), 0), [n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: u.y }),
            (0, r.jsx)(o.h, {
                label: t,
                defaultExpanded: l,
                isDisabled: !c,
                collapsedContent: (0, r.jsx)(f, {
                    amount: _,
                    currency: a,
                }),
                children: n.map((e) => {
                    let { id: t, label: n, amount: i } = e,
                        l = (0, s.$g)(i, a);
                    return (0, r.jsx)(
                        o.i,
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
    let i = (0, s.$g)(t, n);
    return (0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: c.intl.format(l.default.pDVleg, { amount: i }),
    });
}
function p(e) {
    let { amount: t, currency: n } = e,
        i = (0, s.$g)(t, n);
    return (0, r.jsxs)(a.Text, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: u.p,
        children: [
            (0, r.jsx)("span", { children: c.intl.string(l.default.Zxav97) }),
            (0, r.jsx)("span", { children: i }),
        ],
    });
}
