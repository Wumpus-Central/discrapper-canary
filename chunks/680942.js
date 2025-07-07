n.d(t, { Z: () => C });
var r = n(255367),
    l = n(73800),
    i = n(979554),
    o = n(481060),
    a = n(906732),
    s = n(333867),
    c = n(626135),
    u = n(381585),
    d = n(884697),
    p = n(228624),
    g = n(410127),
    f = n(67409),
    h = n(981631),
    b = n(474936),
    m = n(388032),
    _ = n(846165);
let C = (e) => {
    let { product: t, selectedVariantIndex: n, returnRef: C, onSuccess: O, tooltipDelay: E, color: v = o.Ttl.BRAND } = e,
        { analyticsLocations: S } = (0, a.ZP)(),
        x = l.useRef(null),
        y = (0, p.hv)('CollectiblesShopGiftButton'),
        j = (0, u.sp)(),
        T = (0, g.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(o.ua7, {
              text: m.intl.string(m.t['JCFN//']),
              delay: E,
              children: (e) => {
                  var l, a;
                  return (0, r.jsx)(
                      o.zxk,
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
                      (a = a =
                          {
                              buttonRef: x,
                              className: _.giftButton,
                              color: v,
                              look: o.zxk.Looks.FILLED,
                              size: o.PhG.ICON,
                              innerClassName: _.giftButtonInner,
                              'aria-label': m.intl.string(m.t.PEjaCw),
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      c.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == j ? void 0 : j.pageSection,
                                          page_category: null == j ? void 0 : j.pageCategory,
                                          tile_type: i.Z[t.type],
                                          tile_position: String(null == j ? void 0 : j.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: T || 'home'
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, f.S)({
                                              product: t,
                                              selectedVariantIndex: n
                                          }),
                                          isGift: !0,
                                          giftingOrigin: b.Wt.SHOP_PAGE,
                                          analyticsLocations: S,
                                          returnRef: C,
                                          variantsReturnStyle: y,
                                          onClose:
                                              null != O
                                                  ? (e) => {
                                                        e && O();
                                                    }
                                                  : void 0
                                      }));
                              },
                              children: (0, r.jsx)(o.OgN, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      l)
                  );
              }
          });
};
