n.d(t, { Z: () => i }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    s = n(647438),
    o = n(481060),
    a = n(763610);
let i = function (e) {
    var t, n;
    let { assetKey: i, filters: l, initialValue: c, onFileChange: d, title: u } = e,
        [p, m] = s.useState(null),
        g = s.useRef(null);
    return (
        s.useEffect(
            () => () => {
                null != g.current && URL.revokeObjectURL(g.current);
            },
            [],
        ),
        (0, r.jsx)(o.gNt, {
            label: u,
            description: "Supported asset formats: ".concat(l.join(", ")),
            children: (0, r.jsx)(a.Z, {
                filename: null != (n = null != (t = null == p ? void 0 : p.name) ? t : c) ? n : "",
                filters: [
                    {
                        name: u,
                        extensions: l,
                    },
                ],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                    if ((m(null != e ? e : null), null == e)) return;
                    let t = URL.createObjectURL(e);
                    g.current = t;
                    let n = new URL(t);
                    n.searchParams.append("mimetype", e.type),
                        n.searchParams.append("name", e.name),
                        d(i, n.toString());
                },
            }),
        })
    );
};
