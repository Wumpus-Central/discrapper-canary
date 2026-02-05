n.d(t, { A: () => r }), n(323874), n(14289), n(35956);
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(643374);
let r = function (e) {
    let { assetKey: t, filters: n, initialValue: r, onFileChange: o, title: d } = e,
        [c, u] = s.useState(null),
        m = s.useRef(null);
    return (
        s.useEffect(
            () => () => {
                null != m.current && URL.revokeObjectURL(m.current);
            },
            [],
        ),
        (0, a.jsx)(i.D0$, {
            label: d,
            description: `Supported asset formats: ${n.join(", ")}`,
            children: (0, a.jsx)(l.A, {
                filename: c?.name ?? r ?? "",
                filters: [{ name: d, extensions: n }],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                    if ((u(e ?? null), null == e)) return;
                    let n = URL.createObjectURL(e);
                    m.current = n;
                    let a = new URL(n);
                    a.searchParams.append("mimetype", e.type),
                        a.searchParams.append("name", e.name),
                        o(t, a.toString());
                },
            }),
        })
    );
};
