s.d(t, { S: () => p });
var l = s(627968),
    r = s(64700),
    n = s(269115),
    a = s(939249),
    i = s(812993),
    o = s(534514),
    u = s(821609),
    c = s(174459),
    d = s(440938),
    g = s(590180),
    E = s(597783),
    _ = s(212407),
    m = s(758836),
    S = s(652215),
    A = s(375708),
    L = s(941734);
let p = (e) => {
    let t,
        { category: s, subblock: p, badgeText: h, enablePreview: y, pageType: C = m.G2.HOME, handleTransition: O } = e;
    null != p && (t = g.A.getCategoryByStoreListingId(p?.categoryStoreListingId)?.skuId);
    let I = t ?? s?.skuId ?? "",
        { handleCardVisibilityChange: x } = (0, E.Z)(I, C, "marketing featured block"),
        v = (0, _.s4)(s, p, y),
        k = r.useRef(null),
        T = p?.bodyText,
        b = p?.name ?? s?.name,
        B = null != b ? A.intl.formatToPlainString(A.t.frSHlf, { destination: b }) : void 0,
        f = (0, d.uM)();
    return (0, l.jsx)(n.L, {
        innerRef: k,
        onChange: x,
        threshold: 0,
        children: (0, l.jsxs)(a.D, {
            className: L.oT,
            innerRef: k,
            style: { ...(null != v && { backgroundImage: `url(${v})` }) },
            onClick: () => {
                O({
                    sourceButton: "shop marketing tile",
                    categorySkuId: I,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: s?.isOrbsExclusive,
                }),
                    c.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: f?.sessionId,
                        sku_id: I,
                        page_type: C,
                        page_section: f?.pageSection,
                        page_category: f?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(f?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != h && (0, l.jsx)(i.Lp, { disableColor: !0, text: h, className: L.pv }),
                (0, l.jsx)("div", {
                    className: L.Gh,
                    children:
                        null != T &&
                        (0, l.jsx)(o.D, {
                            lineClamp: 4,
                            className: L.BN,
                            style: { color: p?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: T,
                        }),
                }),
                (0, l.jsx)("div", {
                    className: L.b2,
                    children: (0, l.jsx)(u.$, {
                        variant: "overlay-primary",
                        text: A.intl.string(A.t.jVcuVY),
                        "aria-label": B,
                        onClick: (e) => {
                            O({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: I,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: s?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                c.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: f?.sessionId,
                                    sku_id: I,
                                    page_type: C,
                                    page_section: f?.pageSection,
                                    page_category: f?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(f?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
