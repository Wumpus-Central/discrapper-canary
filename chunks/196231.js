n.d(t, { S: () => I });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    i = n(269115),
    o = n(939249),
    u = n(812993),
    c = n(297264),
    d = n(821609),
    _ = n(174459),
    E = n(440938),
    g = n(590180),
    S = n(597783),
    L = n(212407),
    p = n(758836),
    A = n(652215),
    C = n(375708),
    y = n(105499);
function I(e) {
    let {
            category: t,
            subblock: n,
            badgeText: l,
            enablePreview: I,
            pageType: O = p.G2.HOME,
            className: m,
            handleTransition: h,
        } = e,
        k = n?.categorySkuId;
    null == k && null != n && (k = g.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let T = k ?? t?.skuId ?? "",
        { handleCardVisibilityChange: f } = (0, S.Z)(T, O, "marketing featured block"),
        B = (0, L.s4)(t, n, I),
        v = s.useRef(null),
        x = n?.bodyText,
        b = n?.name ?? t?.name,
        P = null != b ? C.intl.formatToPlainString(C.t.frSHlf, { destination: b }) : void 0,
        R = (0, E.uM)();
    return (0, r.jsx)(i.L, {
        innerRef: v,
        onChange: f,
        threshold: 0,
        children: (0, r.jsxs)(o.D, {
            className: a()(y.oT, m),
            innerRef: v,
            style: { ...(null != B && { backgroundImage: `url(${B})` }) },
            onClick: () => {
                (h({
                    sourceButton: "shop marketing tile",
                    categorySkuId: T,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    _.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: R?.sessionId,
                        sku_id: T,
                        page_type: O,
                        page_section: R?.pageSection,
                        page_category: R?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(R?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != l && (0, r.jsx)(u.Lp, { disableColor: !0, text: l, className: y.pv }),
                (0, r.jsx)("div", {
                    className: y.Gh,
                    children:
                        null != x &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: y.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: x,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: y.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: C.intl.string(C.t.jVcuVY),
                        "aria-label": P,
                        onClick: (e) => {
                            (h({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: T,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                _.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: R?.sessionId,
                                    sku_id: T,
                                    page_type: O,
                                    page_section: R?.pageSection,
                                    page_category: R?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(R?.tilePosition),
                                    cta_name: "Take me there button",
                                }));
                        },
                    }),
                }),
            ],
        }),
    });
}
