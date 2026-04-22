a.d(t, { A: () => r }), a(323874), a(14289), a(35956);
var n = a(627968),
    l = a(64700),
    i = a(452027),
    s = a(643374);
let r = function (e) {
    let { assetKey: t, filters: a, initialValue: r, onFileChange: o, title: d } = e,
        [c, u] = l.useState(null),
        m = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != m.current && URL.revokeObjectURL(m.current);
            },
            [],
        ),
        (0, n.jsx)(i.D, {
            label: d,
            description: `Supported asset formats: ${a.join(", ")}`,
            children: (0, n.jsx)(s.A, {
                filename: c?.name ?? r ?? "",
                filters: [{ name: d, extensions: a }],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                    if ((u(e ?? null), null == e)) return;
                    let a = URL.createObjectURL(e);
                    m.current = a;
                    let n = new URL(a);
                    n.searchParams.append("mimetype", e.type),
                        n.searchParams.append("name", e.name),
                        o(t, n.toString());
                },
            }),
        })
    );
};
