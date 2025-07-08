n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(979554),
    a = n(481060),
    o = n(906732),
    s = n(333867),
    c = n(626135),
    u = n(381585),
    d = n(884697),
    p = n(228624),
    v = n(410127),
    f = n(67409),
    m = n(981631),
    b = n(474936),
    h = n(388032),
    g = n(846165);
let _ = (e) => {
    let { product: t, selectedVariantIndex: n, returnRef: _, onSuccess: y, tooltipDelay: O, color: x = a.Ttl.BRAND } = e,
        { analyticsLocations: j } = (0, o.ZP)(),
        P = i.useRef(null),
        w = (0, p.hv)('CollectiblesShopGiftButton'),
        C = (0, u.sp)(),
        I = (0, v.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(a.ua7, {
              text: h.intl.string(h.t['JCFN//']),
              delay: O,
              children: (e) => {
                  var i, o;
                  return (0, r.jsx)(
                      a.zxk,
                      ((i = (function (e) {
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
                      (o = o =
                          {
                              buttonRef: P,
                              className: g.giftButton,
                              color: x,
                              look: a.zxk.Looks.FILLED,
                              size: a.PhG.ICON,
                              innerClassName: g.giftButtonInner,
                              'aria-label': h.intl.string(h.t.PEjaCw),
                              onClick: (e) => {
                                  (e.stopPropagation(),
                                      c.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                          skuId: (0, f.S)({
                                              product: t,
                                              selectedVariantIndex: n
                                          }),
                                          isGift: !0,
                                          giftingOrigin: b.Wt.SHOP_PAGE,
                                          analyticsLocations: j,
                                          returnRef: _,
                                          variantsReturnStyle: w,
                                          onClose:
                                              null != y
                                                  ? (e) => {
                                                        e && y();
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
                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      i)
                  );
              }
          });
};
