r.d(t, { S: () => S });
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
    E = r(440938),
    m = r(590180),
    p = r(597783),
    _ = r(212407),
    h = r(758836),
    C = r(652215),
    v = r(660183),
    L = r(105499);
function S(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: S,
            pageType: I = h.G2.HOME,
            className: f,
            handleTransition: A,
            listItemProps: x,
        } = e,
        O = r?.categorySkuId;
    null == O && null != r && (O = m.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let y = O ?? t?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, p.Z)(y, I, "marketing featured block"),
        N = (0, _.s4)(t, r, S),
        T = l.useRef(null),
        b = r?.bodyText,
        j = r?.name ?? t?.name,
        B = null != j ? v.intl.formatToPlainString(v.t.frSHlf, { destination: j }) : void 0,
        w = (0, E.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: T,
        onChange: k,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(L.oT, f),
            innerRef: T,
            style: { ...(null != N && { backgroundImage: `url(${N})` }) },
            ...x,
            onClick: () => {
                (A({
                    sourceButton: "shop marketing tile",
                    categorySkuId: y,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: w?.sessionId,
                        sku_id: y,
                        page_type: I,
                        page_section: w?.pageSection,
                        page_category: w?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(w?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                null != s && (0, n.jsx)(u.Lp, { disableColor: !0, text: s, className: L.pv }),
                (0, n.jsx)("div", {
                    className: L.Gh,
                    children:
                        null != b &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: L.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: b,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: L.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: v.intl.string(v.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: x?.tabIndex,
                        onClick: (e) => {
                            (A({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: y,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: w?.sessionId,
                                    sku_id: y,
                                    page_type: I,
                                    page_section: w?.pageSection,
                                    page_category: w?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(w?.tilePosition),
                                    cta_name: "Take me there button",
                                }));
                        },
                    }),
                }),
            ],
        }),
    });
}
