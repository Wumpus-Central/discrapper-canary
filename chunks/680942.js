r.d(t, { Z: () => _ });
var n = r(951288),
    l = r(647438),
    a = r(979554),
    i = r(311570),
    o = r(481060),
    s = r(906732),
    c = r(333867),
    u = r(626135),
    d = r(381585),
    p = r(884697),
    g = r(410127),
    f = r(67409),
    b = r(981631),
    m = r(474936),
    h = r(388032);
let _ = (e) => {
    let { product: t, primary: r, selectedVariantIndex: _, returnRef: v, onSuccess: O, tooltipDelay: C } = e,
        { analyticsLocations: E } = (0, s.ZP)(),
        y = l.useRef(null),
        S = (0, d.sp)(),
        x = (0, g.Z)();
    return (0, p.x6)(t)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: h.intl.string(h.t["JCFN//"]),
              delay: C,
              children: (e) => {
                  var l, s;
                  return (0, n.jsx)(
                      o.hU,
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
                      (s = s =
                          {
                              "aria-label": h.intl.string(h.t["JCFN//"]),
                              buttonRef: y,
                              variant: r ? "primary" : "secondary",
                              icon: o.OgN,
                              size: "md",
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == S ? void 0 : S.pageSection,
                                          page_category: null == S ? void 0 : S.pageCategory,
                                          tile_type: a.Z[t.type],
                                          tile_position: String(null == S ? void 0 : S.tilePosition),
                                          cta_name: "gift button",
                                          page_type: x || "home",
                                      }),
                                      (0, c.Z)({
                                          skuId: (0, f.S)({
                                              product: t,
                                              selectedVariantIndex: _,
                                          }),
                                          isGift: !0,
                                          giftingOrigin: m.Wt.SHOP_PAGE,
                                          analyticsLocations: E,
                                          returnRef: v,
                                          variantsReturnStyle: i.v.VARIANTS_GROUP,
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
                      l),
                  );
              },
          });
};
