r.d(t, { A: () => O });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    u = r(612324),
    o = r(575593),
    d = r(230109),
    c = r(397927),
    p = r(444927),
    m = r(793574),
    x = r(713517),
    g = r(440938),
    h = r(161918),
    C = r(320447),
    A = r(597783),
    k = r(859587),
    I = r(918838),
    v = r(536572),
    f = r(268959),
    y = r(387945),
    _ = r(638006),
    E = r(140877),
    j = r(834384),
    b = r(157200),
    R = r(561769),
    T = r(364616),
    P = r(666839),
    S = r(935094),
    N = r(758836),
    L = r(551497);
let V = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: a,
                hidePrice: p,
                hidePrimaryCTA: V,
                hideSecondaryCTA: O,
                badgeOverride: B,
                skipLimitedTimeCheck: w,
                onClickCard: U,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: D,
                onMouseEnter: M,
                onMouseLeave: G,
                onFocus: W,
                onBlur: F,
                primaryCTAText: z,
                secondaryCTAIcon: Q,
                productNameClassName: q,
                badgeClassName: Y,
                cardClassName: K,
                prioritizedCurrency: X,
                aspectRatio: Z,
                hideStaticBundleBackgroundAsset: $,
            } = e,
            { previewingVariantIndex: J, handleEntering: ee, handleLeaving: et } = (0, S.f)(t),
            er = (0, R.gZ)() ?? X,
            { enabled: en } = (0, C.P)("ProductCard"),
            el = (0, h.Mk)(),
            ei = el?.tab,
            es = (0, g.uM)(),
            ea = l.useMemo(() => (0, R.UU)(t, ei, es), [t, ei, es]),
            eu = (0, v.s7)(t),
            eo = l.useRef(null),
            { isHoveringOrFocusing: ed } = (0, x.A)(eo),
            ec = (0, I.U)(t),
            ep = (0, u.A)(eo, ec),
            { handleCardVisibilityChange: em } = (0, A.Z)(t.skuId, ei === N.G2.CATALOG ? "full" : ei),
            ex = (0, R.ql)(t, m.A.COLLECTIBLES_SHOP_CARD, ea);
        (0, k.x)(ed, t);
        let { enabled: eg } = (0, C.P)("ProductCard"),
            eh = t.type === o.R.BUNDLE && eg && t.previewAssets?.fgStatic != null,
            eC = t.type === o.R.VARIANTS_GROUP && !a,
            eA = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
            ek = t.type === o.R.BUNDLE && en && !$,
            eI = !V || !O,
            ev = !(p && i) || eC,
            ef = ev || eI,
            ey = eI || eC;
        return (0, n.jsx)(d.L, {
            innerRef: eo,
            onChange: em,
            threshold: 0,
            children: (0, n.jsx)(c.sqX, {
                ref: ep,
                onClick: U ?? ex,
                "aria-label": eu,
                className: s()(K, L.ty, { [L.yo]: ed }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => F?.(t.skuId),
                onMouseEnter: () => M?.(t.skuId),
                onMouseLeave: () => G?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: L.qt,
                    style: { aspectRatio: Z },
                    children: [
                        ek &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: L.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: s()(L.Dq, { [L.$r]: !i || ev || ey, [L.T9]: eh }),
                            children: (0, n.jsx)(_.A, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: J }),
                        }),
                        (0, n.jsxs)("div", {
                            className: L.N1,
                            children: [
                                (0, n.jsx)(f.A, {
                                    skuId: t.skuId,
                                    badgeOverride: B,
                                    className: Y,
                                    prioritizedCurrency: er,
                                    skipLimitedTimeCheck: w,
                                }),
                                !r && (0, n.jsx)(P.A, { skuId: t.skuId, isCardHovered: ed }),
                            ],
                        }),
                        ef &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: s()(L.wY, { [L.KY]: eh }) }),
                                    (0, n.jsxs)("div", {
                                        className: L.xQ,
                                        children: [
                                            ev &&
                                                (0, n.jsxs)("div", {
                                                    className: L.xE,
                                                    children: [
                                                        !(i && p) &&
                                                            (0, n.jsxs)("div", {
                                                                className: L.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(y.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(q, L.tZ),
                                                                        }),
                                                                    !p &&
                                                                        (0, n.jsx)("div", {
                                                                            className: L.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(E.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: er,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eC &&
                                                            (0, n.jsx)(T.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ed,
                                                                onVariantEnter: ee,
                                                                onVariantExit: et,
                                                                overflowProps: eA,
                                                            }),
                                                    ],
                                                }),
                                            eI &&
                                                (0, n.jsx)("div", {
                                                    className: L.Vs,
                                                    children: (0, n.jsxs)(c.ButtonGroup, {
                                                        wrap: !1,
                                                        className: L.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !V &&
                                                                (0, n.jsx)(j.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: H,
                                                                    text: z,
                                                                    prioritizedCurrency: er,
                                                                    onClickAnalytics: ea,
                                                                }),
                                                            !O &&
                                                                (0, n.jsx)(b.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: D,
                                                                    icon: Q,
                                                                    prioritizedCurrency: er,
                                                                    onClickAnalytics: ea,
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
    O = (e) => {
        let { skuId: t, ...r } = e,
            l = (0, R.Vm)(t),
            i = (0, p.A)(() => ({ cardId: (0, a.A)() }));
        return null == l ? null : (0, n.jsx)(g.R9, { newValue: i, children: (0, n.jsx)(V, { product: l, ...r }) });
    };
