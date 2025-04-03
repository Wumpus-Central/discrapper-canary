n.d(t, { Z: () => l }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    o = n(192379),
    s = n(481060),
    a = n(763610),
    i = n(409667);
let l = function (e) {
    var t, n;
    let { assetKey: l, filters: c, initialValue: d, onFileChange: u, title: p } = e,
        [m, f] = o.useState(null),
        g = o.useRef(null);
    return (
        o.useEffect(
            () => () => {
                null != g.current && URL.revokeObjectURL(g.current);
            },
            []
        ),
        (0, r.jsxs)(s.xJW, {
            children: [
                (0, r.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    children: (0, r.jsxs)('div', {
                        className: i.headingWithTooltip,
                        children: [
                            p,
                            (0, r.jsx)(s.ua7, {
                                text: 'Supported asset formats: '.concat(c.join(', ')),
                                children: (e) =>
                                    (0, r.jsx)(
                                        s.d3s,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({ size: 'xs' }, e)
                                    )
                            })
                        ]
                    })
                }),
                (0, r.jsx)(a.Z, {
                    filename: null != (n = null != (t = null == m ? void 0 : m.name) ? t : d) ? n : '',
                    filters: [
                        {
                            name: p,
                            extensions: c
                        }
                    ],
                    buttonText: 'Browse',
                    placeholder: 'Select an asset',
                    onFileSelect: function (e) {
                        if ((f(null != e ? e : null), null == e)) return;
                        let t = URL.createObjectURL(e);
                        g.current = t;
                        let n = new URL(t);
                        n.searchParams.append('mimetype', e.type), n.searchParams.append('name', e.name), u(l, n.toString());
                    }
                })
            ]
        })
    );
};
