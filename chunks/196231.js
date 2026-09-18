r.d(t, { S: () => I });
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
    p = r(440938),
    m = r(590180),
    _ = r(597783),
    E = r(212407),
    h = r(758836),
    S = r(652215),
    L = r(375708),
    A = r(105499);
function I(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: I,
            pageType: C = h.G2.HOME,
            className: x,
            handleTransition: v,
            listItemProps: y,
        } = e,
        f = r?.categorySkuId;
    null == f && null != r && (f = m.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let O = f ?? t?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, _.Z)(O, C, "marketing featured block"),
        P = (0, E.s4)(t, r, I),
        T = l.useRef(null),
        j = r?.bodyText,
        b = r?.name ?? t?.name,
        B = null != b ? L.intl.formatToPlainString(L.t.frSHlf, { destination: b }) : void 0,
        R = (0, p.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: T,
        onChange: k,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(A.oT, x),
            innerRef: T,
            style: { ...(null != P && { backgroundImage: `url(${P})` }) },
            ...y,
            onClick: () => {
                (v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: O,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: R?.sessionId,
                        sku_id: O,
                        page_type: C,
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
                        null != j &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: A.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: j,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: A.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: L.intl.string(L.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: y?.tabIndex,
                        onClick: (e) => {
                            (v({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: O,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: R?.sessionId,
                                    sku_id: O,
                                    page_type: C,
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
