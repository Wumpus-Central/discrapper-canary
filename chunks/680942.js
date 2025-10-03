n.d(t, { Z: () => j });
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
    b = n(410127),
    y = n(67409),
    m = n(981631),
    O = n(474936),
    g = n(388032);
let j = (e) => {
    let { product: t, primary: n, selectedVariantIndex: j, returnRef: v, onSuccess: h, tooltipDelay: x } = e,
        { analyticsLocations: E } = (0, c.ZP)(),
        P = l.useRef(null),
        _ = (0, p.sp)(),
        C = (0, b.Z)();
    return (0, f.x6)(t)
        ? null
        : (0, r.jsx)(o.u, {
              text: g.intl.string(g.t["JCFN//"]),
              delay: x,
              children: (0, r.jsx)(s.hU, {
                  "aria-label": g.intl.string(g.t["JCFN//"]),
                  buttonRef: P,
                  variant: n ? "primary" : "secondary",
                  icon: s.OgN,
                  size: "md",
                  onClick: (e) => {
                      e.stopPropagation(),
                          d.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                              collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                              sku_id: t.skuId,
                              page_section: null == _ ? void 0 : _.pageSection,
                              page_category: null == _ ? void 0 : _.pageCategory,
                              tile_type: i.Z[t.type],
                              tile_position: String(null == _ ? void 0 : _.tilePosition),
                              cta_name: "gift button",
                              page_type: C || "home",
                          }),
                          (0, u.Z)({
                              skuId: (0, y.S)({
                                  product: t,
                                  selectedVariantIndex: j,
                              }),
                              isGift: !0,
                              giftingOrigin: O.Wt.SHOP_PAGE,
                              analyticsLocations: E,
                              returnRef: v,
                              variantsReturnStyle: a.v.VARIANTS_GROUP,
                              onClose:
                                  null != h
                                      ? (e) => {
                                            e && h();
                                        }
                                      : void 0,
                          });
                  },
              }),
          });
};
