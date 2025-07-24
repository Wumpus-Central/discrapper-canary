r.d(t, { Z: () => _ });
var n = r(255367),
    l = r(73800),
    i = r(979554),
    o = r(481060),
    a = r(906732),
    s = r(333867),
    c = r(626135),
    u = r(381585),
    d = r(884697),
    p = r(228624),
    f = r(410127),
    g = r(67409),
    h = r(981631),
    b = r(474936),
    m = r(388032);
let _ = (e) => {
    let { product: t, primary: r, selectedVariantIndex: _, returnRef: C, onSuccess: O, tooltipDelay: v } = e,
        { analyticsLocations: E } = (0, a.ZP)(),
        S = l.useRef(null),
        y = (0, p.hv)('CollectiblesShopGiftButton'),
        x = (0, u.sp)(),
        j = (0, f.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: m.intl.string(m.t['JCFN//']),
              delay: v,
              children: (e) => {
                  var l, a;
                  return (0, n.jsx)(
                      o.hU,
                      ((l = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      ((n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n));
                                  }));
                          }
                          return e;
                      })({}, e)),
                      (a = a =
                          {
                              'aria-label': m.intl.string(m.t['JCFN//']),
                              buttonRef: S,
                              variant: r ? 'primary' : 'secondary',
                              icon: o.OgN,
                              size: 'md',
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      c.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == x ? void 0 : x.pageSection,
                                          page_category: null == x ? void 0 : x.pageCategory,
                                          tile_type: i.Z[t.type],
                                          tile_position: String(null == x ? void 0 : x.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: j || 'home'
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, g.S)({
                                              product: t,
                                              selectedVariantIndex: _
                                          }),
                                          isGift: !0,
                                          giftingOrigin: b.Wt.SHOP_PAGE,
                                          analyticsLocations: E,
                                          returnRef: C,
                                          variantsReturnStyle: y,
                                          onClose:
                                              null != O
                                                  ? (e) => {
                                                        e && O();
                                                    }
                                                  : void 0
                                      }));
                              }
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      l)
                  );
              }
          });
};
