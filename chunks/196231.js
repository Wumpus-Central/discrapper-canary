n.d(t, { S: () => k });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(269115),
    i = n(62010),
    u = n(939249),
    c = n(297264),
    d = n(821609),
    p = n(174459),
    m = n(440938),
    g = n(590180),
    h = n(993408),
    f = n(304210),
    C = n(597783),
    E = n(347478),
    v = n(325802),
    x = n(212407),
    y = n(758836),
    _ = n(652215),
    I = n(105292),
    A = n(105499);
function L(e) {
    let { skuId: t, unpublishedAt: n } = e,
        l = (0, f.ty)(t),
        s = (0, E.$)(l) ? l : null,
        a = null;
    return (
        null != s
            ? (a = (0, r.jsx)(v.b, { promotion: s }))
            : (0, h.HF)(n) &&
              (a = (0, r.jsx)(i.E, { type: { text: I.intl.string(I.t["h/uBCR"]) }, variant: "inverted" })),
        null != a ? (0, r.jsx)("div", { className: A.pv, children: a }) : null
    );
}
function k(e) {
    let {
            category: t,
            subblock: n,
            enablePreview: s,
            pageType: i = y.G2.HOME,
            className: h,
            handleTransition: f,
            listItemProps: E,
        } = e,
        v = n?.categorySkuId;
    null == v && null != n && (v = g.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let k = v ?? t?.skuId ?? "",
        { handleCardVisibilityChange: S } = (0, C.Z)(k, i, "marketing featured block"),
        b = (0, x.s4)(t, n, s),
        O = l.useRef(null),
        j = n?.bodyText,
        N = n?.name ?? t?.name,
        w = null != N ? I.intl.formatToPlainString(I.t.frSHlf, { destination: N }) : void 0,
        T = (0, m.uM)();
    return (0, r.jsx)(o.L, {
        innerRef: O,
        onChange: S,
        threshold: 0,
        children: (0, r.jsxs)(u.D, {
            className: a()(A.oT, h),
            innerRef: O,
            style: { ...(null != b && { backgroundImage: `url(${b})` }) },
            ...E,
            onClick: () => {
                (f({
                    sourceButton: "shop marketing tile",
                    categorySkuId: k,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    p.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: T?.sessionId,
                        sku_id: k,
                        page_type: i,
                        page_section: T?.pageSection,
                        page_category: T?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(T?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                (0, r.jsx)(L, { skuId: k, unpublishedAt: n?.unpublishedAt ?? t?.unpublishedAt }),
                (0, r.jsx)("div", {
                    className: A.Gh,
                    children:
                        null != j &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: A.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: j,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: A.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: I.intl.string(I.t.jVcuVY),
                        "aria-label": w,
                        tabIndex: E?.tabIndex,
                        onClick: (e) => {
                            (f({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: k,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                p.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: T?.sessionId,
                                    sku_id: k,
                                    page_type: i,
                                    page_section: T?.pageSection,
                                    page_category: T?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(T?.tilePosition),
                                    cta_name: "Take me there button",
                                }));
                        },
                    }),
                }),
            ],
        }),
    });
}
