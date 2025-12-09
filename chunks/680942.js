n.d(t, { Z: () => b });
var a = n(54381),
    r = n(473749),
    i = n(979554),
    l = n(311570),
    s = n(28664),
    o = n(481060),
    c = n(906732),
    d = n(333867),
    u = n(626135),
    m = n(381585),
    p = n(410127),
    h = n(67409),
    x = n(981631),
    f = n(474936),
    g = n(388032);
let b = (e) => {
    let { product: t, primary: n, selectedVariantIndex: b, returnRef: v, onSuccess: j, tooltipDelay: _ } = e,
        { analyticsLocations: y } = (0, c.ZP)(),
        C = r.useRef(null),
        S = (0, m.sp)(),
        E = (0, p.Z)();
    return (0, a.jsx)(s.u, {
        text: g.intl.string(g.t["JCFN/y"]),
        delay: _,
        children: (0, a.jsx)(o.hU, {
            "aria-label": g.intl.string(g.t["JCFN/y"]),
            buttonRef: C,
            variant: n ? "primary" : "secondary",
            icon: o.OgN,
            size: "md",
            onClick: (e) => {
                e.stopPropagation(),
                    u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
                        sku_id: t.skuId,
                        page_section: null == S ? void 0 : S.pageSection,
                        page_category: null == S ? void 0 : S.pageCategory,
                        tile_type: i.Z[t.type],
                        tile_position: String(null == S ? void 0 : S.tilePosition),
                        cta_name: "gift button",
                        page_type: E || "home",
                    }),
                    (0, d.Z)({
                        skuId: (0, h.S)({
                            product: t,
                            selectedVariantIndex: b,
                        }),
                        isGift: !0,
                        giftingOrigin: f.Wt.SHOP_PAGE,
                        analyticsLocations: y,
                        returnRef: v,
                        variantsReturnStyle: l.v.VARIANTS_GROUP,
                        onClose:
                            null != j
                                ? (e) => {
                                      e && j();
                                  }
                                : void 0,
                    });
            },
        }),
    });
};
