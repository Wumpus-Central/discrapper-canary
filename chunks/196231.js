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
    p = r(440938),
    m = r(590180),
    h = r(597783),
    E = r(212407),
    _ = r(758836),
    S = r(652215),
    x = r(375708),
    I = r(105499);
function v(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: v,
            pageType: L = _.G2.HOME,
            className: A,
            handleTransition: C,
            listItemProps: y,
        } = e,
        f = r?.categorySkuId;
    null == f && null != r && (f = m.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let O = f ?? t?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, h.Z)(O, L, "marketing featured block"),
        j = (0, E.s4)(t, r, v),
        T = l.useRef(null),
        P = r?.bodyText,
        b = r?.name ?? t?.name,
        B = null != b ? x.intl.formatToPlainString(x.t.frSHlf, { destination: b }) : void 0,
        N = (0, p.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: T,
        onChange: k,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(I.oT, A),
            innerRef: T,
            style: { ...(null != j && { backgroundImage: `url(${j})` }) },
            ...y,
            onClick: () => {
                (C({
                    sourceButton: "shop marketing tile",
                    categorySkuId: O,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: N?.sessionId,
                        sku_id: O,
                        page_type: L,
                        page_section: N?.pageSection,
                        page_category: N?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(N?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != s && (0, n.jsx)(u.Lp, { disableColor: !0, text: s, className: I.pv }),
                (0, n.jsx)("div", {
                    className: I.Gh,
                    children:
                        null != P &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: I.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: P,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: I.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: x.intl.string(x.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: y?.tabIndex,
                        onClick: (e) => {
                            (C({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: O,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: N?.sessionId,
                                    sku_id: O,
                                    page_type: L,
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
