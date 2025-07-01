r.d(t, { Z: () => _ });
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
    f = r(67409),
    m = r(981631),
    b = r(474936),
    h = r(388032),
    g = r(846165);
let _ = (e) => {
    let { product: t, selectedVariantIndex: r, returnRef: _, onSuccess: y, tooltipDelay: O, color: x = a.Ttl.BRAND } = e,
        { analyticsLocations: j } = (0, o.ZP)(),
        P = i.useRef(null),
        C = (0, p.hv)('CollectiblesShopGiftButton'),
        w = (0, u.sp)(),
        k = (0, v.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, n.jsx)(a.ua7, {
              text: h.intl.string(h.t['JCFN//']),
              delay: O,
              children: (e) => {
                  var i, o;
                  return (0, n.jsx)(
                      a.zxk,
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
                                          collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == w ? void 0 : w.pageSection,
                                          page_category: null == w ? void 0 : w.pageCategory,
                                          tile_type: l.Z[t.type],
                                          tile_position: String(null == w ? void 0 : w.tilePosition),
                                          cta_name: 'gift button',
                                          page_type: k || 'home'
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, f.S)({
                                              product: t,
                                              selectedVariantIndex: r
                                          }),
                                          isGift: !0,
                                          giftingOrigin: b.Wt.SHOP_PAGE,
                                          analyticsLocations: j,
                                          returnRef: _,
                                          variantsReturnStyle: C,
                                          onClose:
                                              null != y
                                                  ? (e) => {
                                                        e && y();
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
