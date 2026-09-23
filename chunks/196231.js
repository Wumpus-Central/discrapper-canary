r.d(t, { S: () => _ });
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
    v = r(375708),
    C = r(105499);
function _(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: _,
            pageType: A = S.G2.HOME,
            className: I,
            handleTransition: y,
            listItemProps: L,
        } = e,
        f = r?.categorySkuId;
    null == f && null != r && (f = p.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let k = f ?? t?.skuId ?? "",
        { handleCardVisibilityChange: O } = (0, h.Z)(k, A, "marketing featured block"),
        j = (0, E.s4)(t, r, _),
        b = l.useRef(null),
        P = r?.bodyText,
        T = r?.name ?? t?.name,
        B = null != T ? v.intl.formatToPlainString(v.t.frSHlf, { destination: T }) : void 0,
        N = (0, m.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: b,
        onChange: O,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(C.oT, I),
            innerRef: b,
            style: { ...(null != j && { backgroundImage: `url(${j})` }) },
            ...L,
            onClick: () => {
                (y({
                    sourceButton: "shop marketing tile",
                    categorySkuId: k,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: N?.sessionId,
                        sku_id: k,
                        page_type: A,
                        page_section: N?.pageSection,
                        page_category: N?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(N?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != s && (0, n.jsx)(u.Lp, { disableColor: !0, text: s, className: C.pv }),
                (0, n.jsx)("div", {
                    className: C.Gh,
                    children:
                        null != P &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: C.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: P,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: C.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: v.intl.string(v.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: L?.tabIndex,
                        onClick: (e) => {
                            (y({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: k,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: N?.sessionId,
                                    sku_id: k,
                                    page_type: A,
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
