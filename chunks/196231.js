n.d(t, { S: () => k });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(269115),
    i = n(812993),
    u = n(939249),
    c = n(297264),
    d = n(821609),
    p = n(174459),
    m = n(440938),
    g = n(590180),
    h = n(993408),
    C = n(304210),
    f = n(597783),
    E = n(347478),
    v = n(325802),
    x = n(212407),
    y = n(758836),
    _ = n(652215),
    I = n(105292),
    L = n(105499);
function A(e) {
    let { skuId: t, unpublishedAt: n } = e,
        l = (0, C.ty)(t),
        s = (0, E.$)(l) ? l : null,
        o = null;
    return (
        null != s
            ? (o = (0, r.jsx)(v.b, { promotion: s, className: a()(L.qr, L.Cz) }))
            : (0, h.HF)(n) &&
              (o = (0, r.jsx)(i.Lp, { disableColor: !0, text: I.intl.string(I.t["h/uBCR"]), className: L.qr })),
        null != o ? (0, r.jsx)("div", { className: L.pv, children: o }) : null
    );
}
function k(e) {
    let {
            category: t,
            subblock: n,
            enablePreview: s,
            pageType: i = y.G2.HOME,
            className: h,
            handleTransition: C,
            listItemProps: E,
        } = e,
        v = n?.categorySkuId;
    null == v && null != n && (v = g.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let k = v ?? t?.skuId ?? "",
        { handleCardVisibilityChange: S } = (0, f.Z)(k, i, "marketing featured block"),
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
            className: a()(L.oT, h),
            innerRef: O,
            style: { ...(null != b && { backgroundImage: `url(${b})` }) },
            ...E,
            onClick: () => {
                (C({
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
                (0, r.jsx)(A, { skuId: k, unpublishedAt: n?.unpublishedAt ?? t?.unpublishedAt }),
                (0, r.jsx)("div", {
                    className: L.Gh,
                    children:
                        null != j &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: L.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: j,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: L.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: I.intl.string(I.t.jVcuVY),
                        "aria-label": w,
                        tabIndex: E?.tabIndex,
                        onClick: (e) => {
                            (C({
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
