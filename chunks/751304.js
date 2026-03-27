r.d(t, { A: () => S });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    u = r(575593),
    o = r(230109),
    c = r(397927),
    d = r(444927),
    f = r(793574),
    m = r(713517),
    h = r(440938),
    x = r(161918),
    p = r(597783),
    g = r(859587),
    A = r(536572),
    C = r(268959),
    I = r(387945),
    b = r(638006),
    v = r(140877),
    k = r(834384),
    E = r(157200),
    j = r(561769),
    y = r(364616),
    R = r(666839),
    T = r(935094),
    _ = r(758836),
    L = r(551497);
let P = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: a,
                hidePrice: d,
                hidePrimaryCTA: P,
                hideSecondaryCTA: S,
                badgeOverride: N,
                skipLimitedTimeCheck: O,
                onClickCard: V,
                onClickPrimaryCTA: B,
                onClickSecondaryCTA: M,
                onMouseEnter: W,
                onMouseLeave: w,
                onFocus: H,
                onBlur: U,
                primaryCTAText: G,
                secondaryCTAIcon: D,
                productNameClassName: F,
                badgeClassName: z,
                cardClassName: Q,
                prioritizedCurrency: X,
                aspectRatio: Y,
            } = e,
            { previewingVariantIndex: q, handleEntering: K, handleLeaving: Z } = (0, T.f)(t),
            $ = (0, j.gZ)() ?? X,
            J = (0, x.Mk)(),
            ee = J?.tab,
            et = (0, h.uM)(),
            er = l.useMemo(() => (0, j.UU)(t, ee, et), [t, ee, et]),
            en = (0, A.s7)(t),
            el = l.useRef(null),
            { isHoveringOrFocusing: ei } = (0, m.A)(el),
            { handleCardVisibilityChange: es } = (0, p.Z)(t.skuId, ee === _.G2.CATALOG ? "full" : ee),
            ea = (0, j.ql)(t, f.A.COLLECTIBLES_SHOP_CARD, er);
        (0, g.x)(ei, t);
        let eu = t.type === u.R.VARIANTS_GROUP && !a,
            eo = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: ea }), [ea]),
            ec = !P || !S,
            ed = !(d && i) || eu,
            ef = ed || ec,
            em = ec || eu;
        return (0, n.jsx)(o.L, {
            innerRef: el,
            onChange: es,
            threshold: 0,
            children: (0, n.jsx)(c.sqX, {
                ref: el,
                onClick: V ?? ea,
                "aria-label": en,
                className: s()(Q, L.ty, { [L.yo]: ei }),
                onFocus: () => H?.(t.skuId),
                onBlur: () => U?.(t.skuId),
                onMouseEnter: () => W?.(t.skuId),
                onMouseLeave: () => w?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: L.qt,
                    style: { aspectRatio: Y },
                    children: [
                        (0, n.jsx)("div", {
                            className: s()(L.Dq, { [L.$r]: !i || ed || em }),
                            children: (0, n.jsx)(b.A, { skuId: t.skuId, isCardHovered: ei, overrideVariantIndex: q }),
                        }),
                        (0, n.jsxs)("div", {
                            className: L.N1,
                            children: [
                                (0, n.jsx)(C.A, {
                                    skuId: t.skuId,
                                    badgeOverride: N,
                                    className: z,
                                    prioritizedCurrency: $,
                                    skipLimitedTimeCheck: O,
                                }),
                                !r && (0, n.jsx)(R.A, { skuId: t.skuId, isCardHovered: ei }),
                            ],
                        }),
                        ef &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: L.wY }),
                                    (0, n.jsxs)("div", {
                                        className: L.xQ,
                                        children: [
                                            ed &&
                                                (0, n.jsxs)("div", {
                                                    className: L.xE,
                                                    children: [
                                                        !(i && d) &&
                                                            (0, n.jsxs)("div", {
                                                                className: L.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(I.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(F, L.tZ),
                                                                        }),
                                                                    !d &&
                                                                        (0, n.jsx)("div", {
                                                                            className: L.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(v.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: $,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eu &&
                                                            (0, n.jsx)(y.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ei,
                                                                onVariantEnter: K,
                                                                onVariantExit: Z,
                                                                overflowProps: eo,
                                                            }),
                                                    ],
                                                }),
                                            ec &&
                                                (0, n.jsx)("div", {
                                                    className: L.Vs,
                                                    children: (0, n.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: L.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !P &&
                                                                (0, n.jsx)(k.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: el,
                                                                    onClick: B,
                                                                    text: G,
                                                                    prioritizedCurrency: $,
                                                                    onClickAnalytics: er,
                                                                }),
                                                            !S &&
                                                                (0, n.jsx)(E.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: el,
                                                                    onClick: M,
                                                                    icon: D,
                                                                    prioritizedCurrency: $,
                                                                    onClickAnalytics: er,
                                                                }),
                                                        ],
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        });
    }),
    S = (e) => {
        let { skuId: t, ...r } = e,
            l = (0, j.Vm)(t),
            i = (0, d.A)(() => ({ cardId: (0, a.A)() }));
        return null == l ? null : (0, n.jsx)(h.R9, { newValue: i, children: (0, n.jsx)(P, { product: l, ...r }) });
    };
