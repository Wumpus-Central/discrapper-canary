n.d(t, { S: () => h });
var s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    i = n(269115),
    o = n(939249),
    u = n(812993),
    c = n(297264),
    d = n(821609),
    E = n(174459),
    g = n(440938),
    _ = n(590180),
    A = n(597783),
    p = n(212407),
    S = n(758836),
    L = n(652215),
    m = n(375708),
    C = n(105499);
function h(e) {
    let t,
        {
            category: n,
            subblock: r,
            badgeText: h,
            enablePreview: O,
            pageType: y = S.G2.HOME,
            className: I,
            handleTransition: x,
        } = e;
    null != r && (t = _.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let f = t ?? n?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, A.Z)(f, y, "marketing featured block"),
        T = (0, p.s4)(n, r, O),
        v = l.useRef(null),
        b = r?.bodyText,
        B = r?.name ?? n?.name,
        R = null != B ? m.intl.formatToPlainString(m.t.frSHlf, { destination: B }) : void 0,
        N = (0, g.uM)();
    return (0, s.jsx)(i.L, {
        innerRef: v,
        onChange: k,
        threshold: 0,
        children: (0, s.jsxs)(o.D, {
            className: a()(C.oT, I),
            innerRef: v,
            style: { ...(null != T && { backgroundImage: `url(${T})` }) },
            onClick: () => {
                x({
                    sourceButton: "shop marketing tile",
                    categorySkuId: f,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: n?.isOrbsExclusive,
                }),
                    E.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: N?.sessionId,
                        sku_id: f,
                        page_type: y,
                        page_section: N?.pageSection,
                        page_category: N?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(N?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != h && (0, s.jsx)(u.Lp, { disableColor: !0, text: h, className: C.pv }),
                (0, s.jsx)("div", {
                    className: C.Gh,
                    children:
                        null != b &&
                        (0, s.jsx)(c.D, {
                            lineClamp: 4,
                            className: C.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: b,
                        }),
                }),
                (0, s.jsx)("div", {
                    className: C.b2,
                    children: (0, s.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: m.intl.string(m.t.jVcuVY),
                        "aria-label": R,
                        onClick: (e) => {
                            x({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: f,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: n?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                E.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: N?.sessionId,
                                    sku_id: f,
                                    page_type: y,
                                    page_section: N?.pageSection,
                                    page_category: N?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(N?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
}
