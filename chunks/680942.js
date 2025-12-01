t.d(n, { Z: () => h });
var r = t(54381),
    l = t(473749),
    i = t(979554),
    a = t(311570),
    o = t(28664),
    s = t(481060),
    c = t(906732),
    u = t(333867),
    d = t(626135),
    v = t(381585),
    p = t(410127),
    f = t(67409),
    g = t(981631),
    b = t(474936),
    m = t(388032);
let h = (e) => {
    let { product: n, primary: t, selectedVariantIndex: h, returnRef: x, onSuccess: j, tooltipDelay: y } = e,
        { analyticsLocations: O } = (0, c.ZP)(),
        P = l.useRef(null),
        C = (0, v.sp)(),
        S = (0, p.Z)();
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
                    d.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                        sku_id: n.skuId,
                        page_section: null == C ? void 0 : C.pageSection,
                        page_category: null == C ? void 0 : C.pageCategory,
                        tile_type: i.Z[n.type],
                        tile_position: String(null == C ? void 0 : C.tilePosition),
                        cta_name: "gift button",
                        page_type: S || "home",
                    }),
                    (0, u.Z)({
                        skuId: (0, f.S)({
                            product: n,
                            selectedVariantIndex: h,
                        }),
                        isGift: !0,
                        giftingOrigin: b.Wt.SHOP_PAGE,
                        analyticsLocations: O,
                        returnRef: x,
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
