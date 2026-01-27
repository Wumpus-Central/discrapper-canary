n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(732955),
    l = n(397927),
    s = n(194509),
    a = n(783420);

function o(e) {
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
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = (e) => {
    let {
            subscriptionTier: t,
            premiumModalAnalyticsLocation: n,
            giftMessage: d,
            onClick: u,
            buttonTextOverride: _,
        } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["subscriptionTier", "premiumModalAnalyticsLocation", "giftMessage", "onClick", "buttonTextOverride"]);
    return (0, r.jsx)(
        a.A,
        c(
            o(
                {
                    isGift: !0,
                },
                {
                    subscriptionTier: t,
                    premiumModalAnalyticsLocation: n,
                    giftMessage: d,
                    onClick: u,
                },
            ),
            {
                children: (e) => {
                    let { onClick: n } = e,
                        a = null != _ ? _ : (0, s.U)(t);
                    return (0, r.jsx)(
                        i.$nd,
                        c(
                            o(
                                {
                                    onClick: n,
                                    icon: l.okO,
                                },
                                p,
                            ),
                            {
                                text: a,
                            },
                        ),
                    );
                },
            },
        ),
    );
};
