n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(985018),
    a = n(359774);
let s = Math.ceil(2 * Math.PI * 20),
    o = (e) => {
        let t,
            n,
            o,
            c,
            { total: u, used: d } = e,
            p = Math.max(0, Math.min(1, d / u)),
            f = "".concat(Math.floor(100 * p), "%");
        return (0, r.jsx)(i.m, {
            text: l.intl.formatToPlainString(l.t["2eoRMh"], { used: f }),
            children: (0, r.jsxs)("div", {
                className: a.iE,
                role: "progressbar",
                "aria-label": l.intl.formatToPlainString(l.t["2eoRMh"], { used: f }),
                children: [
                    (0, r.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: a.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)("circle", {
                                className: a.Tp,
                                cx: "50",
                                cy: "50",
                                r: 20,
                            }),
                            (0, r.jsx)("circle", {
                                className: a.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((t = Math.round(-85 * p + 199)),
                                    (n = Math.round(-71 * p + 208)),
                                    (o = Math.round(-22 * p + 240)),
                                    "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")")),
                                strokeDasharray: ((c = Math.floor(s * p)), "".concat(c, ", ").concat(s)),
                            }),
                        ],
                    }),
                    (0, r.jsx)("aside", {
                        className: a.Y3,
                        "aria-hidden": !0,
                        children: f,
                    }),
                ],
            }),
        });
    };
