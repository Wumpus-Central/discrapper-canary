r.d(t, { Z: () => C });
var n = r(255367),
    l = r(73800),
    i = r(979554),
    o = r(755721),
    a = r(481060),
    s = r(906732),
    c = r(333867),
    u = r(626135),
    d = r(381585),
    p = r(884697),
    f = r(228624),
    g = r(410127),
    h = r(67409),
    b = r(981631),
    m = r(474936),
    _ = r(388032),
    O = r(846165);
let C = (e) => {
    let { product: t, selectedVariantIndex: r, returnRef: C, onSuccess: v, tooltipDelay: E, color: S = o.Tt.BRAND } = e,
        { analyticsLocations: y } = (0, s.ZP)(),
        x = l.useRef(null),
        j = (0, f.hv)('CollectiblesShopGiftButton'),
        T = (0, d.sp)(),
        P = (0, g.Z)();
    return (0, p.x6)(t)
        ? null
        : (0, n.jsx)(a.ua7, {
              text: _.intl.string(_.t['JCFN//']),
              delay: E,
              children: (e) => {
                  var l, s;
                  return (0, n.jsx)(
                      o.zx,
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
                      (s = s =
                          {
                              buttonRef: x,
                              className: O.giftButton,
                              color: S,
                              look: o.zx.Looks.FILLED,
                              size: o.Ph.ICON,
                              innerClassName: O.giftButtonInner,
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == T ? void 0 : T.pageSection,
                                          page_category: null == T ? void 0 : T.pageCategory,
                                          tile_type: i.Z[t.type],
                                          tile_position: String(null == T ? void 0 : T.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: P || 'home'
                                      }),
                                      (0, c.Z)({
                                          skuId: (0, h.S)({
                                              product: t,
                                              selectedVariantIndex: r
                                          }),
                                          isGift: !0,
                                          giftingOrigin: m.Wt.SHOP_PAGE,
                                          analyticsLocations: y,
                                          returnRef: C,
                                          variantsReturnStyle: j,
                                          onClose:
                                              null != v
                                                  ? (e) => {
                                                        e && v();
                                                    }
                                                  : void 0
                                      }));
                              },
                              children: (0, n.jsx)(a.OgN, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      l)
                  );
              }
          });
};
