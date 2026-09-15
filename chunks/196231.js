n.d(t, { S: () => I });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    i = n.n(l),
    a = n(269115),
    o = n(939249),
    u = n(812993),
    c = n(297264),
    d = n(821609),
    _ = n(174459),
    g = n(440938),
    E = n(590180),
    S = n(597783),
    p = n(212407),
    L = n(758836),
    m = n(652215),
    A = n(375708),
    C = n(105499);
function I(e) {
    let {
            category: t,
            subblock: n,
            badgeText: l,
            enablePreview: I,
            pageType: y = L.G2.HOME,
            className: O,
            handleTransition: h,
            listItemProps: v,
        } = e,
        k = n?.categorySkuId;
    null == k && null != n && (k = E.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let f = k ?? t?.skuId ?? "",
        { handleCardVisibilityChange: x } = (0, S.Z)(f, y, "marketing featured block"),
        T = (0, p.s4)(t, n, I),
        b = s.useRef(null),
        B = n?.bodyText,
        P = n?.name ?? t?.name,
        R = null != P ? A.intl.formatToPlainString(A.t.frSHlf, { destination: P }) : void 0,
        j = (0, g.uM)();
    return (0, r.jsx)(a.L, {
        innerRef: b,
        onChange: x,
        threshold: 0,
        children: (0, r.jsxs)(o.D, {
            className: i()(C.oT, O),
            innerRef: b,
            style: { ...(null != T && { backgroundImage: `url(${T})` }) },
            ...v,
            onClick: () => {
                (h({
                    sourceButton: "shop marketing tile",
                    categorySkuId: f,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    _.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: f,
                        page_type: y,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(j?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != l && (0, r.jsx)(u.Lp, { disableColor: !0, text: l, className: C.pv }),
                (0, r.jsx)("div", {
                    className: C.Gh,
                    children:
                        null != B &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: C.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: B,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: C.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: A.intl.string(A.t.jVcuVY),
                        "aria-label": R,
                        tabIndex: v?.tabIndex,
                        onClick: (e) => {
                            (h({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: f,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                _.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: j?.sessionId,
                                    sku_id: f,
                                    page_type: y,
                                    page_section: j?.pageSection,
                                    page_category: j?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(j?.tilePosition),
                                    cta_name: "Take me there button",
                                }));
                        },
                    }),
                }),
            ],
        }),
    });
}
