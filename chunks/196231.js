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
    g = n(347478),
    h = n(454688),
    p = n(325802),
    f = n(212407),
    E = n(758836),
    x = n(652215),
    v = n(792996),
    C = n(762917);
function A(e) {
    let { skuId: t, unpublishedAt: n } = e,
        r = (0, d.ty)(t),
        s = (0, g.$)(r) ? r : null;
    return null != s
        ? (0, l.jsx)(p.b, { promotion: s })
        : (0, c.HF)(n)
          ? (0, l.jsx)(a.E, { type: { text: v.intl.string(v.t["h/uBCR"]) }, variant: "inverted" })
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
                    pageType: d = E.G2.HOME,
                    handleTransition: g,
                    listItemProps: p,
                } = e,
                y = a?.categorySkuId;
            null == y && null != a && (y = u.A.getCategoryByStoreListingId(a?.categoryStoreListingId)?.skuId);
            let _ = y ?? n?.skuId ?? "",
                { handleCardVisibilityChange: b } = (0, m.Z)(_, d, "marketing featured block"),
                S = (0, f.s4)(n, a, c),
                L = r.useRef(null),
                I = a?.bodyText,
                k = n?.isOrbsExclusive,
                j = a?.name ?? n?.name,
                N = null != j ? v.intl.formatToPlainString(v.t.frSHlf, { destination: j }) : void 0,
                O = (0, o.uM)(),
                R = r.useCallback(
                    (e, t) => {
                        (g({ sourceButton: e, categorySkuId: _, isInternalShopDeeplink: !0, isOrbsExclusive: k }),
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
                    [g, _, k, d, O?.sessionId, O?.pageSection, O?.pageCategory, O?.tilePosition],
                ),
                T = r.useCallback(() => {
                    R("shop marketing take me there button", "Take me there button");
                }, [R]),
                D = r.useCallback(() => {
                    R("shop marketing tile", null);
                }, [R]);
            return (0, l.jsx)(s.L, {
                innerRef: L,
                onChange: b,
                threshold: 0,
                children: (0, l.jsx)(h.Ay, {
                    layout: t,
                    innerRef: L,
                    backgroundImageUrl: S,
                    title:
                        null != I
                            ? { text: I, variant: "heading-sm/medium", color: a?.bannerTextColor, className: C.D }
                            : void 0,
                    badge: (0, l.jsx)(A, { skuId: _, unpublishedAt: a?.unpublishedAt ?? n?.unpublishedAt }),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    "aria-label": N,
                    onButtonClick: T,
                    onBlockClick: D,
                    listItemProps: p,
                }),
            });
        },
    },
);
