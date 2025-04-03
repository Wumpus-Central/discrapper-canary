n.d(t, { Z: () => x }), n(266796);
var r = n(200651),
    s = n(120356),
    o = n.n(s),
    a = n(442837),
    i = n(120421),
    c = n(702319),
    l = n(144931),
    u = n(763283),
    d = n(944548),
    f = n(488701),
    p = n(303582),
    m = n(477839),
    g = n(388032),
    b = n(67190),
    y = n(733);
function h(e) {
    let { name: t, description: n, pointsDescription: s, points: o, cost: f, iconSrc: m, currentPoints: h, onPurchase: x, itemId: N, upgradeId: v } = e,
        O = (0, a.e7)([i.Z], () => (null != v ? i.Z.getNumPurchasesForItemUpgrade(N, v) : 0)) + 1,
        j = 'string' == typeof t ? t : g.NW.format(t, { numPurchasing: O }),
        Z = 'string' == typeof t ? t : g.NW.formatToPlainString(t, { numPurchasing: O });
    return (0, r.jsx)(d.Z, {
        text: (0, r.jsx)(p.Z, {
            name: j,
            description: n,
            pointsDescription:
                0 !== o
                    ? g.NW.format(s, {
                          points: o,
                          grassIconHook: c.Z
                      })
                    : null
        }),
        borderColor: 'green',
        'aria-label': Z,
        children: (e) => {
            var t, n;
            return (0, r.jsxs)(
                l.Z,
                ((t = (function (e) {
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
                })({}, e)),
                (n = n =
                    {
                        onClick: x,
                        disabled: h < f,
                        className: b.upgrade,
                        children: [
                            (0, r.jsx)('img', {
                                className: b.upgradeIcon,
                                src: m,
                                alt: ''
                            }),
                            (0, r.jsx)('img', {
                                className: b.pointsIcon,
                                src: y,
                                alt: ''
                            }),
                            (0, r.jsx)(u.Z, {
                                variant: 'text-md/medium',
                                color: 'currentColor',
                                children: f
                            })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
    });
}
function x(e) {
    let { className: t } = e;
    return (0, r.jsx)(f.Z, {
        className: o()(t, b.shop),
        purchasePriority: m.h0,
        PurchasableComponent: h
    });
}
