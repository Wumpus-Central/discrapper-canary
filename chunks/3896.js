n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(456935),
    c = n(259580),
    u = n(981631),
    d = n(388032),
    m = n(296205);
function g(e) {
    let { guild: t } = e,
        l = t.verificationLevel,
        g = i.useMemo(() => (0, o.I9)(l), [l]);
    return (0, r.jsxs)(a.P3F, {
        onClick: () =>
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('72458').then(n.bind(n, 694278));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                        })({}, n)),
                        (l = l =
                            {
                                guild: t,
                                hideColors: !0
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i)
                    );
                };
            }),
        className: s()(m.simpleItemWrapper, m.clickable),
        children: [
            (0, r.jsxs)('div', {
                className: m.itemContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: d.intl.string(d.t.DpRdYG)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: d.intl.string(d.t.mA17eH)
                    }),
                    (0, r.jsx)('div', {
                        className: m.__invalid_pillRow,
                        children: (0, r.jsxs)(a.Text, {
                            variant: 'text-xs/medium',
                            color: 'interactive-normal',
                            className: m.valuePill,
                            children: [
                                l === u.sFg.VERY_HIGH
                                    ? (0, r.jsx)(a.AtH, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16
                                      })
                                    : (0, r.jsx)(a._XJ, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16
                                      }),
                                g
                            ]
                        })
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                height: 24,
                width: 24,
                direction: c.Z.Directions.RIGHT,
                className: m.caret
            })
        ]
    });
}
