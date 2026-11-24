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
    E = n(325802),
    p = n(212407),
    f = n(758836),
    x = n(652215),
    C = n(792996),
    A = n(762917);
function v(e) {
    let { skuId: t, unpublishedAt: n } = e,
        r = (0, d.ty)(t),
        s = (0, g.$)(r) ? r : null;
    return null != s
        ? (0, l.jsx)(E.b, { promotion: s })
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
                    handleTransition: g,
                    listItemProps: E,
                } = e,
                b = a?.categorySkuId;
            null == b && null != a && (b = u.A.getCategoryByStoreListingId(a?.categoryStoreListingId)?.skuId);
            let L = b ?? n?.skuId ?? "",
                { handleCardVisibilityChange: _ } = (0, m.Z)(L, d, "marketing featured block"),
                y = (0, p.s4)(n, a, c),
                I = r.useRef(null),
                S = a?.bodyText,
                N = n?.isOrbsExclusive,
                k = a?.name ?? n?.name,
                j = null != k ? C.intl.formatToPlainString(C.t.frSHlf, { destination: k }) : void 0,
                O = (0, o.uM)(),
                T = r.useCallback(
                    (e, t) => {
                        (g({ sourceButton: e, categorySkuId: L, isInternalShopDeeplink: !0, isOrbsExclusive: N }),
                            i.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: O?.sessionId,
                                sku_id: L,
                                page_type: d,
                                page_section: O?.pageSection,
                                page_category: O?.pageCategory,
                                tile_type: "FEATURED_BLOCK",
                                tile_position: String(O?.tilePosition),
                                cta_name: t,
                            }));
                    },
                    [g, L, N, d, O?.sessionId, O?.pageSection, O?.pageCategory, O?.tilePosition],
                ),
                R = r.useCallback(() => {
                    T("shop marketing take me there button", "Take me there button");
                }, [T]),
                D = r.useCallback(() => {
                    T("shop marketing tile", null);
                }, [T]);
            return (0, l.jsx)(s.L, {
                innerRef: I,
                onChange: _,
                threshold: 0,
                children: (0, l.jsx)(h.Ay, {
                    layout: t,
                    innerRef: I,
                    backgroundImageUrl: y,
                    title:
                        null != S
                            ? { text: S, variant: "heading-sm/medium", color: a?.bannerTextColor, className: A.D }
                            : void 0,
                    badge: (0, l.jsx)(v, { skuId: L, unpublishedAt: a?.unpublishedAt ?? n?.unpublishedAt }),
                    ctaText: C.intl.string(C.t.jVcuVY),
                    "aria-label": j,
                    onButtonClick: R,
                    onBlockClick: D,
                    listItemProps: E,
                }),
            });
        },
    },
);
