n.d(t, {
    A: () => g,
    u: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(990078),
    a = n(397927),
    c = n(971630),
    o = n(694336),
    d = n(985018),
    u = n(591859);
let f = (e) => {
        let { value: t, isPercent: n } = e;
        if (null == t) return null;
        let { formattedValue: i, isPositive: s } = (0, c.TP)(t, n);
        return (0, r.jsxs)("div", {
            className: u.Rx,
            children: [
                (0, r.jsx)(o.A, { className: l()(u.gv, { [u.fk]: !s }) }),
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: u.ck,
                    children: d.intl.format(d.t.OTHOvZ, { value: i }),
                }),
            ],
        });
    },
    g = (e) => {
        let { label: t, sublabel: n, value: i, additionalContent: l, tooltip: c } = e;
        return (0, r.jsxs)("div", {
            className: u.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: u._A,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    className: u.Pf,
                                    children: t,
                                }),
                                null != c &&
                                    (0, r.jsx)(s.m, {
                                        text: c,
                                        children: (0, r.jsx)(a.mir, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: u.F6,
                                        }),
                                    }),
                                null != n
                                    ? (0, r.jsx)(a.Text, {
                                          variant: "text-xs/normal",
                                          className: u.$B,
                                          children: n,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(a.Text, {
                            className: u.Uq,
                            variant: "text-sm/normal",
                            children: i,
                        }),
                    ],
                }),
                l,
            ],
        });
    };
