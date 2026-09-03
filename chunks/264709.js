n.d(t, { i: () => s });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    o = n.n(l),
    i = n(374839);
let u = ["1", "2", "3", "4", "5", "6", "7"],
    s = a.memo(function (e) {
        let { size: t = 16, "aria-label": n, className: a, ref: l, color: s = "currentColor" } = e;
        return (0, r.jsx)("div", {
            ref: l,
            className: o()(i.wG, a),
            style: { "--custom-ai-loader-size": `${t}px`, color: "string" == typeof s ? s : s.css },
            role: null == n ? void 0 : "img",
            "aria-label": n,
            "aria-hidden": null == n,
            children: Array.from({ length: 3 }, (e, t) =>
                (0, r.jsx)(
                    "span",
                    {
                        className: i.NI,
                        children: (0, r.jsx)("span", {
                            className: i.u4,
                            children: u.map((e) => (0, r.jsx)("span", { className: i.Vq, children: e }, e)),
                        }),
                    },
                    t,
                ),
            ),
        });
    });
