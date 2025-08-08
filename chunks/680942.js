n.d(t, { Z: () => _ });
var r = n(255367),
    l = n(73800),
    a = n(979554),
    i = n(481060),
    o = n(906732),
    s = n(333867),
    c = n(626135),
    u = n(381585),
    d = n(884697),
    p = n(228624),
    g = n(410127),
    f = n(67409),
    b = n(981631),
    h = n(474936),
    m = n(388032);
let _ = (e) => {
    let { product: t, primary: n, selectedVariantIndex: _, returnRef: v, onSuccess: C, tooltipDelay: O } = e,
        { analyticsLocations: E } = (0, o.ZP)(),
        S = l.useRef(null),
        y = (0, p.hv)("CollectiblesShopGiftButton"),
        x = (0, u.sp)(),
        j = (0, g.Z)();
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(i.ua7, {
              text: m.intl.string(m.t["JCFN//"]),
              delay: O,
              children: (e) => {
                  var l, o;
                  return (0, r.jsx)(
                      i.hU,
                      ((l = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (o = o =
                          {
                              "aria-label": m.intl.string(m.t["JCFN//"]),
                              buttonRef: S,
                              variant: n ? "primary" : "secondary",
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
                                              null != C
                                                  ? (e) => {
                                                        e && C();
                                                    }
                                                  : void 0,
                                      });
                              },
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      l),
                  );
              },
          });
};
