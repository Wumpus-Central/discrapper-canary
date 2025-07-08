n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(937615),
    a = n(884697),
    o = n(200615),
    s = n(981631),
    c = n(388032),
    u = n(699417);
function d() {
    return (d =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function m(e) {
    let { product: t } = e,
        n = (0, a.ql)(t, s.tuJ.PREMIUM_TIER_2);
    if (null == n) return null;
    let m = (0, l.qr)(n.amount, n.currency);
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(i.ua7, {
                text: c.intl.string(c.t.MPFyJy),
                'aria-label': c.intl.string(c.t.X3Ekj4),
                children: (e) => {
                    var t,
                        n,
                        l = d(
                            {},
                            (function (e) {
                                if (null == e) throw TypeError('Cannot destructure ' + e);
                                return e;
                            })(e)
                        );
                    return (0, r.jsx)(
                        i.SrA,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })(
                            {
                                size: 'md',
                                color: 'currentColor'
                            },
                            l
                        )),
                        (n = n = { className: u.nitroIcon }),
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
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/medium',
                children: c.intl.format(c.t.Sv8iiY, {
                    price: m,
                    subscribeNowHook: (e) => (0, r.jsx)(o.F, { text: e })
                })
            })
        ]
    });
}
