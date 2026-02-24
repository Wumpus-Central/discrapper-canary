r.d(e, { A: () => T });
var i = r(627968),
    l = r(64700),
    n = r(503698),
    s = r.n(n),
    a = r(575593),
    u = r(230109),
    o = r(397927),
    d = r(793574),
    c = r(713517),
    m = r(161918),
    x = r(597783),
    p = r(536572),
    g = r(268959),
    h = r(387945),
    C = r(638006),
    A = r(140877),
    I = r(834384),
    j = r(157200),
    k = r(561769),
    f = r(364616),
    v = r(666839),
    y = r(935094),
    E = r(758836),
    _ = r(75388);
let b = l.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: r,
                hideProductName: n,
                hideVariantSwitcher: b,
                hidePrice: T,
                hidePrimaryCTA: R,
                hideSecondaryCTA: S,
                badgeOverride: N,
                skipLimitedTimeCheck: P,
                onClickCard: L,
                onClickPrimaryCTA: O,
                onClickSecondaryCTA: V,
                onMouseEnter: B,
                onMouseLeave: w,
                onFocus: U,
                onBlur: H,
                primaryCTAText: W,
                secondaryCTAIcon: G,
                productNameClassName: z,
                badgeClassName: D,
                cardClassName: F,
                prioritizedCurrency: M,
                onClickAnalytics: X,
            } = t,
            { previewingVariantIndex: Q, handleEntering: q, handleLeaving: Y } = (0, y.f)(e),
            Z = (0, m.Mk)(),
            K = Z?.tab,
            J = (0, p.s7)(e),
            $ = l.useRef(null),
            { isHoveringOrFocusing: tt } = (0, c.A)($),
            { handleCardVisibilityChange: te } = (0, x.Z)(e.skuId, K === E.G2.CATALOG ? "full" : K),
            tr = (0, k.ql)(e, d.A.COLLECTIBLES_SHOP_CARD, X),
            ti = e.type === a.R.VARIANTS_GROUP && !b,
            tl = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: tr }), [tr]),
            tn = !R || !S,
            ts = !(T && n) || ti,
            ta = ts || tn,
            tu = tn || ti;
        return (0, i.jsx)(u.L, {
            innerRef: $,
            onChange: te,
            threshold: 0,
            children: (0, i.jsx)(o.sqX, {
                ref: $,
                onClick: L ?? tr,
                "aria-label": J,
                className: s()(F, _.ty, { [_.yo]: tt }),
                onFocus: () => U?.(e.skuId),
                onBlur: () => H?.(e.skuId),
                onMouseEnter: () => B?.(e.skuId),
                onMouseLeave: () => w?.(e.skuId),
                children: (0, i.jsxs)("div", {
                    className: _.qt,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(_.Dq, { [_.$r]: !n || ts || tu }),
                            children: (0, i.jsx)(C.A, { skuId: e.skuId, isCardHovered: tt, overrideVariantIndex: Q }),
                        }),
                        (0, i.jsxs)("div", {
                            className: _.N1,
                            children: [
                                (0, i.jsx)(g.A, {
                                    skuId: e.skuId,
                                    badgeOverride: N,
                                    className: D,
                                    prioritizedCurrency: M,
                                    skipLimitedTimeCheck: P,
                                }),
                                !r && (0, i.jsx)(v.A, { skuId: e.skuId, isCardHovered: tt }),
                            ],
                        }),
                        ta &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: _.wY }),
                                    (0, i.jsxs)("div", {
                                        className: _.xQ,
                                        children: [
                                            ts &&
                                                (0, i.jsxs)("div", {
                                                    className: _.xE,
                                                    children: [
                                                        !(n && T) &&
                                                            (0, i.jsxs)("div", {
                                                                className: _.Ly,
                                                                children: [
                                                                    !n &&
                                                                        (0, i.jsx)(h.A, {
                                                                            skuId: e.skuId,
                                                                            className: s()(z, _.tZ),
                                                                        }),
                                                                    !T &&
                                                                        (0, i.jsx)("div", {
                                                                            className: _.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, i.jsx)(A.A, {
                                                                                skuId: e.skuId,
                                                                                prioritizedCurrency: M,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ti &&
                                                            (0, i.jsx)(f.A, {
                                                                skuId: e.skuId,
                                                                isCollapsed: !tt,
                                                                onVariantEnter: q,
                                                                onVariantExit: Y,
                                                                overflowProps: tl,
                                                            }),
                                                    ],
                                                }),
                                            tn &&
                                                (0, i.jsx)("div", {
                                                    className: _.Vs,
                                                    children: (0, i.jsxs)(o.ButtonGroup, {
                                                        wrap: !1,
                                                        className: _.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !R &&
                                                                (0, i.jsx)(I.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: $,
                                                                    onClick: O,
                                                                    text: W,
                                                                    prioritizedCurrency: M,
                                                                    onClickAnalytics: X,
                                                                }),
                                                            !S &&
                                                                (0, i.jsx)(j.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: $,
                                                                    onClick: V,
                                                                    icon: G,
                                                                    prioritizedCurrency: M,
                                                                    onClickAnalytics: X,
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
    T = (t) => {
        let { skuId: e, ...r } = t,
            l = (0, k.Vm)(e);
        return null == l ? null : (0, i.jsx)(b, { product: l, ...r });
    };
