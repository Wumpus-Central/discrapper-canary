n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(456935),
    c = n(259580),
    d = n(981631),
    u = n(388032),
    m = n(296205);
function g(e) {
    let { guild: t } = e,
        s = t.verificationLevel,
        g = i.useMemo(() => (0, o.I9)(s), [s]);
    return (0, r.jsxs)(l.P3F, {
        onClick: () =>
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('72458').then(n.bind(n, 694278));
                return (n) => {
                    var i, s;
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
                        (s = s =
                            {
                                guild: t,
                                hideColors: !0
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        i)
                    );
                };
            }),
        className: a()(m.simpleItemWrapper, m.clickable),
        children: [
            (0, r.jsxs)('div', {
                className: m.itemContent,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: u.NW.string(u.t.DpRdYG)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: u.NW.string(u.t.mA17eH)
                    }),
                    (0, r.jsx)('div', {
                        className: m.__invalid_pillRow,
                        children: (0, r.jsxs)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'interactive-normal',
                            className: m.valuePill,
                            children: [
                                s === d.sFg.VERY_HIGH
                                    ? (0, r.jsx)(l.AtH, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16
                                      })
                                    : (0, r.jsx)(l._XJ, {
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
