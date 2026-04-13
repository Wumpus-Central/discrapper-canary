r.d(t, { A: () => B });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    o = r(612324),
    u = r(575593),
    c = r(230109),
    d = r(397927),
    p = r(444927),
    C = r(793574),
    k = r(688810),
    m = r(713517),
    x = r(440938),
    g = r(161918),
    h = r(320447),
    I = r(597783),
    A = r(777829),
    v = r(859587),
    f = r(918838),
    _ = r(536572),
    T = r(268959),
    E = r(387945),
    y = r(638006),
    j = r(140877),
    b = r(834384),
    R = r(157200),
    P = r(561769),
    S = r(364616),
    O = r(666839),
    N = r(935094),
    L = r(758836),
    V = r(551497);
let H = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: a,
                hidePrice: p,
                hidePrimaryCTA: H,
                hideSecondaryCTA: B,
                badgeOverride: w,
                skipLimitedTimeCheck: U,
                onClickCard: D,
                onClickPrimaryCTA: M,
                onClickSecondaryCTA: W,
                onMouseEnter: G,
                onMouseLeave: F,
                onFocus: z,
                onBlur: K,
                primaryCTAText: Y,
                secondaryCTAIcon: Q,
                productNameClassName: q,
                badgeClassName: X,
                cardClassName: Z,
                prioritizedCurrency: $,
                aspectRatio: J,
                hideStaticBundleBackgroundAsset: ee,
            } = e,
            { previewingVariantIndex: et, handleEntering: er, handleLeaving: en } = (0, N.f)(t),
            el = (0, P.gZ)() ?? $,
            { enabled: ei } = (0, h.P)("ProductCard"),
            es = (0, g.Mk)(),
            ea = es?.tab,
            eo = (0, x.uM)(),
            eu = l.useMemo(() => (0, P.UU)(t, ea, eo), [t, ea, eo]),
            ec = (0, _.s7)(t),
            ed = l.useRef(null),
            { isHoveringOrFocusing: ep } = (0, m.A)(ed),
            eC = (0, f.U)(t),
            ek = (0, o.A)(ed, eC),
            { handleCardVisibilityChange: em } = (0, I.Z)(t.skuId, ea === L.G2.CATALOG ? "full" : ea),
            ex = (0, P.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, eu),
            { analyticsLocations: eg } = (0, k.Ay)(),
            eh = (0, A.f)({ product: t, analyticsLocations: eg }),
            eI = l.useCallback(
                (e) => {
                    null != D ? D(e) : (eh(L.sH.OPEN_DETAILS), ex(e));
                },
                [eh, D, ex],
            );
        (0, v.x)(ep, t);
        let { enabled: eA } = (0, h.P)("ProductCard"),
            ev = t.type === u.R.BUNDLE && eA && t.previewAssets?.fgStatic != null,
            ef = t.type === u.R.VARIANTS_GROUP && !a,
            e_ = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
            eT = t.type === u.R.BUNDLE && ei && !ee,
            eE = !H || !B,
            ey = !(p && i) || ef,
            ej = ey || eE,
            eb = eE || ef;
        return (0, n.jsx)(c.L, {
            innerRef: ed,
            onChange: em,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: ek,
                onClick: eI,
                "aria-label": ec,
                className: s()(Z, V.ty, { [V.yo]: ep }),
                onFocus: () => z?.(t.skuId),
                onBlur: () => K?.(t.skuId),
                onMouseEnter: () => G?.(t.skuId),
                onMouseLeave: () => F?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: V.qt,
                    style: { aspectRatio: J },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, n.jsx)("img", { className: V.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, n.jsx)("div", {
                            className: s()(V.Dq, { [V.$r]: !i || ey || eb, [V.T9]: ev }),
                            children: (0, n.jsx)(y.A, { skuId: t.skuId, isCardHovered: ep, overrideVariantIndex: et }),
                        }),
                        (0, n.jsxs)("div", {
                            className: V.N1,
                            children: [
                                (0, n.jsx)(T.A, {
                                    skuId: t.skuId,
                                    badgeOverride: w,
                                    className: X,
                                    prioritizedCurrency: el,
                                    skipLimitedTimeCheck: U,
                                }),
                                !r && (0, n.jsx)(O.A, { skuId: t.skuId, isCardHovered: ep, onTrackClick: eh }),
                            ],
                        }),
                        ej &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: s()(V.wY, { [V.KY]: ev }) }),
                                    (0, n.jsxs)("div", {
                                        className: V.xQ,
                                        children: [
                                            ey &&
                                                (0, n.jsxs)("div", {
                                                    className: V.xE,
                                                    children: [
                                                        !(i && p) &&
                                                            (0, n.jsxs)("div", {
                                                                className: V.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(E.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(q, V.tZ),
                                                                        }),
                                                                    !p &&
                                                                        (0, n.jsx)("div", {
                                                                            className: V.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(j.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: el,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ef &&
                                                            (0, n.jsx)(S.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ep,
                                                                onVariantEnter: er,
                                                                onVariantExit: en,
                                                                overflowProps: e_,
                                                                onTrackClick: eh,
                                                            }),
                                                    ],
                                                }),
                                            eE &&
                                                (0, n.jsx)("div", {
                                                    className: V.Vs,
                                                    children: (0, n.jsxs)(d.ButtonGroup, {
                                                        wrap: !1,
                                                        className: V.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !H &&
                                                                (0, n.jsx)(b.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ed,
                                                                    onClick: M,
                                                                    text: Y,
                                                                    prioritizedCurrency: el,
                                                                    onClickAnalytics: eu,
                                                                    onTrackClick: eh,
                                                                }),
                                                            !B &&
                                                                (0, n.jsx)(R.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ed,
                                                                    onClick: W,
                                                                    icon: Q,
                                                                    prioritizedCurrency: el,
                                                                    onClickAnalytics: eu,
                                                                    onTrackClick: eh,
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
    B = (e) => {
        let { skuId: t, ...r } = e,
            l = (0, P.Vm)(t),
            i = (0, p.A)(() => ({ cardId: (0, a.A)() }));
        return null == l ? null : (0, n.jsx)(x.R9, { newValue: i, children: (0, n.jsx)(H, { product: l, ...r }) });
    };
