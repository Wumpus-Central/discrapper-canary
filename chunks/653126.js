n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(622535),
    o = n(481060),
    c = n(100527),
    u = n(994587),
    d = n(297651),
    g = n(993222),
    p = n(932083),
    f = n(719075),
    C = n(558261),
    h = n(819882),
    _ = n(786040),
    m = n(659755),
    b = n(29121),
    E = n(215023),
    S = n(213301);
let v = l.memo(function (e) {
        let { product: t } = e,
            n = (0, u.Nd)(),
            a = null == n ? void 0 : n.tab,
            v = (0, b.zQ)(t),
            x = l.useRef(null),
            { handleCardVisibilityChange: O } = (0, d.E)(t.skuId, a === E.AW.CATALOG ? "full" : a),
            y = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD),
            [T, L] = (0, _.SS)(t);
        return (0, r.jsx)(i.$, {
            innerRef: x,
            onChange: O,
            threshold: 0,
            children: (0, r.jsx)("div", {
                className: S.baseProductCardHoverContainer,
                children: (0, r.jsx)(o.kL8, {
                    ref: x,
                    onClick: y,
                    "aria-label": v,
                    className: S.baseProductCardContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.baseProductCardContentContainer,
                        children: [
                            (0, r.jsx)(g.Z, { skuId: t.skuId }),
                            (0, r.jsxs)("div", {
                                className: S.innerContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: s()(S.baseProductCardDetailsContainer, {
                                            [S.hasVariantSwitcher]: null != L,
                                        }),
                                        children: [
                                            (0, r.jsx)(p.Z, { skuId: t.skuId }),
                                            null != L &&
                                                (0, r.jsx)("div", {
                                                    className: S.hoveredVariantSwitcher,
                                                    children: L,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.baseProductCardFooter,
                                        children: [(0, r.jsx)(f.Z, { skuId: t.skuId }), L],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: S.innerHover,
                                children: (0, r.jsxs)(o.hE2, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            skuId: t.skuId,
                                            cardRef: x,
                                            selectedVariantIndex: T,
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            skuId: t.skuId,
                                            cardRef: x,
                                            selectedVariantIndex: T,
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(m.Z, { skuId: t.skuId }),
                        ],
                    }),
                }),
            }),
        });
    }),
    x = (e) => {
        let { skuId: t } = e,
            n = (0, _.LJ)(t);
        return null == n ? null : (0, r.jsx)(v, { product: n });
    };
