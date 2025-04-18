n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(607070),
    l = n(600164),
    o = n(614277),
    c = n(388032),
    d = n(575651),
    u = n(436858),
    m = n(275554);
function g() {
    let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, r.jsx)(o.O3, {
        children: (0, r.jsxs)(s.mzw, {
            align: l.Z.Align.CENTER,
            direction: l.Z.Direction.HORIZONTAL,
            className: d.container,
            children: [
                (0, r.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    align: 'center',
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: e ? m.Z : u.Z,
                            className: d.image
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            children: c.NW.string(c.t.n9Tp5O)
                        })
                    ]
                }),
                (0, r.jsx)(s.zxk, {
                    look: s.iLD.FILLED,
                    color: s.Ttl.BRAND,
                    onClick: () => {
                        (0, s.ZDy)(async () => {
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
                    children: c.NW.string(c.t.PDTjLC)
                })
            ]
        })
    });
}
