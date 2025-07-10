r.d(t, { Z: () => O });
var n = r(255367),
    i = r(73800),
    l = r(979554),
    a = r(755721),
    o = r(481060),
    s = r(906732),
    c = r(333867),
    u = r(626135),
    d = r(381585),
    p = r(884697),
    v = r(228624),
    b = r(410127),
    f = r(67409),
    m = r(981631),
    h = r(474936),
    g = r(388032),
    y = r(846165);
let O = (e) => {
    let { product: t, selectedVariantIndex: r, returnRef: O, onSuccess: j, tooltipDelay: _, color: x = a.Tt.BRAND } = e,
        { analyticsLocations: P } = (0, s.ZP)(),
        w = i.useRef(null),
        C = (0, v.hv)('CollectiblesShopGiftButton'),
        S = (0, d.sp)(),
        I = (0, b.Z)();
    return (0, p.x6)(t)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: g.intl.string(g.t['JCFN//']),
              delay: _,
              children: (e) => {
                  var i, s;
                  return (0, n.jsx)(
                      a.zx,
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
                      (s = s =
                          {
                              buttonRef: w,
                              className: y.giftButton,
                              color: x,
                              look: a.zx.Looks.FILLED,
                              size: a.Ph.ICON,
                              innerClassName: y.giftButtonInner,
                              'aria-label': g.intl.string(g.t.PEjaCw),
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == S ? void 0 : S.pageSection,
                                          page_category: null == S ? void 0 : S.pageCategory,
                                          tile_type: l.Z[t.type],
                                          tile_position: String(null == S ? void 0 : S.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: I || 'home'
                                      }),
                                      (0, c.Z)({
                                          skuId: (0, f.S)({
                                              product: t,
                                              selectedVariantIndex: r
                                          }),
                                          isGift: !0,
                                          giftingOrigin: h.Wt.SHOP_PAGE,
                                          analyticsLocations: P,
                                          returnRef: O,
                                          variantsReturnStyle: C,
                                          onClose:
                                              null != j
                                                  ? (e) => {
                                                        e && j();
                                                    }
                                                  : void 0
                                      }));
                              },
                              children: (0, n.jsx)(o.OgN, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      i)
                  );
              }
          });
};
