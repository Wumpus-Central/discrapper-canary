n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(277511),
    s = n(872269),
    c = n(228168),
    u = n(388032),
    d = n(747615);
function p(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: p } = e,
        f = async () => {
            try {
                await o.Z.removeSkuFromWishlist(n, t.skuId), (0, s.L$)(c.qb.WISHLIST_ITEM_REMOVED);
            } catch (e) {
                (0, s.L$)(c.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(a.ua7, {
        text: u.intl.string(u.t.jTW019),
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
                        onClick: f,
                        "aria-label": u.intl.string(u.t.jTW019),
                        className: l()(p, d.clickable),
                        children: (0, r.jsx)(a.XHJ, {
                            size: i,
                            className: d.icon,
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
