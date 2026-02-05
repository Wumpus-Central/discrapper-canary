"use strict";
s.d(t, { S: () => h });
var n = s(627968),
    r = s(64700),
    l = s(230109),
    a = s(397927),
    i = s(954571),
    o = s(440938),
    c = s(590180),
    d = s(597783),
    u = s(212407),
    g = s(652215),
    m = s(985018),
    _ = s(201073);
let h = (e) => {
    let t,
        { category: s, subblock: h, badgeText: p, handleTransition: f } = e;
    null != h && (t = c.A.getCategoryByStoreListingId(h?.categoryStoreListingId)?.skuId);
    let E = t ?? s?.skuId ?? "",
        { handleCardVisibilityChange: C } = (0, d.Z)(E, "home", "marketing featured block"),
        b = (0, u.s4)(s, h),
        A = r.useRef(null),
        x = h?.bodyText,
        S = (0, o.uM)();
    return (0, n.jsx)(l.L, {
        innerRef: A,
        onChange: C,
        threshold: 0,
        children: (0, n.jsxs)(a.DUT, {
            className: _.oT,
            innerRef: A,
            style: { ...(null != b && { backgroundImage: `url(${b})` }) },
            onClick: () => {
                f({
                    sourceButton: "shop marketing tile",
                    categorySkuId: E,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: s?.isOrbsExclusive,
                }),
                    i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: S?.sessionId,
                        sku_id: E,
                        page_type: "home",
                        page_section: S?.pageSection,
                        page_category: S?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(S?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != p && (0, n.jsx)(a.LpS, { disableColor: !0, text: p, className: _.pv }),
                (0, n.jsx)("div", {
                    className: _.Gh,
                    children:
                        null != x &&
                        (0, n.jsx)(a.Heading, {
                            lineClamp: 4,
                            className: _.BN,
                            style: { color: h?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: x,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: _.b2,
                    children: (0, n.jsx)(a.Button, {
                        variant: "overlay-primary",
                        text: m.intl.string(m.t.jVcuVY),
                        onClick: (e) => {
                            f({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: E,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: s?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: S?.sessionId,
                                    sku_id: E,
                                    page_type: "home",
                                    page_section: S?.pageSection,
                                    page_category: S?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(S?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
