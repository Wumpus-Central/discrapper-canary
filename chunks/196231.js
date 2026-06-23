n.d(t, { S: () => p });
var s = n(627968),
    l = n(64700),
    r = n(269115),
    a = n(939249),
    i = n(812993),
    o = n(534514),
    u = n(821609),
    c = n(174459),
    d = n(440938),
    g = n(590180),
    E = n(597783),
    _ = n(212407),
    m = n(758836),
    S = n(652215),
    A = n(375708),
    L = n(941734);
function p(e) {
    let t,
        { category: n, subblock: p, badgeText: h, enablePreview: y, pageType: C = m.G2.HOME, handleTransition: O } = e;
    null != p && (t = g.A.getCategoryByStoreListingId(p?.categoryStoreListingId)?.skuId);
    let I = t ?? n?.skuId ?? "",
        { handleCardVisibilityChange: x } = (0, E.Z)(I, C, "marketing featured block"),
        v = (0, _.s4)(n, p, y),
        k = l.useRef(null),
        f = p?.bodyText,
        T = p?.name ?? n?.name,
        b = null != T ? A.intl.formatToPlainString(A.t.frSHlf, { destination: T }) : void 0,
        B = (0, d.uM)();
    return (0, s.jsx)(r.L, {
        innerRef: k,
        onChange: x,
        threshold: 0,
        children: (0, s.jsxs)(a.D, {
            className: L.oT,
            innerRef: k,
            style: { ...(null != v && { backgroundImage: `url(${v})` }) },
            onClick: () => {
                O({
                    sourceButton: "shop marketing tile",
                    categorySkuId: I,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: n?.isOrbsExclusive,
                }),
                    c.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: B?.sessionId,
                        sku_id: I,
                        page_type: C,
                        page_section: B?.pageSection,
                        page_category: B?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(B?.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != h && (0, s.jsx)(i.Lp, { disableColor: !0, text: h, className: L.pv }),
                (0, s.jsx)("div", {
                    className: L.Gh,
                    children:
                        null != f &&
                        (0, s.jsx)(o.D, {
                            lineClamp: 4,
                            className: L.BN,
                            style: { color: p?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: f,
                        }),
                }),
                (0, s.jsx)("div", {
                    className: L.b2,
                    children: (0, s.jsx)(u.$, {
                        variant: "overlay-primary",
                        text: A.intl.string(A.t.jVcuVY),
                        "aria-label": b,
                        onClick: (e) => {
                            O({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: I,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: n?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                c.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: B?.sessionId,
                                    sku_id: I,
                                    page_type: C,
                                    page_section: B?.pageSection,
                                    page_category: B?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(B?.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
}
