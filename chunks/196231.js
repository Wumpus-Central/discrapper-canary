n.d(t, { S: () => C });
var l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(269115),
    o = n(939249),
    u = n(812993),
    c = n(297264),
    d = n(821609),
    g = n(174459),
    E = n(440938),
    _ = n(590180),
    m = n(597783),
    S = n(212407),
    A = n(758836),
    p = n(652215),
    L = n(375708),
    y = n(941734);
function C(e) {
    let t,
        {
            category: n,
            subblock: r,
            badgeText: C,
            enablePreview: h,
            pageType: I = A.G2.HOME,
            className: O,
            handleTransition: k,
        } = e;
    null != r && (t = _.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let x = t ?? n?.skuId ?? "",
        { handleCardVisibilityChange: v } = (0, m.Z)(x, I, "marketing featured block"),
        f = (0, S.s4)(n, r, h),
        b = s.useRef(null),
        T = r?.bodyText,
        B = r?.name ?? n?.name,
        j = null != B ? L.intl.formatToPlainString(L.t.frSHlf, { destination: B }) : void 0,
        P = (0, E.uM)();
    return (0, l.jsx)(i.L, {
        innerRef: b,
        onChange: v,
        threshold: 0,
        children: (0, l.jsxs)(o.D, {
            className: a()(y.oT, O),
            innerRef: b,
            style: { ...(null != f && { backgroundImage: `url(${f})` }) },
            onClick: () => {
                k({
                    sourceButton: "shop marketing tile",
                    categorySkuId: x,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: n?.isOrbsExclusive,
                }),
                    g.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: P?.sessionId,
                        sku_id: x,
                        page_type: I,
                        page_section: P?.pageSection,
                        page_category: P?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(P?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != C && (0, l.jsx)(u.Lp, { disableColor: !0, text: C, className: y.pv }),
                (0, l.jsx)("div", {
                    className: y.Gh,
                    children:
                        null != T &&
                        (0, l.jsx)(c.D, {
                            lineClamp: 4,
                            className: y.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: T,
                        }),
                }),
                (0, l.jsx)("div", {
                    className: y.b2,
                    children: (0, l.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: L.intl.string(L.t.jVcuVY),
                        "aria-label": j,
                        onClick: (e) => {
                            k({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: x,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: n?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: P?.sessionId,
                                    sku_id: x,
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
