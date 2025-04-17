n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    l = n(399606),
    o = n(481060),
    s = n(607070),
    c = n(430824),
    u = n(506071),
    d = n(267101),
    p = n(240864),
    m = n(57949),
    f = n(400916),
    h = n(388032);
function g(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        g = (0, l.e7)([p.Z], () => p.Z.getGuildProduct(n)),
        _ = (0, l.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        b = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        x = (0, u.n)();
    return (a()(null != _, 'guild cannot be null'), a()(null != g, 'guildProductListing cannot be null'), (0, d.SO)(_))
        ? (0, r.jsx)(o.ua7, {
              text: h.NW.string(h.t.sAJr9f),
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      o.zxk,
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
                      })({}, e)),
                      (n = n =
                          {
                              color: o.zxk.Colors.BRAND,
                              disabled: !0,
                              children: h.NW.string(h.t.xUi3BA)
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
          })
        : g.has_entitlement
          ? null != g.attachments
              ? (0, r.jsx)(f.Z, {
                    guildId: _.id,
                    productId: g.id
                })
              : (0, r.jsx)(o.zxk, {
                    color: o.zxk.Colors.PRIMARY,
                    disabled: !0,
                    children: h.NW.string(h.t.RcTOGB)
                })
          : (0, r.jsx)(o.gtL, {
                shineSize: o.gtL.ShineSizes.SMALL,
                pauseAnimation: b || !x,
                onClick: () =>
                    (0, m.z)({
                        guildProductListing: g,
                        guildId: _.id,
                        sourceAnalyticsLocations: i
                    }),
                children: h.NW.string(h.t.xUi3BA)
            });
}
