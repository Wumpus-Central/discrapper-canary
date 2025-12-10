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
    let { product: n, primary: t, selectedVariantIndex: m, returnRef: j, onSuccess: y, tooltipDelay: O } = e,
        { analyticsLocations: x } = (0, c.ZP)(),
        P = l.useRef(null),
        C = (0, p.sp)(),
        S = (0, f.Z)();
    return (0, r.jsx)(o.u, {
        text: h.intl.string(h.t["JCFN/y"]),
        delay: O,
        children: (0, r.jsx)(s.hU, {
            "aria-label": h.intl.string(h.t["JCFN/y"]),
            buttonRef: P,
            variant: t ? "primary" : "secondary",
            icon: s.OgN,
            size: "md",
            onClick: (e) => {
                e.stopPropagation(),
                    d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        skuId: (0, v.S)({
                            product: n,
                            selectedVariantIndex: m,
                        }),
                        isGift: !0,
                        giftingOrigin: g.Wt.SHOP_PAGE,
                        analyticsLocations: x,
                        returnRef: j,
                        variantsReturnStyle: a.v.VARIANTS_GROUP,
                        onClose:
                            null != y
                                ? (e) => {
                                      e && y();
                                  }
                                : void 0,
                    });
            },
        }),
    });
};
