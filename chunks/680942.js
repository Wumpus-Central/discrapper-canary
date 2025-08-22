n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(979554),
    o = n(311570),
    s = n(481060),
    l = n(906732),
    c = n(333867),
    u = n(626135),
    d = n(381585),
    f = n(884697),
    _ = n(410127),
    p = n(67409),
    h = n(981631),
    m = n(474936),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
    let { product: t, primary: n, selectedVariantIndex: E, returnRef: y, onSuccess: v, tooltipDelay: I } = e,
        { analyticsLocations: T } = (0, l.ZP)(),
        S = i.useRef(null),
        A = (0, d.sp)(),
        C = (0, _.Z)();
    return (0, f.x6)(t)
        ? null
        : (0, r.jsx)(s.ua7, {
              text: g.intl.string(g.t["JCFN//"]),
              delay: I,
              children: (e) =>
                  (0, r.jsx)(
                      s.hU,
                      O(b({}, e), {
                          "aria-label": g.intl.string(g.t["JCFN//"]),
                          buttonRef: S,
                          variant: n ? "primary" : "secondary",
                          icon: s.OgN,
                          size: "md",
                          onClick: (e) => {
                              e.stopPropagation(),
                                  u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == A ? void 0 : A.sessionId,
                                      sku_id: t.skuId,
                                      page_section: null == A ? void 0 : A.pageSection,
                                      page_category: null == A ? void 0 : A.pageCategory,
                                      tile_type: a.Z[t.type],
                                      tile_position: String(null == A ? void 0 : A.tilePosition),
                                      cta_name: "gift button",
                                      page_type: C || "home",
                                  }),
                                  (0, c.Z)({
                                      skuId: (0, p.S)({
                                          product: t,
                                          selectedVariantIndex: E,
                                      }),
                                      isGift: !0,
                                      giftingOrigin: m.Wt.SHOP_PAGE,
                                      analyticsLocations: T,
                                      returnRef: y,
                                      variantsReturnStyle: o.v.VARIANTS_GROUP,
                                      onClose:
                                          null != v
                                              ? (e) => {
                                                    e && v();
                                                }
                                              : void 0,
                                  });
                          },
                      }),
                  ),
          });
};
