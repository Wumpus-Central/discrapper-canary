l.d(t, {
    S: () => p,
});
var n = l(627968),
    r = l(64700),
    s = l(230109),
    a = l(397927),
    i = l(954571),
    o = l(440938),
    c = l(590180),
    u = l(597783),
    d = l(212407),
    f = l(652215),
    b = l(985018),
    g = l(201073);
let p = (e) => {
    var t, l, p;
    let m,
        { category: h, subblock: E, badgeText: v, handleTransition: A } = e;
    null != E &&
        (m =
            null == (p = c.A.getCategoryByStoreListingId(null == E ? void 0 : E.categoryStoreListingId))
                ? void 0
                : p.skuId);
    let x = null != (t = null != m ? m : null == h ? void 0 : h.skuId) ? t : "",
        { handleCardVisibilityChange: S } = (0, u.Z)(x, "home", "marketing featured block"),
        C = (0, d.s4)(h, E),
        O = r.useRef(null),
        _ = null == E ? void 0 : E.bodyText,
        y = (0, o.uM)();
    return (0, n.jsx)(s.L, {
        innerRef: O,
        onChange: S,
        threshold: 0,
        children: (0, n.jsxs)(a.DUT, {
            className: g.oT,
            innerRef: O,
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(l);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = l[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {},
                null != C && {
                    backgroundImage: "url(".concat(C, ")"),
                },
            ),
            onClick: () => {
                A({
                    sourceButton: "shop marketing tile",
                    categorySkuId: x,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == h ? void 0 : h.isOrbsExclusive,
                }),
                    i.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                        sku_id: x,
                        page_type: "home",
                        page_section: null == y ? void 0 : y.pageSection,
                        page_category: null == y ? void 0 : y.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == y ? void 0 : y.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != v &&
                    (0, n.jsx)(a.LpS, {
                        disableColor: !0,
                        text: v,
                        className: g.pv,
                    }),
                (0, n.jsx)("div", {
                    className: g.Gh,
                    children:
                        null != _ &&
                        (0, n.jsx)(a.Heading, {
                            lineClamp: 4,
                            className: g.BN,
                            style: {
                                color: null != (l = null == E ? void 0 : E.bannerTextColor) ? l : "white",
                            },
                            variant: "heading-md/medium",
                            children: _,
                        }),
                }),
                (0, n.jsx)("div", {
                    className: g.b2,
                    children: (0, n.jsx)(a.Button, {
                        variant: "overlay-primary",
                        text: b.intl.string(b.t.jVcuVY),
                        onClick: (e) => {
                            A({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: x,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: null == h ? void 0 : h.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                i.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                    sku_id: x,
                                    page_type: "home",
                                    page_section: null == y ? void 0 : y.pageSection,
                                    page_category: null == y ? void 0 : y.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == y ? void 0 : y.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
