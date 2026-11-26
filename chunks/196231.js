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
    E = n(325802),
    f = n(212407),
    p = n(758836),
    x = n(652215),
    v = n(792996),
    C = n(762917);
function A(e) {
    let { skuId: t, unpublishedAt: n } = e,
        r = (0, d.ty)(t),
        s = (0, h.$)(r) ? r : null;
    return null != s
        ? (0, l.jsx)(E.b, { promotion: s })
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
                    pageType: d = p.G2.HOME,
                    handleTransition: h,
                    listItemProps: E,
                } = e,
                L = a?.categorySkuId;
            null == L && null != a && (L = u.A.getCategoryByStoreListingId(a?.categoryStoreListingId)?.skuId);
            let b = L ?? n?.skuId ?? "",
                { handleCardVisibilityChange: y } = (0, m.Z)(b, d, "marketing featured block"),
                _ = (0, f.s4)(n, a, c),
                I = r.useRef(null),
                S = a?.bodyText,
                N = n?.isOrbsExclusive,
                j = a?.name ?? n?.name,
                k = null != j ? v.intl.formatToPlainString(v.t.frSHlf, { destination: j }) : void 0,
                O = (0, o.uM)(),
                T = r.useCallback(
                    (e, t) => {
                        (h({ sourceButton: e, categorySkuId: b, isInternalShopDeeplink: !0, isOrbsExclusive: N }),
                            i.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: O?.sessionId,
                                sku_id: b,
                                page_type: d,
                                page_section: O?.pageSection,
                                page_category: O?.pageCategory,
                                tile_type: "FEATURED_BLOCK",
                                tile_position: String(O?.tilePosition),
                                cta_name: t,
                            }));
                    },
                    [h, b, N, d, O?.sessionId, O?.pageSection, O?.pageCategory, O?.tilePosition],
                ),
                R = r.useCallback(() => {
                    T("shop marketing take me there button", "Take me there button");
                }, [T]),
                D = r.useCallback(() => {
                    T("shop marketing tile", null);
                }, [T]);
            return (0, l.jsx)(s.L, {
                innerRef: I,
                onChange: y,
                threshold: 0,
                children: (0, l.jsx)(g.Ay, {
                    layout: t,
                    innerRef: I,
                    backgroundImageUrl: _,
                    title:
                        null != S
                            ? { text: S, variant: "heading-sm/medium", color: a?.bannerTextColor, className: C.D }
                            : void 0,
                    badge: (0, l.jsx)(A, { skuId: b, unpublishedAt: a?.unpublishedAt ?? n?.unpublishedAt }),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    "aria-label": k,
                    onButtonClick: R,
                    onBlockClick: D,
                    listItemProps: E,
                }),
            });
        },
    },
);
