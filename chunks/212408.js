"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(985018),
    r = n(834911);
let a = Math.ceil(2 * Math.PI * 20),
    o = (e) => {
        let t,
            n,
            o,
            c,
            { total: d, used: h } = e,
            p = Math.max(0, Math.min(1, h / d)),
            u = `${Math.floor(100 * p)}%`;
        return (0, i.jsx)(s.m, {
            text: l.intl.formatToPlainString(l.t["2eoRMh"], { used: u }),
            children: (0, i.jsxs)("div", {
                className: r.iE,
                role: "progressbar",
                "aria-label": l.intl.formatToPlainString(l.t["2eoRMh"], { used: u }),
                children: [
                    (0, i.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: r.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)("circle", { className: r.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, i.jsx)("circle", {
                                className: r.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((t = Math.round(-85 * p + 199)),
                                    (n = Math.round(-71 * p + 208)),
                                    (o = Math.round(-22 * p + 240)),
                                    `rgb(${t}, ${n}, ${o})`),
                                strokeDasharray: ((c = Math.floor(a * p)), `${c}, ${a}`),
                            }),
                        ],
                    }),
                    (0, i.jsx)("aside", { className: r.Y3, "aria-hidden": !0, children: u }),
                ],
            }),
        });
    };
