t.d(n, { Z: () => m });
var r = t(54381),
    l = t(473749),
    i = t(979554),
    a = t(311570),
    o = t(28664),
    s = t(481060),
    c = t(906732),
    u = t(333867),
    d = t(626135),
    p = t(381585),
    f = t(410127),
    v = t(67409),
    b = t(981631),
    g = t(474936),
    h = t(388032);
let m = (e) => {
    let {
            product: n,
            primary: t,
            selectedVariantIndex: m,
            returnRef: y,
            onSuccess: j,
            tooltipDelay: x,
            fullWidth: O = !1,
        } = e,
        { analyticsLocations: P } = (0, c.ZP)(),
        C = l.useRef(null),
        S = (0, p.sp)(),
        k = (0, f.Z)(),
        _ = (e) => {
            e.stopPropagation(),
                d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
                    sku_id: n.skuId,
                    page_section: null == S ? void 0 : S.pageSection,
                    page_category: null == S ? void 0 : S.pageCategory,
                    tile_type: i.Z[n.type],
                    tile_position: String(null == S ? void 0 : S.tilePosition),
                    cta_name: "gift button",
                    page_type: k || "home",
                }),
                (0, u.Z)({
                    skuId: (0, v.S)({
                        product: n,
                        selectedVariantIndex: m,
                    }),
                    isGift: !0,
                    giftingOrigin: g.Wt.SHOP_PAGE,
                    analyticsLocations: P,
                    returnRef: y,
                    variantsReturnStyle: a.v.VARIANTS_GROUP,
                    onClose:
                        null != j
                            ? (e) => {
                                  e && j();
                              }
                            : void 0,
                });
        };
    return O
        ? (0, r.jsx)(s.Button, {
              variant: t ? "primary" : "secondary",
              icon: s.OgN,
              onClick: _,
              text: h.intl.string(h.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(o.u, {
              text: h.intl.string(h.t["JCFN/y"]),
              delay: x,
              children: (0, r.jsx)(s.hU, {
                  "aria-label": h.intl.string(h.t["JCFN/y"]),
                  buttonRef: C,
                  variant: t ? "primary" : "secondary",
                  icon: s.OgN,
                  size: "md",
                  onClick: _,
              }),
          });
};
