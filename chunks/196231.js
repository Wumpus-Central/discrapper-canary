r.d(t, { S: () => k });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(269115),
    o = r(812993),
    u = r(939249),
    c = r(297264),
    d = r(821609),
    g = r(174459),
    h = r(440938),
    m = r(590180),
    p = r(993408),
    E = r(304210),
    _ = r(597783),
    C = r(347478),
    v = r(325802),
    L = r(212407),
    f = r(758836),
    I = r(652215),
    S = r(105292),
    A = r(105499);
function x(e) {
    let { skuId: t, unpublishedAt: r } = e,
        l = (0, E.ty)(t),
        s = (0, C.$)(l) ? l : null,
        i = null;
    return (
        null != s
            ? (i = (0, n.jsx)(v.b, { promotion: s, className: a()(A.qr, A.Cz) }))
            : (0, p.HF)(r) &&
              (i = (0, n.jsx)(o.Lp, { disableColor: !0, text: S.intl.string(S.t["h/uBCR"]), className: A.qr })),
        null != i ? (0, n.jsx)("div", { className: A.pv, children: i }) : null
    );
}
function k(e) {
    let {
            category: t,
            subblock: r,
            enablePreview: s,
            pageType: o = f.G2.HOME,
            className: p,
            handleTransition: E,
            listItemProps: C,
        } = e,
        v = r?.categorySkuId;
    null == v && null != r && (v = m.A.getCategoryByStoreListingId(r?.categoryStoreListingId)?.skuId);
    let k = v ?? t?.skuId ?? "",
        { handleCardVisibilityChange: y } = (0, _.Z)(k, o, "marketing featured block"),
        O = (0, L.s4)(t, r, s),
        N = l.useRef(null),
        j = r?.bodyText,
        T = r?.name ?? t?.name,
        b = null != T ? S.intl.formatToPlainString(S.t.frSHlf, { destination: T }) : void 0,
        B = (0, h.uM)();
    return (0, n.jsx)(i.L, {
        innerRef: N,
        onChange: y,
        threshold: 0,
        children: (0, n.jsxs)(u.D, {
            className: a()(A.oT, p),
            innerRef: N,
            style: { ...(null != O && { backgroundImage: `url(${O})` }) },
            ...C,
            onClick: () => {
                (E({
                    sourceButton: "shop marketing tile",
                    categorySkuId: k,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: t?.isOrbsExclusive,
                }),
                    g.default.track(I.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: B?.sessionId,
                        sku_id: k,
                        page_type: o,
                        page_section: B?.pageSection,
                        page_category: B?.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(B?.tilePosition),
                        cta_name: null,
                    }));
            },
            children: [
                (0, n.jsx)(x, { skuId: k, unpublishedAt: r?.unpublishedAt ?? t?.unpublishedAt }),
                (0, n.jsx)("div", {
                    className: A.Gh,
                    children:
                        null != j &&
                        (0, n.jsx)(c.D, {
                            lineClamp: 4,
                            className: A.BN,
                            style: { color: r?.bannerTextColor ?? "white" },
                            variant: "heading-md/medium",
                            children: j,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: A.b2,
                    children: (0, n.jsx)(d.$, {
                        variant: "overlay-primary",
                        text: S.intl.string(S.t.jVcuVY),
                        "aria-label": b,
                        tabIndex: C?.tabIndex,
                        onClick: (e) => {
                            (E({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: k,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: t?.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                g.default.track(I.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: B?.sessionId,
                                    sku_id: k,
                                    page_type: o,
                                    page_section: B?.pageSection,
                                    page_category: B?.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(B?.tilePosition),
                                    cta_name: "Take me there button",
                                }));
                        },
                    }),
                }),
            ],
        }),
    });
}
