r.d(t, { A: () => N });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    u = r(575593),
    o = r(230109),
    c = r(397927),
    d = r(793574),
    f = r(713517),
    m = r(440938),
    h = r(161918),
    A = r(597783),
    x = r(859587),
    p = r(536572),
    C = r(268959),
    g = r(387945),
    v = r(638006),
    I = r(140877),
    b = r(834384),
    k = r(157200),
    E = r(561769),
    j = r(364616),
    y = r(666839),
    T = r(935094),
    R = r(758836),
    _ = r(514294);
let L = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: a,
                hidePrice: L,
                hidePrimaryCTA: N,
                hideSecondaryCTA: O,
                badgeOverride: P,
                skipLimitedTimeCheck: S,
                onClickCard: V,
                onClickPrimaryCTA: w,
                onClickSecondaryCTA: M,
                onMouseEnter: B,
                onMouseLeave: D,
                onFocus: W,
                onBlur: U,
                primaryCTAText: H,
                secondaryCTAIcon: F,
                productNameClassName: G,
                badgeClassName: z,
                cardClassName: Q,
                prioritizedCurrency: X,
                aspectRatio: Y,
            } = e,
            { previewingVariantIndex: q, handleEntering: K, handleLeaving: Z } = (0, T.f)(t),
            $ = (0, E.gZ)() ?? X,
            J = (0, h.Mk)(),
            ee = J?.tab,
            et = (0, m.uM)(),
            er = l.useMemo(() => (0, E.UU)(t, ee, et), [t, ee, et]),
            en = (0, p.s7)(t),
            el = l.useRef(null),
            { isHoveringOrFocusing: ei } = (0, f.A)(el),
            { handleCardVisibilityChange: es } = (0, A.Z)(t.skuId, ee === R.G2.CATALOG ? "full" : ee),
            ea = (0, E.ql)(t, d.A.COLLECTIBLES_SHOP_CARD, er);
        (0, x.x)(ei, t);
        let eu = t.type === u.R.VARIANTS_GROUP && !a,
            eo = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: ea }), [ea]),
            ec = !N || !O,
            ed = !(L && i) || eu,
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
                className: s()(Q, _.ty, { [_.yo]: ei }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => U?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: _.qt,
                    style: { aspectRatio: Y },
                    children: [
                        (0, n.jsx)("div", {
                            className: s()(_.Dq, { [_.$r]: !i || ed || em }),
                            children: (0, n.jsx)(v.A, { skuId: t.skuId, isCardHovered: ei, overrideVariantIndex: q }),
                        }),
                        (0, n.jsxs)("div", {
                            className: _.N1,
                            children: [
                                (0, n.jsx)(C.A, {
                                    skuId: t.skuId,
                                    badgeOverride: P,
                                    className: z,
                                    prioritizedCurrency: $,
                                    skipLimitedTimeCheck: S,
                                }),
                                !r && (0, n.jsx)(y.A, { skuId: t.skuId, isCardHovered: ei }),
                            ],
                        }),
                        ef &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: _.wY }),
                                    (0, n.jsxs)("div", {
                                        className: _.xQ,
                                        children: [
                                            ed &&
                                                (0, n.jsxs)("div", {
                                                    className: _.xE,
                                                    children: [
                                                        !(i && L) &&
                                                            (0, n.jsxs)("div", {
                                                                className: _.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(g.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(G, _.tZ),
                                                                        }),
                                                                    !L &&
                                                                        (0, n.jsx)("div", {
                                                                            className: _.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(I.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: $,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eu &&
                                                            (0, n.jsx)(j.A, {
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
                                                    className: _.Vs,
                                                    children: (0, n.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: _.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !N &&
                                                                (0, n.jsx)(b.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: el,
                                                                    onClick: w,
                                                                    text: H,
                                                                    prioritizedCurrency: $,
                                                                    onClickAnalytics: er,
                                                                }),
                                                            !O &&
                                                                (0, n.jsx)(k.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: el,
                                                                    onClick: M,
                                                                    icon: F,
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
    N = (e) => {
        let { skuId: t, ...r } = e,
            i = (0, E.Vm)(t),
            s = l.useMemo(() => ({ cardId: (0, a.A)() }), []);
        return null == i ? null : (0, n.jsx)(m.R9, { newValue: s, children: (0, n.jsx)(L, { product: i, ...r }) });
    };
