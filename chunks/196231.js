n.d(t, { S: () => S });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(269115),
    i = n(62010),
    u = n(939249),
    c = n(534514),
    d = n(821609),
    p = n(174459),
    m = n(440938),
    g = n(590180),
    h = n(993408),
    E = n(304210),
    f = n(597783),
    C = n(347478),
    v = n(325802),
    _ = n(212407),
    x = n(758836),
    y = n(652215),
    A = n(105292),
    I = n(105499);
function L(e) {
    let { skuId: t, unpublishedAt: n } = e,
        l = (0, E.ty)(t),
        s = (0, C.$)(l) ? l : null,
        a = null;
    return (
        null != s
            ? (a = (0, r.jsx)(v.b, { promotion: s }))
            : (0, h.HF)(n) &&
              (a = (0, r.jsx)(i.E, { type: { text: A.intl.string(A.t["h/uBCR"]) }, variant: "inverted" })),
        null != a ? (0, r.jsx)("div", { className: I.pv, children: a }) : null
    );
}
function S(e) {
    let {
            category: t,
            subblock: n,
            enablePreview: s,
            pageType: i = x.G2.HOME,
            className: h,
            handleTransition: E,
            listItemProps: C,
        } = e,
        v = n?.categorySkuId;
    null == v && null != n && (v = g.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
    let S = v ?? t?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, f.Z)(S, i, "marketing featured block"),
        b = (0, _.s4)(t, n, s),
        O = l.useRef(null),
        j = n?.bodyText,
        N = n?.name ?? t?.name,
        w = null != N ? A.intl.formatToPlainString(A.t.frSHlf, { destination: N }) : void 0,
        T = (0, m.uM)();
    return (0, r.jsx)(o.L, {
        innerRef: O,
        onChange: k,
        threshold: 0,
        children: (0, r.jsxs)(u.D, {
            className: a()(I.oT, h),
            innerRef: O,
            style: { ...(null != b && { backgroundImage: `url(${b})` }) },
            ...C,
            onClick: () => {
                (E({
                    sourceButton: "shop marketing tile",
                    categorySkuId: S,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    p.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: T?.sessionId,
                        sku_id: S,
                        page_type: i,
                        page_section: T?.pageSection,
                        page_category: T?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(T?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                (0, r.jsx)(L, { skuId: S, unpublishedAt: n?.unpublishedAt ?? t?.unpublishedAt }),
                (0, r.jsx)("div", {
                    className: I.Gh,
                    children:
                        null != j &&
                        (0, r.jsx)(c.D, {
                            lineClamp: 4,
                            className: I.BN,
                            style: { color: n?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: j,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: I.b2,
                    children: (0, r.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: A.intl.string(A.t.jVcuVY),
                        "aria-label": w,
                        tabIndex: C?.tabIndex,
                        onClick: (e) => {
                            (E({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: S,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                p.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: T?.sessionId,
                                    sku_id: S,
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
