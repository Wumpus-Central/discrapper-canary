n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    a = n(399606),
    o = n(481060),
    s = n(607070),
    c = n(430824),
    u = n(506071),
    d = n(267101),
    p = n(240864),
    m = n(57949),
    f = n(400916),
    _ = n(388032);
function h(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        h = (0, a.e7)([p.Z], () => p.Z.getGuildProduct(n)),
        g = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        b = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, u.n)();
    return (l()(null != g, 'guild cannot be null'), l()(null != h, 'guildProductListing cannot be null'), (0, d.SO)(g))
        ? (0, r.jsx)(o.ua7, {
              text: _.intl.string(_.t.sAJr9f),
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      o.zxk,
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
                              variant: 'primary',
                              text: _.intl.string(_.t.xUi3BA)
                          },
                          e
                      )),
                      (n = n = { disabled: !0 }),
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
          })
        : h.has_entitlement
          ? null != h.attachments
              ? (0, r.jsx)(f.Z, {
                    guildId: g.id,
                    productId: h.id
                })
              : (0, r.jsx)(o.zxk, {
                    variant: 'secondary',
                    text: _.intl.string(_.t.RcTOGB),
                    disabled: !0
                })
          : (0, r.jsx)(o.gtL, {
                shineSize: o.gtL.ShineSizes.SMALL,
                pauseAnimation: b || !E,
                onClick: () =>
                    (0, m.z)({
                        guildProductListing: h,
                        guildId: g.id,
                        sourceAnalyticsLocations: i
                    }),
                children: _.intl.string(_.t.xUi3BA)
            });
}
