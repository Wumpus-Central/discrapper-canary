n.d(t, { Z: () => u }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(763610),
    s = n(99542);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = function (e) {
    var t, n;
    let { assetKey: l, filters: u, initialValue: d, onFileChange: f, title: _ } = e,
        [p, h] = i.useState(null),
        m = i.useRef(null);
    function g(e) {
        if ((h(null != e ? e : null), null == e)) return;
        let t = URL.createObjectURL(e);
        m.current = t;
        let n = new URL(t);
        n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), f(l, n.toString());
    }
    return (
        i.useEffect(
            () => () => {
                null != m.current && URL.revokeObjectURL(m.current);
            },
            [],
        ),
        (0, r.jsxs)(a.xJW, {
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H5,
                    children: (0, r.jsxs)("div", {
                        className: s.headingWithTooltip,
                        children: [
                            _,
                            (0, r.jsx)(a.ua7, {
                                text: "Supported asset formats: ".concat(u.join(", ")),
                                children: (e) => (0, r.jsx)(a.d3s, c({ size: "xs" }, e)),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(o.Z, {
                    filename: null != (n = null != (t = null == p ? void 0 : p.name) ? t : d) ? n : "",
                    filters: [
                        {
                            name: _,
                            extensions: u,
                        },
                    ],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: g,
                }),
            ],
        })
    );
};
