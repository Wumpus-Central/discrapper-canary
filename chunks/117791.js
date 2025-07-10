n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(680018),
    s = n(481060),
    a = n(736519),
    l = n(648613);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = (e) => {
    var { subscriptionTier: t, premiumModalAnalyticsLocation: n, giftMessage: d, onClick: u } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['subscriptionTier', 'premiumModalAnalyticsLocation', 'giftMessage', 'onClick']);
    return (0, i.jsx)(
        l.Z,
        c(
            o(
                { isGift: !0 },
                {
                    subscriptionTier: t,
                    premiumModalAnalyticsLocation: n,
                    giftMessage: d,
                    onClick: u
                }
            ),
            {
                children: (e) => {
                    let { onClick: n } = e,
                        l = (0, a.L)(t);
                    return (0, i.jsx)(
                        r.z,
                        c(
                            o(
                                {
                                    onClick: n,
                                    icon: s.OgN
                                },
                                m
                            ),
                            { text: l }
                        )
                    );
                }
            }
        )
    );
};
