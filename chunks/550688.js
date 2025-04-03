n.d(t, { Z: () => y }), n(266796);
var r = n(200651),
    s = n(120356),
    o = n.n(s),
    a = n(702319),
    i = n(144931),
    c = n(763283),
    l = n(944548),
    u = n(488701),
    d = n(303582),
    f = n(477839),
    p = n(388032),
    m = n(458430),
    g = n(733);
function b(e) {
    let { name: t, description: n, pointsDescription: s, points: o, cost: u, iconSrc: f, currentPoints: b, onPurchase: y } = e,
        h = 'string' == typeof t ? t : p.NW.format(t, { numPurchasing: 0 }),
        x = 'string' == typeof t ? t : p.NW.formatToPlainString(t, { numPurchasing: 0 });
    return (0, r.jsx)(l.Z, {
        borderColor: 'green',
        text: (0, r.jsx)(d.Z, {
            name: h,
            description: n,
            pointsDescription:
                0 !== o
                    ? p.NW.format(s, {
                          points: o,
                          grassIconHook: a.Z
                      })
                    : null
        }),
        'aria-label': x,
        children: (e) => {
            var t, n;
            return (0, r.jsxs)(
                i.Z,
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
                        onClick: y,
                        disabled: b < u,
                        className: m.item,
                        children: [
                            (0, r.jsx)('img', {
                                className: m.itemIcon,
                                src: f,
                                alt: ''
                            }),
                            (0, r.jsxs)('div', {
                                className: m.pointsInfo,
                                children: [
                                    (0, r.jsx)('img', {
                                        className: m.pointsIcon,
                                        src: g,
                                        alt: ''
                                    }),
                                    ' ',
                                    (0, r.jsx)(c.Z, {
                                        variant: 'text-md/medium',
                                        color: 'currentColor',
                                        children: u
                                    })
                                ]
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
function y(e) {
    let { className: t } = e;
    return (0, r.jsx)(u.Z, {
        className: o()(t, m.shop),
        purchasePriority: f.ne,
        PurchasableComponent: b,
        itemsShown: 4
    });
}
