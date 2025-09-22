s.d(t, { Z: () => o }), s(388685), s(190126), s(368063), s(65234), s(111804), s(490233), s(97749);
var n = s(951288),
    r = s(647438),
    a = s(481060),
    i = s(763610),
    l = s(188764);
let o = function (e) {
    var t, s;
    let { assetKey: o, filters: c, initialValue: u, onFileChange: d, title: g } = e,
        [f, h] = r.useState(null),
        m = r.useRef(null);
    return (
        r.useEffect(
            () => () => {
                null != m.current && URL.revokeObjectURL(m.current);
            },
            [],
        ),
        (0, n.jsxs)(a.xJW, {
            children: [
                (0, n.jsx)(a.vwX, {
                    children: (0, n.jsxs)("div", {
                        className: l.headingWithTooltip,
                        children: [
                            g,
                            (0, n.jsx)(a.ua7, {
                                text: "Supported asset formats: ".concat(c.join(", ")),
                                children: (e) =>
                                    (0, n.jsx)(
                                        a.d3s,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var s = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(s);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(s).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                                        }),
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = s[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({ size: "xs" }, e),
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(i.Z, {
                    filename: null != (s = null != (t = null == f ? void 0 : f.name) ? t : u) ? s : "",
                    filters: [
                        {
                            name: g,
                            extensions: c,
                        },
                    ],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((h(null != e ? e : null), null == e)) return;
                        let t = URL.createObjectURL(e);
                        m.current = t;
                        let s = new URL(t);
                        s.searchParams.append("mimetype", e.type),
                            s.searchParams.append("name", e.name),
                            d(o, s.toString());
                    },
                }),
            ],
        })
    );
};
