n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var a = n(481060),
    i = n(937615),
    o = n(884697),
    l = n(200615),
    c = n(981631),
    s = n(388032),
    u = n(58174);
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
function p(e) {
    let { product: t } = e,
        n = (0, o.ql)(t, c.tuJ.PREMIUM_TIER_2);
    if (null == n) return null;
    let p = (0, i.qr)(n.amount, n.currency);
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsx)(a.ua7, {
                text: s.intl.string(s.t.MPFyJy),
                "aria-label": s.intl.string(s.t.X3Ekj4),
                children: (e) => {
                    var t,
                        n,
                        i = d(
                            {},
                            (function (e) {
                                if (null == e) throw TypeError("Cannot destructure " + e);
                                return e;
                            })(e),
                        );
                    return (0, r.jsx)(
                        a.SrA,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                size: "md",
                                color: "currentColor",
                            },
                            i,
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
                        t),
                    );
                },
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-xs/medium",
                children: s.intl.format(s.t.Sv8iiY, {
                    price: p,
                    subscribeNowHook: (e) => (0, r.jsx)(l.F, { text: e }),
                }),
            }),
        ],
    });
}
