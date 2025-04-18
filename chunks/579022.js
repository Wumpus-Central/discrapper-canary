n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(388032),
    a = n(790773);
let o = Math.ceil(2 * Math.PI * 20),
    s = (e) => {
        let { total: t, used: n } = e,
            s = Math.max(0, Math.min(1, n / t)),
            c = ''.concat(Math.floor(100 * s), '%');
        return (0, r.jsx)(i.ua7, {
            text: l.NW.formatToPlainString(l.t['2eoRMj'], { used: c }),
            children: (e) => {
                var t, n;
                return (0, r.jsxs)(
                    'div',
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
                    })(
                        {
                            className: a.wrapper,
                            role: 'progressbar',
                            'aria-label': l.NW.formatToPlainString(l.t['2eoRMj'], { used: c })
                        },
                        e
                    )),
                    (n = n =
                        {
                            children: [
                                (0, r.jsxs)('svg', {
                                    viewBox: '25 25 50 50',
                                    className: a.svg,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, r.jsx)('circle', {
                                            className: a.background,
                                            cx: '50',
                                            cy: '50',
                                            r: 20
                                        }),
                                        (0, r.jsx)('circle', {
                                            className: a.foreground,
                                            cx: '50',
                                            cy: '50',
                                            r: 20,
                                            stroke: (function (e) {
                                                let t = Math.round(-85 * e + 199),
                                                    n = Math.round(-71 * e + 208),
                                                    r = Math.round(-22 * e + 240);
                                                return 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')');
                                            })(s),
                                            strokeDasharray: (function (e) {
                                                let t = Math.floor(o * e);
                                                return ''.concat(t, ', ').concat(o);
                                            })(s)
                                        })
                                    ]
                                }),
                                (0, r.jsx)('aside', {
                                    className: a.usageInfo,
                                    'aria-hidden': !0,
                                    children: c
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
    };
