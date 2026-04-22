"use strict";
s.d(t, { S: () => E });
var n = s(627968),
    l = s(64700),
    r = s(230109),
    a = s(939249),
    i = s(777666),
    o = s(534514),
    c = s(821609),
    d = s(954571),
    u = s(440938),
    g = s(590180),
    h = s(597783),
    _ = s(212407),
    m = s(652215),
    p = s(985018),
    f = s(941734);
let E = (e) => {
    let t,
        { category: s, subblock: E, badgeText: x, enablePreview: A, handleTransition: C } = e;
    null != E && (t = g.A.getCategoryByStoreListingId(E?.categoryStoreListingId)?.skuId);
    let S = t ?? s?.skuId ?? "",
        { handleCardVisibilityChange: b } = (0, h.Z)(S, "home", "marketing featured block"),
        v = (0, _.s4)(s, E, A),
        L = l.useRef(null),
        I = E?.bodyText,
        j = (0, u.uM)();
    return (0, n.jsx)(r.L, {
        innerRef: L,
        onChange: b,
        threshold: 0,
        children: (0, n.jsxs)(a.D, {
            className: f.oT,
            innerRef: L,
            style: { ...(null != v && { backgroundImage: `url(${v})` }) },
            onClick: () => {
                C({
                    sourceButton: "shop marketing tile",
                    categorySkuId: S,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: s?.isOrbsExclusive,
                }),
                    d.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: S,
                        page_type: "home",
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(j?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != x && (0, n.jsx)(i.Lp, { disableColor: !0, text: x, className: f.pv }),
                (0, n.jsx)("div", {
                    className: f.Gh,
                    children:
                        null != I &&
                        (0, n.jsx)(o.D, {
                            lineClamp: 4,
                            className: f.BN,
                            style: { color: E?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: I,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: f.b2,
                    children: (0, n.jsx)(c.$, {
                        variant: "overlay-primary",
                        text: p.intl.string(p.t.jVcuVY),
                        onClick: (e) => {
                            C({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: S,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: s?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                d.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: j?.sessionId,
                                    sku_id: S,
                                    page_type: "home",
                                    page_section: j?.pageSection,
                                    page_category: j?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(j?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
