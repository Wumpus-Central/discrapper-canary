var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(831259),
    o = n(805251),
    c = n(939249),
    u = n(534514),
    d = n(821609),
    m = n(129230),
    g = n(440938),
    h = n(590180),
    p = n(993408),
    x = n(304210),
    f = n(597783),
    E = n(347478),
    v = n(325802),
    _ = n(212407),
    C = n(758836),
    y = n(652215),
    b = n(792996),
    S = n(105499);
function I(e) {
    let { skuId: t, unpublishedAt: n } = e,
        r = (0, x.ty)(t),
        s = (0, E.$)(r) ? r : null,
        a = null;
    return (
        null != s
            ? (a = (0, l.jsx)(v.b, { promotion: s }))
            : (0, p.HF)(n) &&
              (a = (0, l.jsx)(o.E, { type: { text: b.intl.string(b.t["h/uBCR"]) }, variant: "inverted" })),
        null != a ? (0, l.jsx)("div", { className: S.pv, children: a }) : null
    );
}
n.d(
    t,
    {},
    {
        S: function (e) {
            let {
                    category: t,
                    subblock: n,
                    enablePreview: s,
                    pageType: o = C.G2.HOME,
                    className: p,
                    handleTransition: x,
                    listItemProps: E,
                } = e,
                v = n?.categorySkuId;
            null == v && null != n && (v = h.A.getCategoryByStoreListingId(n?.categoryStoreListingId)?.skuId);
            let A = v ?? t?.skuId ?? "",
                { handleCardVisibilityChange: j } = (0, f.Z)(A, o, "marketing featured block"),
                L = (0, _.s4)(t, n, s),
                k = r.useRef(null),
                N = n?.bodyText,
                O = n?.name ?? t?.name,
                T = null != O ? b.intl.formatToPlainString(b.t.frSHlf, { destination: O }) : void 0,
                R = (0, g.uM)();
            return (0, l.jsx)(i.L, {
                innerRef: k,
                onChange: j,
                threshold: 0,
                children: (0, l.jsxs)(c.D, {
                    className: a()(S.oT, p),
                    innerRef: k,
                    style: { ...(null != L && { backgroundImage: `url(${L})` }) },
                    ...E,
                    onClick: () => {
                        (x({
                            sourceButton: "shop marketing tile",
                            categorySkuId: A,
                            isInternalShopDeeplink: !0,
                            isOrbsExclusive: t?.isOrbsExclusive,
                        }),
                            m.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: R?.sessionId,
                                sku_id: A,
                                page_type: o,
                                page_section: R?.pageSection,
                                page_category: R?.pageCategory,
                                tile_type: "FEATURED_BLOCK",
                                tile_position: String(R?.tilePosition),
                                cta_name: null,
                            }));
                    },
                    children: [
                        (0, l.jsx)(I, { skuId: A, unpublishedAt: n?.unpublishedAt ?? t?.unpublishedAt }),
                        (0, l.jsx)("div", {
                            className: S.Gh,
                            children:
                                null != N &&
                                (0, l.jsx)(u.D, {
                                    lineClamp: 4,
                                    className: S.BN,
                                    style: { color: n?.bannerTextColor ?? "white" },
                                    variant: "heading-sm/medium",
                                    children: N,
                                }),
                        }),
                        (0, l.jsx)("div", {
                            className: S.b2,
                            children: (0, l.jsx)(d.$, {
                                variant: "overlay-primary",
                                text: b.intl.string(b.t.jVcuVY),
                                "aria-label": T,
                                tabIndex: E?.tabIndex,
                                onClick: (e) => {
                                    (x({
                                        sourceButton: "shop marketing take me there button",
                                        categorySkuId: A,
                                        isInternalShopDeeplink: !0,
                                        isOrbsExclusive: t?.isOrbsExclusive,
                                    }),
                                        e.stopPropagation(),
                                        m.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: R?.sessionId,
                                            sku_id: A,
                                            page_type: o,
                                            page_section: R?.pageSection,
                                            page_category: R?.pageCategory,
                                            tile_type: "FEATURED_BLOCK",
                                            tile_position: String(R?.tilePosition),
                                            cta_name: "Take me there button",
                                        }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
    },
);
