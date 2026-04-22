r.d(t, { A: () => U });
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(835245),
    u = r(612324),
    c = r(575593),
    o = r(230109),
    d = r(890856),
    k = r(825484),
    p = r(444927),
    C = r(793574),
    m = r(688810),
    x = r(713517),
    I = r(440938),
    A = r(161918),
    g = r(320447),
    h = r(597783),
    _ = r(777829),
    f = r(859587),
    T = r(918838),
    E = r(536572),
    v = r(268959),
    j = r(387945),
    y = r(638006),
    P = r(140877),
    b = r(834384),
    R = r(157200),
    N = r(561769),
    O = r(364616),
    L = r(666839),
    S = r(935094),
    H = r(758836),
    V = r(84217);
let B = n.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: l,
                hideVariantSwitcher: a,
                hidePrice: p,
                hidePrimaryCTA: B,
                hideSecondaryCTA: U,
                badgeOverride: D,
                skipLimitedTimeCheck: W,
                onClickCard: w,
                onClickPrimaryCTA: M,
                onClickSecondaryCTA: G,
                onMouseEnter: F,
                onMouseLeave: z,
                onFocus: Q,
                onBlur: Y,
                primaryCTAText: q,
                secondaryCTAIcon: K,
                productNameClassName: X,
                badgeClassName: $,
                cardClassName: Z,
                prioritizedCurrency: J,
                aspectRatio: ee,
                hideStaticBundleBackgroundAsset: et,
            } = e,
            { previewingVariantIndex: er, handleEntering: ei, handleLeaving: en } = (0, S.f)(t),
            el = (0, N.gZ)() ?? J,
            { enabled: es } = (0, g.P)("ProductCard"),
            ea = (0, A.Mk)(),
            eu = ea?.tab,
            ec = (0, I.uM)(),
            eo = n.useMemo(() => (0, N.UU)(t, eu, ec), [t, eu, ec]),
            ed = (0, E.s7)(t),
            ek = n.useRef(null),
            { isHoveringOrFocusing: ep } = (0, x.A)(ek),
            eC = (0, T.U)(t),
            em = (0, u.A)(ek, eC),
            { handleCardVisibilityChange: ex } = (0, h.Z)(t.skuId, eu === H.G2.CATALOG ? "full" : eu),
            eI = (0, N.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, eo),
            { analyticsLocations: eA } = (0, m.Ay)(),
            eg = (0, _.f)({ product: t, analyticsLocations: eA }),
            eh = n.useCallback(
                (e) => {
                    null != w ? w(e) : (eg(H.sH.OPEN_DETAILS), eI(e));
                },
                [eg, w, eI],
            );
        (0, f.x)(ep, t);
        let { enabled: e_ } = (0, g.P)("ProductCard"),
            ef = t.type === c.R.BUNDLE && e_ && t.previewAssets?.fgStatic != null,
            eT = t.type === c.R.VARIANTS_GROUP && !a,
            eE = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: eI }), [eI]),
            ev = t.type === c.R.BUNDLE && es && !et,
            ej = !B || !U,
            ey = !(p && l) || eT,
            eP = ey || ej,
            eb = ej || eT;
        return (0, i.jsx)(o.L, {
            innerRef: ek,
            onChange: ex,
            threshold: 0,
            children: (0, i.jsx)(d.s, {
                ref: em,
                onClick: eh,
                "aria-label": ed,
                className: s()(Z, V.ty, { [V.yo]: ep }),
                onFocus: () => Q?.(t.skuId),
                onBlur: () => Y?.(t.skuId),
                onMouseEnter: () => F?.(t.skuId),
                onMouseLeave: () => z?.(t.skuId),
                children: (0, i.jsxs)("div", {
                    className: V.qt,
                    style: { aspectRatio: ee },
                    children: [
                        ev &&
                            t.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: V.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: s()(V.Dq, { [V.$r]: !l || ey || eb, [V.T9]: ef }),
                            children: (0, i.jsx)(y.A, { skuId: t.skuId, isCardHovered: ep, overrideVariantIndex: er }),
                        }),
                        (0, i.jsxs)("div", {
                            className: V.N1,
                            children: [
                                (0, i.jsx)(v.A, {
                                    skuId: t.skuId,
                                    badgeOverride: D,
                                    className: $,
                                    prioritizedCurrency: el,
                                    skipLimitedTimeCheck: W,
                                }),
                                !r && (0, i.jsx)(L.A, { skuId: t.skuId, isCardHovered: ep, onTrackClick: eg }),
                            ],
                        }),
                        eP &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: s()(V.wY, { [V.KY]: ef }) }),
                                    (0, i.jsxs)("div", {
                                        className: V.xQ,
                                        children: [
                                            ey &&
                                                (0, i.jsxs)("div", {
                                                    className: V.xE,
                                                    children: [
                                                        !(l && p) &&
                                                            (0, i.jsxs)("div", {
                                                                className: V.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, i.jsx)(j.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(X, V.tZ),
                                                                        }),
                                                                    !p &&
                                                                        (0, i.jsx)("div", {
                                                                            className: V.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, i.jsx)(P.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: el,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eT &&
                                                            (0, i.jsx)(O.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ep,
                                                                onVariantEnter: ei,
                                                                onVariantExit: en,
                                                                overflowProps: eE,
                                                                onTrackClick: eg,
                                                            }),
                                                    ],
                                                }),
                                            ej &&
                                                (0, i.jsx)("div", {
                                                    className: V.Vs,
                                                    children: (0, i.jsxs)(k.e, {
                                                        wrap: !1,
                                                        className: V.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !B &&
                                                                (0, i.jsx)(b.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ek,
                                                                    onClick: M,
                                                                    text: q,
                                                                    prioritizedCurrency: el,
                                                                    onClickAnalytics: eo,
                                                                    onTrackClick: eg,
                                                                }),
                                                            !U &&
                                                                (0, i.jsx)(R.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ek,
                                                                    onClick: G,
                                                                    icon: K,
                                                                    prioritizedCurrency: el,
                                                                    onClickAnalytics: eo,
                                                                    onTrackClick: eg,
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
    U = (e) => {
        let { skuId: t, ...r } = e,
            n = (0, N.Vm)(t),
            l = (0, p.A)(() => ({ cardId: (0, a.A)() }));
        return null == n ? null : (0, i.jsx)(I.R9, { newValue: l, children: (0, i.jsx)(B, { product: n, ...r }) });
    };
