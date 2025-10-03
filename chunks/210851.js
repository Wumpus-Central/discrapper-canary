n.d(t, { Z: () => c }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    s = n(647438),
    o = n(28664),
    a = n(481060),
    i = n(763610),
    l = n(188764);
let c = function (e) {
    var t, n;
    let { assetKey: c, filters: d, initialValue: u, onFileChange: p, title: m } = e,
        [g, f] = s.useState(null),
        h = s.useRef(null);
    return (
        s.useEffect(
            () => () => {
                null != h.current && URL.revokeObjectURL(h.current);
            },
            [],
        ),
        (0, r.jsxs)(a.xJW, {
            children: [
                (0, r.jsx)(a.vwX, {
                    children: (0, r.jsxs)("div", {
                        className: l.headingWithTooltip,
                        children: [
                            m,
                            (0, r.jsx)(o.u, {
                                text: "Supported asset formats: ".concat(d.join(", ")),
                                children: (0, r.jsx)(a.d3s, { size: "xs" }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(i.Z, {
                    filename: null != (n = null != (t = null == g ? void 0 : g.name) ? t : u) ? n : "",
                    filters: [
                        {
                            name: m,
                            extensions: d,
                        },
                    ],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((f(null != e ? e : null), null == e)) return;
                        let t = URL.createObjectURL(e);
                        h.current = t;
                        let n = new URL(t);
                        n.searchParams.append("mimetype", e.type),
                            n.searchParams.append("name", e.name),
                            p(c, n.toString());
                    },
                }),
            ],
        })
    );
};
