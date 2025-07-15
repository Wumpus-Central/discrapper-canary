r.d(t, { Z: () => O });
var n = r(255367),
    l = r(73800),
    o = r(979554),
    i = r(755721),
    a = r(481060),
    s = r(906732),
    c = r(333867),
    u = r(626135),
    d = r(381585),
    p = r(884697),
    g = r(228624),
    f = r(410127),
    h = r(67409),
    b = r(981631),
    m = r(474936),
    _ = r(388032),
    C = r(846165);
let O = (e) => {
    let { product: t, selectedVariantIndex: r, returnRef: O, onSuccess: v, tooltipDelay: E, color: S = i.Tt.BRAND } = e,
        { analyticsLocations: y } = (0, s.ZP)(),
        x = l.useRef(null),
        j = (0, g.hv)('CollectiblesShopGiftButton'),
        T = (0, d.sp)(),
        P = (0, f.Z)();
    return (0, p.x6)(t)
        ? null
        : (0, n.jsx)(a.ua7, {
              text: _.intl.string(_.t['JCFN//']),
              delay: E,
              children: (e) => {
                  var l, s;
                  return (0, n.jsx)(
                      i.zx,
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
                              className: C.giftButton,
                              color: S,
                              look: i.zx.Looks.FILLED,
                              size: i.Ph.ICON,
                              innerClassName: C.giftButtonInner,
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == T ? void 0 : T.pageSection,
                                          page_category: null == T ? void 0 : T.pageCategory,
                                          tile_type: o.Z[t.type],
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
                                          returnRef: O,
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
