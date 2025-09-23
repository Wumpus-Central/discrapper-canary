r.d(t, { Z: () => v });
var n = r(951288),
    l = r(647438),
    i = r(979554),
    a = r(311570),
    o = r(481060),
    s = r(906732),
    c = r(333867),
    u = r(626135),
    d = r(381585),
    p = r(884697),
    f = r(410127),
    b = r(67409),
    h = r(981631),
    g = r(474936),
    O = r(388032);
let v = (e) => {
    let { product: t, primary: r, selectedVariantIndex: v, returnRef: y, onSuccess: m, tooltipDelay: j } = e,
        { analyticsLocations: P } = (0, s.ZP)(),
        _ = l.useRef(null),
        E = (0, d.sp)(),
        x = (0, f.Z)();
    return (0, p.x6)(t)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: O.intl.string(O.t["JCFN//"]),
              delay: j,
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
                              "aria-label": O.intl.string(O.t["JCFN//"]),
                              buttonRef: _,
                              variant: r ? "primary" : "secondary",
                              icon: o.OgN,
                              size: "md",
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                                          sku_id: t.skuId,
                                          page_section: null == E ? void 0 : E.pageSection,
                                          page_category: null == E ? void 0 : E.pageCategory,
                                          tile_type: i.Z[t.type],
                                          tile_position: String(null == E ? void 0 : E.tilePosition),
                                          cta_name: "gift button",
                                          page_type: x || "home",
                                      }),
                                      (0, c.Z)({
                                          skuId: (0, b.S)({
                                              product: t,
                                              selectedVariantIndex: v,
                                          }),
                                          isGift: !0,
                                          giftingOrigin: g.Wt.SHOP_PAGE,
                                          analyticsLocations: P,
                                          returnRef: y,
                                          variantsReturnStyle: a.v.VARIANTS_GROUP,
                                          onClose:
                                              null != m
                                                  ? (e) => {
                                                        e && m();
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
