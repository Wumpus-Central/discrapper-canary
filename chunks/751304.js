r.d(e, { A: () => O });
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(835245),
    u = r(575593),
    o = r(230109),
    d = r(397927),
    c = r(793574),
    A = r(713517),
    m = r(440938),
    x = r(161918),
    p = r(597783),
    g = r(859587),
    C = r(536572),
    h = r(268959),
    f = r(387945),
    I = r(638006),
    k = r(140877),
    v = r(834384),
    j = r(157200),
    E = r(561769),
    T = r(364616),
    _ = r(666839),
    y = r(935094),
    R = r(758836),
    b = r(75388);
let L = n.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: r,
                hideProductName: l,
                hideVariantSwitcher: a,
                hidePrice: L,
                hidePrimaryCTA: O,
                hideSecondaryCTA: N,
                badgeOverride: P,
                skipLimitedTimeCheck: V,
                onClickCard: S,
                onClickPrimaryCTA: B,
                onClickSecondaryCTA: U,
                onMouseEnter: w,
                onMouseLeave: D,
                onFocus: H,
                onBlur: M,
                primaryCTAText: W,
                secondaryCTAIcon: F,
                productNameClassName: G,
                badgeClassName: z,
                cardClassName: Q,
                prioritizedCurrency: X,
                aspectRatio: q,
            } = t,
            { previewingVariantIndex: Y, handleEntering: Z, handleLeaving: K } = (0, y.f)(e),
            J = (0, E.gZ)() ?? X,
            $ = (0, x.Mk)(),
            tt = $?.tab,
            te = (0, m.uM)(),
            tr = n.useMemo(() => (0, E.UU)(e, tt, te), [e, tt, te]),
            ti = (0, C.s7)(e),
            tn = n.useRef(null),
            { isHoveringOrFocusing: tl } = (0, A.A)(tn),
            { handleCardVisibilityChange: ts } = (0, p.Z)(e.skuId, tt === R.G2.CATALOG ? "full" : tt),
            ta = (0, E.ql)(e, c.A.COLLECTIBLES_SHOP_CARD, tr);
        (0, g.x)(tl, e);
        let tu = e.type === u.R.VARIANTS_GROUP && !a,
            to = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: ta }), [ta]),
            td = !O || !N,
            tc = !(L && l) || tu,
            tA = tc || td,
            tm = td || tu;
        return (0, i.jsx)(o.L, {
            innerRef: tn,
            onChange: ts,
            threshold: 0,
            children: (0, i.jsx)(d.sqX, {
                ref: tn,
                onClick: S ?? ta,
                "aria-label": ti,
                className: s()(Q, b.ty, { [b.yo]: tl }),
                onFocus: () => H?.(e.skuId),
                onBlur: () => M?.(e.skuId),
                onMouseEnter: () => w?.(e.skuId),
                onMouseLeave: () => D?.(e.skuId),
                children: (0, i.jsxs)("div", {
                    className: b.qt,
                    style: { aspectRatio: q },
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(b.Dq, { [b.$r]: !l || tc || tm }),
                            children: (0, i.jsx)(I.A, { skuId: e.skuId, isCardHovered: tl, overrideVariantIndex: Y }),
                        }),
                        (0, i.jsxs)("div", {
                            className: b.N1,
                            children: [
                                (0, i.jsx)(h.A, {
                                    skuId: e.skuId,
                                    badgeOverride: P,
                                    className: z,
                                    prioritizedCurrency: J,
                                    skipLimitedTimeCheck: V,
                                }),
                                !r && (0, i.jsx)(_.A, { skuId: e.skuId, isCardHovered: tl }),
                            ],
                        }),
                        tA &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: b.wY }),
                                    (0, i.jsxs)("div", {
                                        className: b.xQ,
                                        children: [
                                            tc &&
                                                (0, i.jsxs)("div", {
                                                    className: b.xE,
                                                    children: [
                                                        !(l && L) &&
                                                            (0, i.jsxs)("div", {
                                                                className: b.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, i.jsx)(f.A, {
                                                                            skuId: e.skuId,
                                                                            className: s()(G, b.tZ),
                                                                        }),
                                                                    !L &&
                                                                        (0, i.jsx)("div", {
                                                                            className: b.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, i.jsx)(k.A, {
                                                                                skuId: e.skuId,
                                                                                prioritizedCurrency: J,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tu &&
                                                            (0, i.jsx)(T.A, {
                                                                skuId: e.skuId,
                                                                isCollapsed: !tl,
                                                                onVariantEnter: Z,
                                                                onVariantExit: K,
                                                                overflowProps: to,
                                                            }),
                                                    ],
                                                }),
                                            td &&
                                                (0, i.jsx)("div", {
                                                    className: b.Vs,
                                                    children: (0, i.jsxs)(d.ButtonGroup, {
                                                        wrap: !1,
                                                        className: b.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !O &&
                                                                (0, i.jsx)(v.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: tn,
                                                                    onClick: B,
                                                                    text: W,
                                                                    prioritizedCurrency: J,
                                                                    onClickAnalytics: tr,
                                                                }),
                                                            !N &&
                                                                (0, i.jsx)(j.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: tn,
                                                                    onClick: U,
                                                                    icon: F,
                                                                    prioritizedCurrency: J,
                                                                    onClickAnalytics: tr,
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
    O = (t) => {
        let { skuId: e, ...r } = t,
            l = (0, E.Vm)(e),
            s = n.useMemo(() => ({ cardId: (0, a.A)() }), []);
        return null == l ? null : (0, i.jsx)(m.R9, { newValue: s, children: (0, i.jsx)(L, { product: l, ...r }) });
    };
