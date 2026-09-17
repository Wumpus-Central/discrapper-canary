r.d(t, { S: () => A });
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
    h = r(212407),
    E = r(758836),
    S = r(652215),
    C = r(375708),
    L = r(105499);
function A(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: A,
            pageType: I = E.G2.HOME,
            className: x,
            handleTransition: v,
            listItemProps: f,
        } = e,
        y = r?.categorySkuId;
    null == y && null != r && (y = m.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let O = y ?? t?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, _.Z)(O, I, "marketing featured block"),
        P = (0, h.s4)(t, r, A),
        T = l.useRef(null),
        j = r?.bodyText,
        b = r?.name ?? t?.name,
        B = null != b ? C.intl.formatToPlainString(C.t.frSHlf, { destination: b }) : void 0,
        N = (0, p.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: T,
        onChange: k,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(L.oT, x),
            innerRef: T,
            style: { ...(null != P && { backgroundImage: `url(${P})` }) },
            ...f,
            onClick: () => {
                (v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: O,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: N?.sessionId,
                        sku_id: O,
                        page_type: I,
                        page_section: N?.pageSection,
                        page_category: N?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(N?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != s && (0, n.jsx)(u.Lp, { disableColor: !0, text: s, className: L.pv }),
                (0, n.jsx)("div", {
                    className: L.Gh,
                    children:
                        null != j &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: L.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: j,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: L.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: C.intl.string(C.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: f?.tabIndex,
                        onClick: (e) => {
                            (v({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: O,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: N?.sessionId,
                                    sku_id: O,
                                    page_type: I,
                                    page_section: N?.pageSection,
                                    page_category: N?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(N?.tilePosition),
                                    cta_name: "Take me there button",
                                }));
                        },
                    }),
                }),
            ],
        }),
    });
}
