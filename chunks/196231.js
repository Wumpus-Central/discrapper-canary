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
    _ = s(652215),
    g = s(985018),
    m = s(297046);
let h = (e) => {
    let t,
        { category: s, subblock: h, badgeText: p, enablePreview: f, handleTransition: x } = e;
    null != h && (t = c.A.getCategoryByStoreListingId(h?.categoryStoreListingId)?.skuId);
    let E = t ?? s?.skuId ?? "",
        { handleCardVisibilityChange: b } = (0, d.Z)(E, "home", "marketing featured block"),
        C = (0, u.s4)(s, h, f),
        A = r.useRef(null),
        S = h?.bodyText,
        v = (0, o.uM)();
    return (0, n.jsx)(l.L, {
        innerRef: A,
        onChange: b,
        threshold: 0,
        children: (0, n.jsxs)(a.DUT, {
            className: m.oT,
            innerRef: A,
            style: { ...(null != C && { backgroundImage: `url(${C})` }) },
            onClick: () => {
                x({
                    sourceButton: "shop marketing tile",
                    categorySkuId: E,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: s?.isOrbsExclusive,
                }),
                    i.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: v?.sessionId,
                        sku_id: E,
                        page_type: "home",
                        page_section: v?.pageSection,
                        page_category: v?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(v?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != p && (0, n.jsx)(a.LpS, { disableColor: !0, text: p, className: m.pv }),
                (0, n.jsx)("div", {
                    className: m.Gh,
                    children:
                        null != S &&
                        (0, n.jsx)(a.Heading, {
                            lineClamp: 4,
                            className: m.BN,
                            style: { color: h?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: S,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: m.b2,
                    children: (0, n.jsx)(a.Button, {
                        variant: "overlay-primary",
                        text: g.intl.string(g.t.jVcuVY),
                        onClick: (e) => {
                            x({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: E,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: s?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                i.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: v?.sessionId,
                                    sku_id: E,
                                    page_type: "home",
                                    page_section: v?.pageSection,
                                    page_category: v?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(v?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
