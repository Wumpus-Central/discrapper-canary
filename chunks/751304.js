r.d(t, { A: () => V });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    u = r(612324),
    o = r(575593),
    c = r(230109),
    d = r(397927),
    m = r(444927),
    h = r(793574),
    p = r(713517),
    f = r(440938),
    x = r(161918),
    g = r(320447),
    C = r(597783),
    v = r(859587),
    A = r(918838),
    k = r(536572),
    b = r(268959),
    I = r(387945),
    E = r(638006),
    y = r(140877),
    j = r(834384),
    R = r(157200),
    _ = r(561769),
    T = r(364616),
    L = r(666839),
    S = r(935094),
    P = r(758836),
    N = r(235852);
let O = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: a,
                hidePrice: m,
                hidePrimaryCTA: O,
                hideSecondaryCTA: V,
                badgeOverride: w,
                skipLimitedTimeCheck: B,
                onClickCard: M,
                onClickPrimaryCTA: D,
                onClickSecondaryCTA: H,
                onMouseEnter: U,
                onMouseLeave: W,
                onFocus: G,
                onBlur: F,
                primaryCTAText: z,
                secondaryCTAIcon: K,
                productNameClassName: Q,
                badgeClassName: Y,
                cardClassName: q,
                prioritizedCurrency: X,
                aspectRatio: Z,
                hideStaticBundleBackgroundAsset: $,
            } = e,
            { previewingVariantIndex: J, handleEntering: ee, handleLeaving: et } = (0, S.f)(t),
            er = (0, _.gZ)() ?? X,
            { enabled: en } = (0, g.P)("ProductCard"),
            el = (0, x.Mk)(),
            ei = el?.tab,
            es = (0, f.uM)(),
            ea = l.useMemo(() => (0, _.UU)(t, ei, es), [t, ei, es]),
            eu = (0, k.s7)(t),
            eo = l.useRef(null),
            { isHoveringOrFocusing: ec } = (0, p.A)(eo),
            ed = (0, A.U)(t),
            em = (0, u.A)(eo, ed),
            { handleCardVisibilityChange: eh } = (0, C.Z)(t.skuId, ei === P.G2.CATALOG ? "full" : ei),
            ep = (0, _.ql)(t, h.A.COLLECTIBLES_SHOP_CARD, ea);
        (0, v.x)(ec, t);
        let { enabled: ef } = (0, g.P)("ProductCard"),
            ex = t.type === o.R.BUNDLE && ef && t.previewAssets?.fgStatic != null,
            eg = t.type === o.R.VARIANTS_GROUP && !a,
            eC = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: ep }), [ep]),
            ev = t.type === o.R.BUNDLE && en && !$,
            eA = !O || !V,
            ek = !(m && i) || eg,
            eb = ek || eA,
            eI = eA || eg;
        return (0, n.jsx)(c.L, {
            innerRef: eo,
            onChange: eh,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: em,
                onClick: M ?? ep,
                "aria-label": eu,
                className: s()(q, N.ty, { [N.yo]: ec }),
                onFocus: () => G?.(t.skuId),
                onBlur: () => F?.(t.skuId),
                onMouseEnter: () => U?.(t.skuId),
                onMouseLeave: () => W?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: N.qt,
                    style: { aspectRatio: Z },
                    children: [
                        ev &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: N.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: s()(N.Dq, { [N.$r]: !i || ek || eI, [N.T9]: ex }),
                            children: (0, n.jsx)(E.A, { skuId: t.skuId, isCardHovered: ec, overrideVariantIndex: J }),
                        }),
                        (0, n.jsxs)("div", {
                            className: N.N1,
                            children: [
                                (0, n.jsx)(b.A, {
                                    skuId: t.skuId,
                                    badgeOverride: w,
                                    className: Y,
                                    prioritizedCurrency: er,
                                    skipLimitedTimeCheck: B,
                                }),
                                !r && (0, n.jsx)(L.A, { skuId: t.skuId, isCardHovered: ec }),
                            ],
                        }),
                        eb &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: N.wY }),
                                    (0, n.jsxs)("div", {
                                        className: N.xQ,
                                        children: [
                                            ek &&
                                                (0, n.jsxs)("div", {
                                                    className: N.xE,
                                                    children: [
                                                        !(i && m) &&
                                                            (0, n.jsxs)("div", {
                                                                className: N.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(I.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Q, N.tZ),
                                                                        }),
                                                                    !m &&
                                                                        (0, n.jsx)("div", {
                                                                            className: N.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(y.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: er,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eg &&
                                                            (0, n.jsx)(T.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ec,
                                                                onVariantEnter: ee,
                                                                onVariantExit: et,
                                                                overflowProps: eC,
                                                            }),
                                                    ],
                                                }),
                                            eA &&
                                                (0, n.jsx)("div", {
                                                    className: N.Vs,
                                                    children: (0, n.jsxs)(d.ButtonGroup, {
                                                        wrap: !1,
                                                        className: N.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !O &&
                                                                (0, n.jsx)(j.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: D,
                                                                    text: z,
                                                                    prioritizedCurrency: er,
                                                                    onClickAnalytics: ea,
                                                                }),
                                                            !V &&
                                                                (0, n.jsx)(R.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: eo,
                                                                    onClick: H,
                                                                    icon: K,
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
    V = (e) => {
        let { skuId: t, ...r } = e,
            l = (0, _.Vm)(t),
            i = (0, m.A)(() => ({ cardId: (0, a.A)() }));
        return null == l ? null : (0, n.jsx)(f.R9, { newValue: i, children: (0, n.jsx)(O, { product: l, ...r }) });
    };
