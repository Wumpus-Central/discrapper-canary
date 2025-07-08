r.d(t, { Z: () => y });
var n = r(255367),
    i = r(73800),
    l = r(979554),
    o = r(481060),
    a = r(906732),
    s = r(333867),
    c = r(626135),
    u = r(381585),
    d = r(884697),
    p = r(228624),
    v = r(410127),
    b = r(67409),
    f = r(981631),
    m = r(474936),
    h = r(388032),
    g = r(846165);
let y = (e) => {
    let { product: t, selectedVariantIndex: r, returnRef: y, onSuccess: O, tooltipDelay: _, color: j = o.Ttl.BRAND } = e,
        { analyticsLocations: x } = (0, a.ZP)(),
        P = i.useRef(null),
        w = (0, p.hv)('CollectiblesShopGiftButton'),
        C = (0, u.sp)(),
        I = (0, v.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: h.intl.string(h.t['JCFN//']),
              delay: _,
              children: (e) => {
                  var i, a;
                  return (0, n.jsx)(
                      o.zxk,
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
                      (a = a =
                          {
                              buttonRef: P,
                              className: g.giftButton,
                              color: j,
                              look: o.zxk.Looks.FILLED,
                              size: o.PhG.ICON,
                              innerClassName: g.giftButtonInner,
                              'aria-label': h.intl.string(h.t.PEjaCw),
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      c.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == C ? void 0 : C.pageSection,
                                          page_category: null == C ? void 0 : C.pageCategory,
                                          tile_type: l.Z[t.type],
                                          tile_position: String(null == C ? void 0 : C.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: I || 'home'
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, b.S)({
                                              product: t,
                                              selectedVariantIndex: r
                                          }),
                                          isGift: !0,
                                          giftingOrigin: m.Wt.SHOP_PAGE,
                                          analyticsLocations: x,
                                          returnRef: y,
                                          variantsReturnStyle: w,
                                          onClose:
                                              null != O
                                                  ? (e) => {
                                                        e && O();
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
                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      i)
                  );
              }
          });
};
