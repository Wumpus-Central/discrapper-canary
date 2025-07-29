r.d(t, { Z: () => y });
var n = r(255367),
    i = r(73800),
    l = r(979554),
    a = r(481060),
    o = r(906732),
    s = r(333867),
    c = r(626135),
    u = r(381585),
    d = r(884697),
    p = r(228624),
    v = r(410127),
    b = r(67409),
    f = r(981631),
    m = r(474936),
    h = r(388032);
let y = (e) => {
    let { product: t, primary: r, selectedVariantIndex: y, returnRef: g, onSuccess: O, tooltipDelay: j } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        x = i.useRef(null),
        P = (0, p.hv)('CollectiblesShopGiftButton'),
        w = (0, u.sp)(),
        C = (0, v.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, n.jsx)(a.ua7, {
              text: h.intl.string(h.t['JCFN//']),
              delay: j,
              children: (e) => {
                  var i, o;
                  return (0, n.jsx)(
                      a.hU,
                      ((i = (function (e) {
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
                      (o = o =
                          {
                              'aria-label': h.intl.string(h.t['JCFN//']),
                              buttonRef: x,
                              variant: r ? 'primary' : 'secondary',
                              icon: a.OgN,
                              size: 'md',
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      c.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == w ? void 0 : w.pageSection,
                                          page_category: null == w ? void 0 : w.pageCategory,
                                          tile_type: l.Z[t.type],
                                          tile_position: String(null == w ? void 0 : w.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: C || 'home'
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, b.S)({
                                              product: t,
                                              selectedVariantIndex: y
                                          }),
                                          isGift: !0,
                                          giftingOrigin: m.Wt.SHOP_PAGE,
                                          analyticsLocations: _,
                                          returnRef: g,
                                          variantsReturnStyle: P,
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
                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      i)
                  );
              }
          });
};
