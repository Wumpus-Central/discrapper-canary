n.d(t, { Z: () => g });
var r = n(951288),
    l = n(647438),
    a = n(979554),
    i = n(311570),
    o = n(28664),
    s = n(481060),
    c = n(906732),
    u = n(333867),
    d = n(626135),
    p = n(381585),
    f = n(410127),
    b = n(67409),
    y = n(981631),
    O = n(474936),
    v = n(388032);
let g = (e) => {
    let { product: t, primary: n, selectedVariantIndex: g, returnRef: m, onSuccess: h, tooltipDelay: j } = e,
        { analyticsLocations: x } = (0, c.ZP)(),
        P = l.useRef(null),
        E = (0, p.sp)(),
        _ = (0, f.Z)();
    return (0, r.jsx)(o.u, {
        text: v.intl.string(v.t["JCFN/y"]),
        delay: j,
        children: (0, r.jsx)(s.hU, {
            "aria-label": v.intl.string(v.t["JCFN/y"]),
            buttonRef: P,
            variant: n ? "primary" : "secondary",
            icon: s.OgN,
            size: "md",
            onClick: (e) => {
                e.stopPropagation(),
                    d.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: null == E ? void 0 : E.pageCategory,
                        tile_type: a.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: "gift button",
                        page_type: _ || "home",
                    }),
                    (0, u.Z)({
                        skuId: (0, b.S)({
                            product: t,
                            selectedVariantIndex: g,
                        }),
                        isGift: !0,
                        giftingOrigin: O.Wt.SHOP_PAGE,
                        analyticsLocations: x,
                        returnRef: m,
                        variantsReturnStyle: i.v.VARIANTS_GROUP,
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
