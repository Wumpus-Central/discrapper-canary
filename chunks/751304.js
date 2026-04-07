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
    I = r(268959),
    b = r(387945),
    y = r(638006),
    E = r(140877),
    j = r(834384),
    R = r(157200),
    _ = r(561769),
    T = r(364616),
    L = r(666839),
    P = r(935094),
    S = r(758836),
    N = r(551497);
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
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: U,
                onMouseEnter: W,
                onMouseLeave: D,
                onFocus: G,
                onBlur: F,
                primaryCTAText: z,
                secondaryCTAIcon: K,
                productNameClassName: Q,
                badgeClassName: Y,
                cardClassName: q,
                prioritizedCurrency: X,
                aspectRatio: Z,
            } = e,
            { previewingVariantIndex: $, handleEntering: J, handleLeaving: ee } = (0, P.f)(t),
            et = (0, _.gZ)() ?? X,
            er = (0, x.Mk)(),
            en = er?.tab,
            el = (0, f.uM)(),
            ei = l.useMemo(() => (0, _.UU)(t, en, el), [t, en, el]),
            es = (0, k.s7)(t),
            ea = l.useRef(null),
            { isHoveringOrFocusing: eu } = (0, p.A)(ea),
            eo = (0, A.U)(t),
            ec = (0, u.A)(ea, eo),
            { handleCardVisibilityChange: ed } = (0, C.Z)(t.skuId, en === S.G2.CATALOG ? "full" : en),
            em = (0, _.ql)(t, h.A.COLLECTIBLES_SHOP_CARD, ei);
        (0, v.x)(eu, t);
        let { enabled: eh } = (0, g.P)("ProductCard"),
            ep = t.type === o.R.BUNDLE && eh && t.previewAssets?.fgStatic != null,
            ef = t.type === o.R.VARIANTS_GROUP && !a,
            ex = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
            eg = !O || !V,
            eC = !(m && i) || ef,
            ev = eC || eg,
            eA = eg || ef;
        return (0, n.jsx)(c.L, {
            innerRef: ea,
            onChange: ed,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: ec,
                onClick: M ?? em,
                "aria-label": es,
                className: s()(q, N.ty, { [N.yo]: eu }),
                onFocus: () => G?.(t.skuId),
                onBlur: () => F?.(t.skuId),
                onMouseEnter: () => W?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: N.qt,
                    style: { aspectRatio: Z },
                    children: [
                        (0, n.jsx)("div", {
                            className: s()(N.Dq, { [N.$r]: !i || eC || eA, [N.T9]: ep }),
                            children: (0, n.jsx)(y.A, { skuId: t.skuId, isCardHovered: eu, overrideVariantIndex: $ }),
                        }),
                        (0, n.jsxs)("div", {
                            className: N.N1,
                            children: [
                                (0, n.jsx)(I.A, {
                                    skuId: t.skuId,
                                    badgeOverride: w,
                                    className: Y,
                                    prioritizedCurrency: et,
                                    skipLimitedTimeCheck: B,
                                }),
                                !r && (0, n.jsx)(L.A, { skuId: t.skuId, isCardHovered: eu }),
                            ],
                        }),
                        ev &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: N.wY }),
                                    (0, n.jsxs)("div", {
                                        className: N.xQ,
                                        children: [
                                            eC &&
                                                (0, n.jsxs)("div", {
                                                    className: N.xE,
                                                    children: [
                                                        !(i && m) &&
                                                            (0, n.jsxs)("div", {
                                                                className: N.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(b.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Q, N.tZ),
                                                                        }),
                                                                    !m &&
                                                                        (0, n.jsx)("div", {
                                                                            className: N.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(E.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: et,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ef &&
                                                            (0, n.jsx)(T.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !eu,
                                                                onVariantEnter: J,
                                                                onVariantExit: ee,
                                                                overflowProps: ex,
                                                            }),
                                                    ],
                                                }),
                                            eg &&
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
                                                                    cardRef: ea,
                                                                    onClick: H,
                                                                    text: z,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ei,
                                                                }),
                                                            !V &&
                                                                (0, n.jsx)(R.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ea,
                                                                    onClick: U,
                                                                    icon: K,
                                                                    prioritizedCurrency: et,
                                                                    onClickAnalytics: ei,
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
