n.d(t, { S: () => m });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    i = n(269115),
    o = n(939249),
    u = n(812993),
    c = n(297264),
    d = n(821609),
    E = n(174459),
    _ = n(440938),
    S = n(590180),
    L = n(597783),
    g = n(212407),
    A = n(758836),
    C = n(652215),
    p = n(375708),
    O = n(105499);
function m(e) {
    let {
            category: t,
            subblock: n,
            badgeText: l,
            enablePreview: m,
            pageType: I = A.G2.HOME,
            className: y,
            handleTransition: h,
        } = e,
        k = n?.categorySkuId;
    null == k && null != n && (k = S.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let T = k ?? t?.skuId ?? "",
        { handleCardVisibilityChange: f } = (0, L.Z)(T, I, "marketing featured block"),
        B = (0, g.s4)(t, n, m),
        v = s.useRef(null),
        x = n?.bodyText,
        b = n?.name ?? t?.name,
        P = null != b ? p.intl.formatToPlainString(p.t.frSHlf, { destination: b }) : void 0,
        R = (0, _.uM)();
    return (0, r.jsx)(i.L, {
        innerRef: v,
        onChange: f,
        threshold: 0,
        children: (0, r.jsxs)(o.D, {
            className: a()(O.oT, y),
            innerRef: v,
            style: { ...(null != B && { backgroundImage: `url(${B})` }) },
            onClick: () => {
                h({
                    sourceButton: "shop marketing tile",
                    categorySkuId: T,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    E.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: R?.sessionId,
                        sku_id: T,
                        page_type: I,
                        page_section: R?.pageSection,
                        page_category: R?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(R?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != l && (0, r.jsx)(u.Lp, { disableColor: !0, text: l, className: O.pv }),
                (0, r.jsx)("div", {
                    className: O.Gh,
                    children:
                        null != x &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: O.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: x,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: O.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: p.intl.string(p.t.jVcuVY),
                        "aria-label": P,
                        onClick: (e) => {
                            h({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: T,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                E.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: R?.sessionId,
                                    sku_id: T,
                                    page_type: I,
                                    page_section: R?.pageSection,
                                    page_category: R?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(R?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
}
