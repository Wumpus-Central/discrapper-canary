n.d(t, { Z: () => O });
var r = n(255367),
    l = n(73800),
    o = n(979554),
    i = n(755721),
    a = n(481060),
    s = n(906732),
    c = n(333867),
    u = n(626135),
    d = n(381585),
    p = n(884697),
    g = n(228624),
    f = n(410127),
    h = n(67409),
    b = n(981631),
    m = n(474936),
    _ = n(388032),
    C = n(846165);
let O = (e) => {
    let { product: t, selectedVariantIndex: n, returnRef: O, onSuccess: v, tooltipDelay: E, color: S = i.Tt.BRAND } = e,
        { analyticsLocations: x } = (0, s.ZP)(),
        y = l.useRef(null),
        j = (0, g.hv)('CollectiblesShopGiftButton'),
        T = (0, d.sp)(),
        P = (0, f.Z)();
    return (0, p.x6)(t)
        ? null
        : (0, r.jsx)(a.ua7, {
              text: _.intl.string(_.t['JCFN//']),
              delay: E,
              children: (e) => {
                  var l, s;
                  return (0, r.jsx)(
                      i.zx,
                      ((l = (function (e) {
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
                      })({}, e)),
                      (s = s =
                          {
                              buttonRef: y,
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
                                              selectedVariantIndex: n
                                          }),
                                          isGift: !0,
                                          giftingOrigin: m.Wt.SHOP_PAGE,
                                          analyticsLocations: x,
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
                              children: (0, r.jsx)(a.OgN, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      l)
                  );
              }
          });
};
