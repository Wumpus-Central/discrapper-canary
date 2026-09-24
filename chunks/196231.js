r.d(t, { S: () => v });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(269115),
    o = r(939249),
    u = r(812993),
    c = r(297264),
    d = r(821609),
    g = r(174459),
    m = r(440938),
    p = r(590180),
    h = r(597783),
    E = r(212407),
    S = r(758836),
    x = r(652215),
    C = r(375708),
    A = r(105499);
function v(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: v,
            pageType: _ = S.G2.HOME,
            className: I,
            handleTransition: L,
            listItemProps: y,
        } = e,
        f = r?.categorySkuId;
    null == f && null != r && (f = p.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let k = f ?? t?.skuId ?? "",
        { handleCardVisibilityChange: O } = (0, h.Z)(k, _, "marketing featured block"),
        j = (0, E.s4)(t, r, v),
        b = l.useRef(null),
        P = r?.bodyText,
        B = r?.name ?? t?.name,
        N = null != B ? C.intl.formatToPlainString(C.t.frSHlf, { destination: B }) : void 0,
        R = (0, m.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: b,
        onChange: O,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(A.oT, I),
            innerRef: b,
            style: { ...(null != j && { backgroundImage: `url(${j})` }) },
            ...y,
            onClick: () => {
                (L({
                    sourceButton: "shop marketing tile",
                    categorySkuId: k,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: R?.sessionId,
                        sku_id: k,
                        page_type: _,
                        page_section: R?.pageSection,
                        page_category: R?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(R?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != s && (0, n.jsx)(u.Lp, { disableColor: !0, text: s, className: A.pv }),
                (0, n.jsx)("div", {
                    className: A.Gh,
                    children:
                        null != P &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: A.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: P,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: A.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: C.intl.string(C.t.jVcuVY),
                        "aria-label": N,
                        tabIndex: y?.tabIndex,
                        onClick: (e) => {
                            (L({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: k,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: R?.sessionId,
                                    sku_id: k,
                                    page_type: _,
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
