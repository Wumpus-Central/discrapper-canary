n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(906732),
    s = n(277511),
    d = n(872269),
    c = n(228168),
    C = n(388032),
    u = n(747615);
function p(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: p } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        h = async () => {
            try {
                await s.Z.removeSkuFromWishlist(n, t.skuId, _);
            } catch (e) {
                (0, d.L$)(c.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(l.ua7, {
        "data-migration-pending": !0,
        text: C.intl.string(C.t.jTW019),
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                l.P3F,
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
                        onClick: h,
                        "aria-label": C.intl.string(C.t.jTW019),
                        className: a()(p, u.clickable),
                        children: (0, r.jsx)(l.XHJ, {
                            size: i,
                            className: u.icon,
                            color: l.TVs.colors.ICON_FEEDBACK_CRITICAL,
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
