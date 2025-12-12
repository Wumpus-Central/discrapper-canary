n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(28664),
    l = n(388032),
    a = n(803412);
let s = Math.ceil(2 * Math.PI * 20),
    o = (e) => {
        let { total: t, used: n } = e,
            o = Math.max(0, Math.min(1, n / t)),
            c = "".concat(Math.floor(100 * o), "%");
        return (0, r.jsx)(i.u, {
            text: l.intl.formatToPlainString(l.t["2eoRMh"], { used: c }),
            children: (0, r.jsxs)("div", {
                className: a.wrapper,
                role: "progressbar",
                "aria-label": l.intl.formatToPlainString(l.t["2eoRMh"], { used: c }),
                children: [
                    (0, r.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: a.svg,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)("circle", {
                                className: a.background,
                                cx: "50",
                                cy: "50",
                                r: 20,
                            }),
                            (0, r.jsx)("circle", {
                                className: a.foreground,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke: (function (e) {
                                    let t = Math.round(-85 * e + 199),
                                        n = Math.round(-71 * e + 208),
                                        r = Math.round(-22 * e + 240);
                                    return "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")");
                                })(o),
                                strokeDasharray: (function (e) {
                                    let t = Math.floor(s * e);
                                    return "".concat(t, ", ").concat(s);
                                })(o),
                            }),
                        ],
                    }),
                    (0, r.jsx)("aside", {
                        className: a.usageInfo,
                        "aria-hidden": !0,
                        children: c,
                    }),
                ],
            }),
        });
    };
