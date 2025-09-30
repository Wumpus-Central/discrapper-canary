n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(143941),
    s = n(277511),
    c = n(388032),
    u = n(624285);
function d(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: d } = e,
        p = async () => {
            try {
                await s.Z.removeSkuFromWishlist(n, t.skuId),
                    (0, a.showToast)(
                        (0, a.createToast)("", a.ToastType.CUSTOM, {
                            component: (0, r.jsx)(o.k, { message: c.intl.string(c.t.DSXOiI) }),
                        }),
                    );
            } catch (e) {
                (0, a.showToast)((0, a.createToast)(c.intl.string(c.t.F8FvU1), a.ToastType.FAILURE));
            }
        };
    return (0, r.jsx)(a.ua7, {
        text: c.intl.string(c.t.jTW019),
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                a.P3F,
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
                })({}, e)),
                (n = n =
                    {
                        onClick: p,
                        "aria-label": c.intl.string(c.t.jTW019),
                        className: l()(d, u.clickable),
                        children: (0, r.jsx)(a.XHJ, {
                            size: i,
                            className: u.icon,
                            color: a.TVs.colors.ICON_FEEDBACK_CRITICAL,
                        }),
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
                t),
            );
        },
    });
}
