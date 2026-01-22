n.d(t, {
    A: () => s,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(643374);
let s = function (e) {
    var t, n;
    let { assetKey: s, filters: o, initialValue: c, onFileChange: d, title: u } = e,
        [m, p] = l.useState(null),
        h = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != h.current && URL.revokeObjectURL(h.current);
            },
            [],
        ),
        (0, a.jsx)(i.D0$, {
            label: u,
            description: "Supported asset formats: ".concat(o.join(", ")),
            children: (0, a.jsx)(r.A, {
                filename: null != (t = null != (n = null == m ? void 0 : m.name) ? n : c) ? t : "",
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
