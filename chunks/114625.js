n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(600164),
    a = n(614277),
    o = n(388032),
    l = n(835211);
function c() {
    return (0, r.jsx)(a.O3, {
        children: (0, r.jsxs)(i.mzw, {
            align: s.Z.Align.CENTER,
            direction: s.Z.Direction.HORIZONTAL,
            className: l.container,
            children: [
                (0, r.jsxs)(i.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    align: 'center',
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: '',
                            className: l.image
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            children: o.NW.string(o.t.n9Tp5O)
                        })
                    ]
                }),
                (0, r.jsx)(i.zxk, {
                    look: i.iLD.FILLED,
                    color: i.Ttl.BRAND,
                    onClick: () => {
                        (0, i.ZDy)(async () => {
                            let { default: e } = await n.e('74824').then(n.bind(n, 817357));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
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
                                    })({}, t)
                                );
                        });
                    },
                    children: o.NW.string(o.t.PDTjLC)
                })
            ]
        })
    });
}
