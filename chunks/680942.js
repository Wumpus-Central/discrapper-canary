r.d(t, { Z: () => _ });
var n = r(255367),
    l = r(73800),
    a = r(979554),
    i = r(481060),
    o = r(906732),
    s = r(333867),
    c = r(626135),
    u = r(381585),
    d = r(884697),
    p = r(228624),
    g = r(410127),
    f = r(67409),
    b = r(981631),
    h = r(474936),
    m = r(388032);
let _ = (e) => {
    let { product: t, primary: r, selectedVariantIndex: _, returnRef: v, onSuccess: O, tooltipDelay: C } = e,
        { analyticsLocations: E } = (0, o.ZP)(),
        S = l.useRef(null),
        y = (0, p.hv)("CollectiblesShopGiftButton"),
        x = (0, u.sp)(),
        j = (0, g.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, n.jsx)(i.ua7, {
              text: m.intl.string(m.t["JCFN//"]),
              delay: C,
              children: (e) => {
                  var l, o;
                  return (0, n.jsx)(
                      i.hU,
                      ((l = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (o = o =
                          {
                              "aria-label": m.intl.string(m.t["JCFN//"]),
                              buttonRef: S,
                              variant: r ? "primary" : "secondary",
                              icon: i.OgN,
                              size: "md",
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      c.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == x ? void 0 : x.pageSection,
                                          page_category: null == x ? void 0 : x.pageCategory,
                                          tile_type: a.Z[t.type],
                                          tile_position: String(null == x ? void 0 : x.tilePosition),
                                          cta_name: "gift button",
                                          page_type: j || "home",
                                      }),
                                      (0, s.Z)({
                                          skuId: (0, f.S)({
                                              product: t,
                                              selectedVariantIndex: _,
                                          }),
                                          isGift: !0,
                                          giftingOrigin: h.Wt.SHOP_PAGE,
                                          analyticsLocations: E,
                                          returnRef: v,
                                          variantsReturnStyle: y,
                                          onClose:
                                              null != O
                                                  ? (e) => {
                                                        e && O();
                                                    }
                                                  : void 0,
                                      });
                              },
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      l),
                  );
              },
          });
};
