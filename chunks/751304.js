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
    g = r(597783),
    v = r(859587),
    A = r(918838),
    C = r(536572),
    I = r(268959),
    k = r(387945),
    b = r(638006),
    y = r(140877),
    E = r(834384),
    j = r(157200),
    _ = r(561769),
    R = r(364616),
    T = r(666839),
    L = r(935094),
    P = r(758836),
    S = r(551497);
let O = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: a,
                hidePrice: m,
                hidePrimaryCTA: O,
                hideSecondaryCTA: V,
                badgeOverride: N,
                skipLimitedTimeCheck: w,
                onClickCard: M,
                onClickPrimaryCTA: B,
                onClickSecondaryCTA: H,
                onMouseEnter: W,
                onMouseLeave: U,
                onFocus: D,
                onBlur: G,
                primaryCTAText: F,
                secondaryCTAIcon: z,
                productNameClassName: K,
                badgeClassName: Y,
                cardClassName: Q,
                prioritizedCurrency: X,
                aspectRatio: q,
            } = e,
            { previewingVariantIndex: Z, handleEntering: $, handleLeaving: J } = (0, L.f)(t),
            ee = (0, _.gZ)() ?? X,
            et = (0, x.Mk)(),
            er = et?.tab,
            en = (0, f.uM)(),
            el = l.useMemo(() => (0, _.UU)(t, er, en), [t, er, en]),
            ei = (0, C.s7)(t),
            es = l.useRef(null),
            { isHoveringOrFocusing: ea } = (0, p.A)(es),
            eu = (0, A.U)(t),
            eo = (0, u.A)(es, eu),
            { handleCardVisibilityChange: ec } = (0, g.Z)(t.skuId, er === P.G2.CATALOG ? "full" : er),
            ed = (0, _.ql)(t, h.A.COLLECTIBLES_SHOP_CARD, el);
        (0, v.x)(ea, t);
        let em = t.type === o.R.VARIANTS_GROUP && !a,
            eh = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: ed }), [ed]),
            ep = !O || !V,
            ef = !(m && i) || em,
            ex = ef || ep,
            eg = ep || em;
        return (0, n.jsx)(c.L, {
            innerRef: es,
            onChange: ec,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: eo,
                onClick: M ?? ed,
                "aria-label": ei,
                className: s()(Q, S.ty, { [S.yo]: ea }),
                onFocus: () => D?.(t.skuId),
                onBlur: () => G?.(t.skuId),
                onMouseEnter: () => W?.(t.skuId),
                onMouseLeave: () => U?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: S.qt,
                    style: { aspectRatio: q },
                    children: [
                        (0, n.jsx)("div", {
                            className: s()(S.Dq, { [S.$r]: !i || ef || eg }),
                            children: (0, n.jsx)(b.A, { skuId: t.skuId, isCardHovered: ea, overrideVariantIndex: Z }),
                        }),
                        (0, n.jsxs)("div", {
                            className: S.N1,
                            children: [
                                (0, n.jsx)(I.A, {
                                    skuId: t.skuId,
                                    badgeOverride: N,
                                    className: Y,
                                    prioritizedCurrency: ee,
                                    skipLimitedTimeCheck: w,
                                }),
                                !r && (0, n.jsx)(T.A, { skuId: t.skuId, isCardHovered: ea }),
                            ],
                        }),
                        ex &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: S.wY }),
                                    (0, n.jsxs)("div", {
                                        className: S.xQ,
                                        children: [
                                            ef &&
                                                (0, n.jsxs)("div", {
                                                    className: S.xE,
                                                    children: [
                                                        !(i && m) &&
                                                            (0, n.jsxs)("div", {
                                                                className: S.Ly,
                                                                children: [
                                                                    !i &&
                                                                        (0, n.jsx)(k.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(K, S.tZ),
                                                                        }),
                                                                    !m &&
                                                                        (0, n.jsx)("div", {
                                                                            className: S.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, n.jsx)(y.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: ee,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        em &&
                                                            (0, n.jsx)(R.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ea,
                                                                onVariantEnter: $,
                                                                onVariantExit: J,
                                                                overflowProps: eh,
                                                            }),
                                                    ],
                                                }),
                                            ep &&
                                                (0, n.jsx)("div", {
                                                    className: S.Vs,
                                                    children: (0, n.jsxs)(d.ButtonGroup, {
                                                        wrap: !1,
                                                        className: S.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !O &&
                                                                (0, n.jsx)(E.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: es,
                                                                    onClick: B,
                                                                    text: F,
                                                                    prioritizedCurrency: ee,
                                                                    onClickAnalytics: el,
                                                                }),
                                                            !V &&
                                                                (0, n.jsx)(j.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: es,
                                                                    onClick: H,
                                                                    icon: z,
                                                                    prioritizedCurrency: ee,
                                                                    onClickAnalytics: el,
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
