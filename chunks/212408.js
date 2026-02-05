n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(990078),
    a = n(985018),
    l = n(359774);
let s = Math.ceil(2 * Math.PI * 20),
    o = (e) => {
        let t,
            n,
            o,
            d,
            { total: c, used: u } = e,
            A = Math.max(0, Math.min(1, u / c)),
            h = `${Math.floor(100 * A)}%`;
        return (0, i.jsx)(r.m, {
            text: a.intl.formatToPlainString(a.t["2eoRMh"], { used: h }),
            children: (0, i.jsxs)("div", {
                className: l.iE,
                role: "progressbar",
                "aria-label": a.intl.formatToPlainString(a.t["2eoRMh"], { used: h }),
                children: [
                    (0, i.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: l.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)("circle", { className: l.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, i.jsx)("circle", {
                                className: l.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((t = Math.round(-85 * A + 199)),
                                    (n = Math.round(-71 * A + 208)),
                                    (o = Math.round(-22 * A + 240)),
                                    `rgb(${t}, ${n}, ${o})`),
                                strokeDasharray: ((d = Math.floor(s * A)), `${d}, ${s}`),
                            }),
                        ],
                    }),
                    (0, i.jsx)("aside", { className: l.Y3, "aria-hidden": !0, children: h }),
                ],
            }),
        });
    };
