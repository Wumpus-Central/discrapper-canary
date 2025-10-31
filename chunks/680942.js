t.d(n, { Z: () => x });
var r = t(951288),
    l = t(647438),
    i = t(979554),
    a = t(311570),
    o = t(28664),
    s = t(481060),
    u = t(906732),
    c = t(333867),
    d = t(626135),
    v = t(381585),
    f = t(410127),
    p = t(67409),
    b = t(981631),
    g = t(474936),
    m = t(388032);
let x = (e) => {
    let { product: n, primary: t, selectedVariantIndex: x, returnRef: h, onSuccess: j, tooltipDelay: y } = e,
        { analyticsLocations: O } = (0, u.ZP)(),
        P = l.useRef(null),
        S = (0, v.sp)(),
        C = (0, f.Z)();
    return (0, r.jsx)(o.u, {
        text: m.intl.string(m.t["JCFN/y"]),
        delay: y,
        children: (0, r.jsx)(s.hU, {
            "aria-label": m.intl.string(m.t["JCFN/y"]),
            buttonRef: P,
            variant: t ? "primary" : "secondary",
            icon: s.OgN,
            size: "md",
            onClick: (e) => {
                e.stopPropagation(),
                    d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
                        sku_id: n.skuId,
                        page_section: null == S ? void 0 : S.pageSection,
                        page_category: null == S ? void 0 : S.pageCategory,
                        tile_type: i.Z[n.type],
                        tile_position: String(null == S ? void 0 : S.tilePosition),
                        cta_name: "gift button",
                        page_type: C || "home",
                    }),
                    (0, c.Z)({
                        skuId: (0, p.S)({
                            product: n,
                            selectedVariantIndex: x,
                        }),
                        isGift: !0,
                        giftingOrigin: g.Wt.SHOP_PAGE,
                        analyticsLocations: O,
                        returnRef: h,
                        variantsReturnStyle: a.v.VARIANTS_GROUP,
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
