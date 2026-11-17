var l = n(477900),
    r = n(582128),
    s = n(831259),
    a = n(805251),
    i = n(129230),
    o = n(857512),
    u = n(590180),
    c = n(993408),
    d = n(304210),
    m = n(597783),
    h = n(347478),
    g = n(454688),
    p = n(325802),
    E = n(212407),
    f = n(758836),
    x = n(652215),
    C = n(792996),
    v = n(762917);
function y(e) {
    let { skuId: t, unpublishedAt: n } = e,
        r = (0, d.ty)(t),
        s = (0, h.$)(r) ? r : null;
    return null != s
        ? (0, l.jsx)(p.b, { promotion: s })
        : (0, c.HF)(n)
          ? (0, l.jsx)(a.E, { type: { text: C.intl.string(C.t["h/uBCR"]) }, variant: "inverted" })
          : null;
}
n.d(
    t,
    {},
    {
        S: function (e) {
            let {
                    layout: t,
                    category: n,
                    subblock: a,
                    enablePreview: c,
                    pageType: d = f.G2.HOME,
                    handleTransition: h,
                    listItemProps: p,
                } = e,
                A = a?.categorySkuId;
            null == A && null != a && (A = u.A.getCategoryByStoreListingId(a?.categoryStoreListingId)?.skuId);
            let _ = A ?? n?.skuId ?? "",
                { handleCardVisibilityChange: L } = (0, m.Z)(_, d, "marketing featured block"),
                b = (0, E.s4)(n, a, c),
                S = r.useRef(null),
                I = a?.bodyText,
                j = n?.isOrbsExclusive,
                k = a?.name ?? n?.name,
                N = null != k ? C.intl.formatToPlainString(C.t.frSHlf, { destination: k }) : void 0,
                O = (0, o.uM)(),
                R = r.useCallback(
                    (e, t) => {
                        (h({ sourceButton: e, categorySkuId: _, isInternalShopDeeplink: !0, isOrbsExclusive: j }),
                            i.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: O?.sessionId,
                                sku_id: _,
                                page_type: d,
                                page_section: O?.pageSection,
                                page_category: O?.pageCategory,
                                tile_type: "FEATURED_BLOCK",
                                tile_position: String(O?.tilePosition),
                                cta_name: t,
                            }));
                    },
                    [h, _, j, d, O?.sessionId, O?.pageSection, O?.pageCategory, O?.tilePosition],
                ),
                T = r.useCallback(() => {
                    R("shop marketing take me there button", "Take me there button");
                }, [R]),
                D = r.useCallback(() => {
                    R("shop marketing tile", null);
                }, [R]);
            return (0, l.jsx)(s.L, {
                innerRef: S,
                onChange: L,
                threshold: 0,
                children: (0, l.jsx)(g.Ay, {
                    layout: t,
                    innerRef: S,
                    backgroundImageUrl: b,
                    title:
                        null != I
                            ? { text: I, variant: "heading-sm/medium", color: a?.bannerTextColor, className: v.D }
                            : void 0,
                    badge: (0, l.jsx)(y, { skuId: _, unpublishedAt: a?.unpublishedAt ?? n?.unpublishedAt }),
                    ctaText: C.intl.string(C.t.jVcuVY),
                    "aria-label": N,
                    onButtonClick: T,
                    onBlockClick: D,
                    listItemProps: p,
                }),
            });
        },
    },
);
