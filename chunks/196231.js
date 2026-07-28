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
    S = n(212407),
    L = n(758836),
    m = n(652215),
    p = n(375708),
    C = n(459550);
function h(e) {
    let t,
        {
            category: n,
            subblock: r,
            badgeText: h,
            enablePreview: y,
            pageType: O = L.G2.HOME,
            className: I,
            handleTransition: k,
        } = e;
    null != r && (t = _.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let x = t ?? n?.skuId ?? "",
        { handleCardVisibilityChange: f } = (0, A.Z)(x, O, "marketing featured block"),
        v = (0, S.s4)(n, r, y),
        T = l.useRef(null),
        b = r?.bodyText,
        B = r?.name ?? n?.name,
        R = null != B ? p.intl.formatToPlainString(p.t.frSHlf, { destination: B }) : void 0,
        j = (0, g.uM)();
    return (0, s.jsx)(i.L, {
        innerRef: T,
        onChange: f,
        threshold: 0,
        children: (0, s.jsxs)(o.D, {
            className: a()(C.oT, I),
            innerRef: T,
            style: { ...(null != v && { backgroundImage: `url(${v})` }) },
            onClick: () => {
                k({
                    sourceButton: "shop marketing tile",
                    categorySkuId: x,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: n?.isOrbsExclusive,
                }),
                    E.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: x,
                        page_type: O,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(j?.tilePosition),
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
                        text: p.intl.string(p.t.jVcuVY),
                        "aria-label": R,
                        onClick: (e) => {
                            k({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: x,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: n?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                E.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: j?.sessionId,
                                    sku_id: x,
                                    page_type: O,
                                    page_section: j?.pageSection,
                                    page_category: j?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(j?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
}
