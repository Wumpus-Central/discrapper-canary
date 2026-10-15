r.d(t, { S: () => f });
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
    h = r(440938),
    m = r(590180),
    E = r(597783),
    p = r(212407),
    _ = r(758836),
    C = r(652215),
    v = r(105292),
    L = r(105499);
function f(e) {
    let {
            category: t,
            subblock: r,
            badgeText: s,
            enablePreview: f,
            pageType: S = _.G2.HOME,
            className: I,
            handleTransition: x,
            listItemProps: A,
        } = e,
        k = r?.categorySkuId;
    null == k && null != r && (k = m.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let y = k ?? t?.skuId ?? "",
        { handleCardVisibilityChange: O } = (0, E.Z)(y, S, "marketing featured block"),
        N = (0, p.s4)(t, r, f),
        j = l.useRef(null),
        T = r?.bodyText,
        b = r?.name ?? t?.name,
        B = null != b ? v.intl.formatToPlainString(v.t.frSHlf, { destination: b }) : void 0,
        w = (0, h.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: j,
        onChange: O,
        threshold: 0,
        children: (0, n.jsxs)(o.D, {
            className: a()(L.oT, I),
            innerRef: j,
            style: { ...(null != N && { backgroundImage: `url(${N})` }) },
            ...A,
            onClick: () => {
                (x({
                    sourceButton: "shop marketing tile",
                    categorySkuId: y,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: w?.sessionId,
                        sku_id: y,
                        page_type: S,
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
                        null != T &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: L.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: T,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: L.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: v.intl.string(v.t.jVcuVY),
                        "aria-label": B,
                        tabIndex: A?.tabIndex,
                        onClick: (e) => {
                            (x({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: y,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: w?.sessionId,
                                    sku_id: y,
                                    page_type: S,
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
