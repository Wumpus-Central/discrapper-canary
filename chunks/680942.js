n.d(t, { Z: () => h });
var r = n(951288),
    l = n(647438),
    i = n(979554),
    a = n(311570),
    o = n(28664),
    s = n(481060),
    c = n(906732),
    u = n(333867),
    d = n(626135),
    p = n(381585),
    f = n(884697),
    b = n(152563),
    y = n(410127),
    m = n(67409),
    O = n(981631),
    g = n(474936),
    j = n(388032);
let h = (e) => {
    let { product: t, primary: n, selectedVariantIndex: h, returnRef: v, onSuccess: x, tooltipDelay: E } = e,
        { analyticsLocations: _ } = (0, c.ZP)(),
        P = l.useRef(null),
        C = (0, p.sp)(),
        A = (0, y.Z)(),
        S = (0, b.t)("collectibles-shop-gift-button");
    return (0, f.x6)(t) && !S
        ? null
        : (0, r.jsx)(o.u, {
              text: j.intl.string(j.t["JCFN//"]),
              delay: E,
              children: (0, r.jsx)(s.hU, {
                  "aria-label": j.intl.string(j.t["JCFN//"]),
                  buttonRef: P,
                  variant: n ? "primary" : "secondary",
                  icon: s.OgN,
                  size: "md",
                  onClick: (e) => {
                      e.stopPropagation(),
                          d.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                              collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                              sku_id: t.skuId,
                              page_section: null == C ? void 0 : C.pageSection,
                              page_category: null == C ? void 0 : C.pageCategory,
                              tile_type: i.Z[t.type],
                              tile_position: String(null == C ? void 0 : C.tilePosition),
                              cta_name: "gift button",
                              page_type: A || "home",
                          }),
                          (0, u.Z)({
                              skuId: (0, m.S)({
                                  product: t,
                                  selectedVariantIndex: h,
                              }),
                              isGift: !0,
                              giftingOrigin: g.Wt.SHOP_PAGE,
                              analyticsLocations: _,
                              returnRef: v,
                              variantsReturnStyle: a.v.VARIANTS_GROUP,
                              onClose:
                                  null != x
                                      ? (e) => {
                                            e && x();
                                        }
                                      : void 0,
                          });
                  },
              }),
          });
};
