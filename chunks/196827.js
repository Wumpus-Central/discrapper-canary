"use strict";
n.d(t, { A: () => g, u: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(990078),
    a = n(397927),
    o = n(971630),
    d = n(694336),
    c = n(985018),
    u = n(591859);
let m = (e) => {
        let { value: t, isPercent: n } = e;
        if (null == t) return null;
        let { formattedValue: s, isPositive: r } = (0, o.TP)(t, n);
        return (0, i.jsxs)("div", {
            className: u.Rx,
            children: [
                (0, i.jsx)(d.A, { className: l()(u.gv, { [u.fk]: !r }) }),
                (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: u.ck,
                    children: c.intl.format(c.t.OTHOvZ, { value: s }),
                }),
            ],
        });
    },
    g = (e) => {
        let { label: t, sublabel: n, value: s, additionalContent: l, tooltip: o } = e;
        return (0, i.jsxs)("div", {
            className: u.kL,
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: u._A,
                            children: [
                                (0, i.jsx)(a.Text, { variant: "text-xs/medium", className: u.Pf, children: t }),
                                null != o &&
                                    (0, i.jsx)(r.m, {
                                        text: o,
                                        children: (0, i.jsx)(a.mir, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: u.F6,
                                        }),
                                    }),
                                null != n
                                    ? (0, i.jsx)(a.Text, { variant: "text-xs/normal", className: u.$B, children: n })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(a.Text, { className: u.Uq, variant: "text-sm/normal", children: s }),
                    ],
                }),
                l,
            ],
        });
    };
