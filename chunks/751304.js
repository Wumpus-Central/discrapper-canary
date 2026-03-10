r.d(e, { A: () => b });
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(575593),
    u = r(230109),
    o = r(397927),
    d = r(793574),
    c = r(713517),
    A = r(161918),
    m = r(597783),
    x = r(536572),
    p = r(268959),
    g = r(387945),
    C = r(638006),
    h = r(140877),
    I = r(834384),
    f = r(157200),
    k = r(561769),
    v = r(364616),
    j = r(666839),
    T = r(935094),
    E = r(758836),
    y = r(514294);
let _ = n.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: r,
                hideProductName: l,
                hideVariantSwitcher: _,
                hidePrice: b,
                hidePrimaryCTA: R,
                hideSecondaryCTA: L,
                badgeOverride: N,
                skipLimitedTimeCheck: O,
                onClickCard: P,
                onClickPrimaryCTA: V,
                onClickSecondaryCTA: S,
                onMouseEnter: B,
                onMouseLeave: U,
                onFocus: w,
                onBlur: D,
                primaryCTAText: H,
                secondaryCTAIcon: W,
                productNameClassName: F,
                badgeClassName: G,
                cardClassName: M,
                prioritizedCurrency: z,
                onClickAnalytics: Q,
                aspectRatio: X,
            } = t,
            { previewingVariantIndex: q, handleEntering: Y, handleLeaving: Z } = (0, T.f)(e),
            K = (0, k.gZ)() ?? z,
            J = (0, A.Mk)(),
            $ = J?.tab,
            tt = (0, x.s7)(e),
            te = n.useRef(null),
            { isHoveringOrFocusing: tr } = (0, c.A)(te),
            { handleCardVisibilityChange: ti } = (0, m.Z)(e.skuId, $ === E.G2.CATALOG ? "full" : $),
            tn = (0, k.ql)(e, d.A.COLLECTIBLES_SHOP_CARD, Q),
            tl = e.type === a.R.VARIANTS_GROUP && !_,
            ts = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: tn }), [tn]),
            ta = !R || !L,
            tu = !(b && l) || tl,
            to = tu || ta,
            td = ta || tl;
        return (0, i.jsx)(u.L, {
            innerRef: te,
            onChange: ti,
            threshold: 0,
            children: (0, i.jsx)(o.sqX, {
                ref: te,
                onClick: P ?? tn,
                "aria-label": tt,
                className: s()(M, y.ty, { [y.yo]: tr }),
                onFocus: () => w?.(e.skuId),
                onBlur: () => D?.(e.skuId),
                onMouseEnter: () => B?.(e.skuId),
                onMouseLeave: () => U?.(e.skuId),
                children: (0, i.jsxs)("div", {
                    className: y.qt,
                    style: { aspectRatio: X },
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(y.Dq, { [y.$r]: !l || tu || td }),
                            children: (0, i.jsx)(C.A, { skuId: e.skuId, isCardHovered: tr, overrideVariantIndex: q }),
                        }),
                        (0, i.jsxs)("div", {
                            className: y.N1,
                            children: [
                                (0, i.jsx)(p.A, {
                                    skuId: e.skuId,
                                    badgeOverride: N,
                                    className: G,
                                    prioritizedCurrency: K,
                                    skipLimitedTimeCheck: O,
                                }),
                                !r && (0, i.jsx)(j.A, { skuId: e.skuId, isCardHovered: tr }),
                            ],
                        }),
                        to &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: y.wY }),
                                    (0, i.jsxs)("div", {
                                        className: y.xQ,
                                        children: [
                                            tu &&
                                                (0, i.jsxs)("div", {
                                                    className: y.xE,
                                                    children: [
                                                        !(l && b) &&
                                                            (0, i.jsxs)("div", {
                                                                className: y.Ly,
                                                                children: [
                                                                    !l &&
                                                                        (0, i.jsx)(g.A, {
                                                                            skuId: e.skuId,
                                                                            className: s()(F, y.tZ),
                                                                        }),
                                                                    !b &&
                                                                        (0, i.jsx)("div", {
                                                                            className: y.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, i.jsx)(h.A, {
                                                                                skuId: e.skuId,
                                                                                prioritizedCurrency: K,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tl &&
                                                            (0, i.jsx)(v.A, {
                                                                skuId: e.skuId,
                                                                isCollapsed: !tr,
                                                                onVariantEnter: Y,
                                                                onVariantExit: Z,
                                                                overflowProps: ts,
                                                            }),
                                                    ],
                                                }),
                                            ta &&
                                                (0, i.jsx)("div", {
                                                    className: y.Vs,
                                                    children: (0, i.jsxs)(o.ButtonGroup, {
                                                        wrap: !1,
                                                        className: y.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !R &&
                                                                (0, i.jsx)(I.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: te,
                                                                    onClick: V,
                                                                    text: H,
                                                                    prioritizedCurrency: K,
                                                                    onClickAnalytics: Q,
                                                                }),
                                                            !L &&
                                                                (0, i.jsx)(f.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: te,
                                                                    onClick: S,
                                                                    icon: W,
                                                                    prioritizedCurrency: K,
                                                                    onClickAnalytics: Q,
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
    b = (t) => {
        let { skuId: e, ...r } = t,
            n = (0, k.Vm)(e);
        return null == n ? null : (0, i.jsx)(_, { product: n, ...r });
    };
