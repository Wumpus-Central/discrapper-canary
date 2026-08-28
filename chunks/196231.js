n.d(t, { S: () => O });
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
    g = n(597783),
    L = n(212407),
    A = n(758836),
    p = n(652215),
    C = n(375708),
    m = n(105499);
function O(e) {
    let {
            category: t,
            subblock: n,
            badgeText: l,
            enablePreview: O,
            pageType: I = A.G2.HOME,
            className: y,
            handleTransition: h,
        } = e,
        k = n?.categorySkuId;
    null == k && null != n && (k = S.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let f = k ?? t?.skuId ?? "",
        { handleCardVisibilityChange: T } = (0, g.Z)(f, I, "marketing featured block"),
        B = (0, L.s4)(t, n, O),
        v = s.useRef(null),
        x = n?.bodyText,
        b = n?.name ?? t?.name,
        R = null != b ? C.intl.formatToPlainString(C.t.frSHlf, { destination: b }) : void 0,
        P = (0, _.uM)();
    return (0, r.jsx)(i.L, {
        innerRef: v,
        onChange: T,
        threshold: 0,
        children: (0, r.jsxs)(o.D, {
            className: a()(m.oT, y),
            innerRef: v,
            style: { ...(null != B && { backgroundImage: `url(${B})` }) },
            onClick: () => {
                h({
                    sourceButton: "shop marketing tile",
                    categorySkuId: f,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    E.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: P?.sessionId,
                        sku_id: f,
                        page_type: I,
                        page_section: P?.pageSection,
                        page_category: P?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(P?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != l && (0, r.jsx)(u.Lp, { disableColor: !0, text: l, className: m.pv }),
                (0, r.jsx)("div", {
                    className: m.Gh,
                    children:
                        null != x &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: m.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: x,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: m.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: C.intl.string(C.t.jVcuVY),
                        "aria-label": R,
                        onClick: (e) => {
                            h({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: f,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                E.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: P?.sessionId,
                                    sku_id: f,
                                    page_type: I,
                                    page_section: P?.pageSection,
                                    page_category: P?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(P?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
}
