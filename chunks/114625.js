n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(607070),
    a = n(600164),
    o = n(614277),
    c = n(388032),
    d = n(575651),
    u = n(436858),
    m = n(275554);
function g() {
    let e = (0, r.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, i.jsx)(o.O3, {
        children: (0, i.jsxs)(s.mzw, {
            align: a.Z.Align.CENTER,
            direction: a.Z.Direction.HORIZONTAL,
            className: d.container,
            children: [
                (0, i.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    align: 'center',
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: e ? m.Z : u.Z,
                            className: d.image
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            children: c.intl.string(c.t.n9Tp5O)
                        })
                    ]
                }),
                (0, i.jsx)(s.zxk, {
                    look: s.iLD.FILLED,
                    color: s.Ttl.BRAND,
                    onClick: () => {
                        (0, s.ZDy)(async () => {
                            let { default: e } = await n.e('74824').then(n.bind(n, 817357));
                            return (t) =>
                                (0, i.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({}, t)
                                );
                        });
                    },
                    children: c.intl.string(c.t.PDTjLC)
                })
            ]
        })
    });
}
