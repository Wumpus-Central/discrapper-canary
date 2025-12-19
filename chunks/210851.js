n.d(t, { Z: () => s }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(763610);
let s = function (e) {
    var t, n;
    let { assetKey: s, filters: o, initialValue: c, onFileChange: d, title: u } = e,
        [m, p] = r.useState(null),
        h = r.useRef(null);
    return (
        r.useEffect(
            () => () => {
                null != h.current && URL.revokeObjectURL(h.current);
            },
            [],
        ),
        (0, a.jsx)(i.gNt, {
            label: u,
            description: "Supported asset formats: ".concat(o.join(", ")),
            children: (0, a.jsx)(l.Z, {
                filename: null != (n = null != (t = null == m ? void 0 : m.name) ? t : c) ? n : "",
                filters: [
                    {
                        name: u,
                        extensions: o,
                    },
                ],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                    if ((p(null != e ? e : null), null == e)) return;
                    let t = URL.createObjectURL(e);
                    h.current = t;
                    let n = new URL(t);
                    n.searchParams.append("mimetype", e.type),
                        n.searchParams.append("name", e.name),
                        d(s, n.toString());
                },
            }),
        })
    );
};
