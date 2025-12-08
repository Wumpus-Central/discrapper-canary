n.d(t, { Z: () => i }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(54381),
    s = n(473749),
    o = n(481060),
    a = n(763610);
let i = function (e) {
    var t, n;
    let { assetKey: i, filters: l, initialValue: c, onFileChange: u, title: d } = e,
        [p, m] = s.useState(null),
        f = s.useRef(null);
    return (
        s.useEffect(
            () => () => {
                null != f.current && URL.revokeObjectURL(f.current);
            },
            [],
        ),
        (0, r.jsx)(o.gNt, {
            label: d,
            description: "Supported asset formats: ".concat(l.join(", ")),
            children: (0, r.jsx)(a.Z, {
                filename: null != (n = null != (t = null == p ? void 0 : p.name) ? t : c) ? n : "",
                filters: [
                    {
                        name: d,
                        extensions: l,
                    },
                ],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                    if ((m(null != e ? e : null), null == e)) return;
                    let t = URL.createObjectURL(e);
                    f.current = t;
                    let n = new URL(t);
                    n.searchParams.append("mimetype", e.type),
                        n.searchParams.append("name", e.name),
                        u(i, n.toString());
                },
            }),
        })
    );
};
