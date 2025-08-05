r.d(t, { Z: () => _ });
var n = r(255367),
    a = r(73800),
    l = r(979554),
    i = r(481060),
    o = r(906732),
    s = r(333867),
    c = r(626135),
    u = r(381585),
    d = r(884697),
    p = r(228624),
    b = r(410127),
    h = r(67409),
    f = r(981631),
    v = r(474936),
    m = r(388032);
let _ = (e) => {
    let { product: t, primary: r, selectedVariantIndex: _, returnRef: O, onSuccess: y, tooltipDelay: g } = e,
        { analyticsLocations: C } = (0, o.ZP)(),
        j = a.useRef(null),
        P = (0, p.hv)('CollectiblesShopGiftButton'),
        E = (0, u.sp)(),
        x = (0, b.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, n.jsx)(i.ua7, {
              text: m.intl.string(m.t['JCFN//']),
              delay: g,
              children: (e) => {
                  var a, o;
                  return (0, n.jsx)(
                      i.hU,
                      ((a = (function (e) {
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
                              'aria-label': m.intl.string(m.t['JCFN//']),
                              buttonRef: j,
                              variant: r ? 'primary' : 'secondary',
                              icon: i.OgN,
                              size: 'md',
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      c.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == E ? void 0 : E.pageSection,
                                          page_category: null == E ? void 0 : E.pageCategory,
                                          tile_type: l.Z[t.type],
                                          tile_position: String(null == E ? void 0 : E.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: x || 'home'
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, h.S)({
                                              product: t,
                                              selectedVariantIndex: _
                                          }),
                                          isGift: !0,
                                          giftingOrigin: v.Wt.SHOP_PAGE,
                                          analyticsLocations: C,
                                          returnRef: O,
                                          variantsReturnStyle: P,
                                          onClose:
                                              null != y
                                                  ? (e) => {
                                                        e && y();
                                                    }
                                                  : void 0
                                      }));
                              }
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      a)
                  );
              }
          });
};
