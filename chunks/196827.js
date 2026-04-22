n.d(t, { A: () => h, u: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(990078),
    a = n(834730),
    o = n(885574),
    d = n(971630),
    c = n(694336),
    u = n(985018),
    m = n(681214);
let g = (e) => {
        let { value: t, isPercent: n } = e;
        if (null == t) return null;
        let { formattedValue: l, isPositive: r } = (0, d.TP)(t, n);
        return (0, i.jsxs)("div", {
            className: m.Rx,
            children: [
                (0, i.jsx)(c.A, { className: s()(m.gv, { [m.fk]: !r }) }),
                (0, i.jsx)(a.E, {
                    variant: "text-md/normal",
                    className: m.ck,
                    children: u.intl.format(u.t.OTHOvZ, { value: l }),
                }),
            ],
        });
    },
    h = (e) => {
        let { label: t, sublabel: n, value: l, additionalContent: s, tooltip: d } = e;
        return (0, i.jsxs)("div", {
            className: m.kL,
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: m._A,
                            children: [
                                (0, i.jsx)(a.E, { variant: "text-xs/medium", className: m.Pf, children: t }),
                                null != d &&
                                    (0, i.jsx)(r.m, {
                                        text: d,
                                        children: (0, i.jsx)(o.m, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: m.F6,
                                        }),
                                    }),
                                null != n
                                    ? (0, i.jsx)(a.E, { variant: "text-xs/normal", className: m.$B, children: n })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(a.E, { className: m.Uq, variant: "text-sm/normal", children: l }),
                    ],
                }),
                s,
            ],
        });
    };
