r.d(t, { S: () => L });
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
    _ = r(590180),
    E = r(597783),
    C = r(212407),
    p = r(758836),
    h = r(652215),
    I = r(375708),
    S = r(105499);
function L(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: L,
            pageType: A = p.G2.HOME,
            className: x,
            handleTransition: v,
            listItemProps: f,
        } = e,
        O = r?.categorySkuId;
    null == O && null != r && (O = _.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let y = O ?? t?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, E.Z)(y, A, "marketing featured block"),
        N = (0, C.s4)(t, r, L),
        j = l.useRef(null),
        T = r?.bodyText,
        b = r?.name ?? t?.name,
        B = null != b ? I.intl.formatToPlainString(I.t.frSHlf, { destination: b }) : void 0,
        R = (0, m.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: j,
        onChange: k,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(S.oT, x),
            innerRef: j,
            style: { ...(null != N && { backgroundImage: `url(${N})` }) },
            ...f,
            onClick: () => {
                (v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: y,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: R?.sessionId,
                        sku_id: y,
                        page_type: A,
                        page_section: R?.pageSection,
                        page_category: R?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(R?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != s && (0, n.jsx)(u.Lp, { disableColor: !0, text: s, className: S.pv }),
                (0, n.jsx)("div", {
                    className: S.Gh,
                    children:
                        null != T &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: S.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: T,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: S.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: I.intl.string(I.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: f?.tabIndex,
                        onClick: (e) => {
                            (v({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: y,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: R?.sessionId,
                                    sku_id: y,
                                    page_type: A,
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
