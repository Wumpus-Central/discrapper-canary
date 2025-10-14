n.d(t, { Z: () => g });
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
    f = n(410127),
    b = n(67409),
    y = n(981631),
    m = n(474936),
    O = n(388032);
let g = (e) => {
    let { product: t, primary: n, selectedVariantIndex: g, returnRef: j, onSuccess: h, tooltipDelay: v } = e,
        { analyticsLocations: x } = (0, c.ZP)(),
        E = l.useRef(null),
        P = (0, p.sp)(),
        _ = (0, f.Z)();
    return (0, r.jsx)(o.u, {
        text: O.intl.string(O.t["JCFN//"]),
        delay: v,
        children: (0, r.jsx)(s.hU, {
            "aria-label": O.intl.string(O.t["JCFN//"]),
            buttonRef: E,
            variant: n ? "primary" : "secondary",
            icon: s.OgN,
            size: "md",
            onClick: (e) => {
                e.stopPropagation(),
                    d.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                        sku_id: t.skuId,
                        page_section: null == P ? void 0 : P.pageSection,
                        page_category: null == P ? void 0 : P.pageCategory,
                        tile_type: i.Z[t.type],
                        tile_position: String(null == P ? void 0 : P.tilePosition),
                        cta_name: "gift button",
                        page_type: _ || "home",
                    }),
                    (0, u.Z)({
                        skuId: (0, b.S)({
                            product: t,
                            selectedVariantIndex: g,
                        }),
                        isGift: !0,
                        giftingOrigin: m.Wt.SHOP_PAGE,
                        analyticsLocations: x,
                        returnRef: j,
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
