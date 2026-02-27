r.d(e, { A: () => R });
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
    A = r(597783),
    x = r(536572),
    p = r(268959),
    h = r(387945),
    g = r(638006),
    C = r(140877),
    I = r(834384),
    v = r(157200),
    f = r(561769),
    j = r(364616),
    k = r(666839),
    y = r(935094),
    T = r(758836),
    _ = r(514294);
let E = l.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: r,
                hideProductName: n,
                hideVariantSwitcher: E,
                hidePrice: R,
                hidePrimaryCTA: N,
                hideSecondaryCTA: b,
                badgeOverride: O,
                skipLimitedTimeCheck: L,
                onClickCard: P,
                onClickPrimaryCTA: S,
                onClickSecondaryCTA: V,
                onMouseEnter: w,
                onMouseLeave: B,
                onFocus: U,
                onBlur: D,
                primaryCTAText: H,
                secondaryCTAIcon: W,
                productNameClassName: F,
                badgeClassName: G,
                cardClassName: z,
                prioritizedCurrency: M,
                onClickAnalytics: X,
            } = t,
            { previewingVariantIndex: Q, handleEntering: q, handleLeaving: Y } = (0, y.f)(e),
            Z = (0, m.Mk)(),
            K = Z?.tab,
            J = (0, x.s7)(e),
            $ = l.useRef(null),
            { isHoveringOrFocusing: tt } = (0, c.A)($),
            { handleCardVisibilityChange: te } = (0, A.Z)(e.skuId, K === T.G2.CATALOG ? "full" : K),
            tr = (0, f.ql)(e, d.A.COLLECTIBLES_SHOP_CARD, X),
            ti = e.type === a.R.VARIANTS_GROUP && !E,
            tl = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: tr }), [tr]),
            tn = !N || !b,
            ts = !(R && n) || ti,
            ta = ts || tn,
            tu = tn || ti;
        return (0, i.jsx)(u.L, {
            innerRef: $,
            onChange: te,
            threshold: 0,
            children: (0, i.jsx)(o.sqX, {
                ref: $,
                onClick: P ?? tr,
                "aria-label": J,
                className: s()(z, _.ty, { [_.yo]: tt }),
                onFocus: () => U?.(e.skuId),
                onBlur: () => D?.(e.skuId),
                onMouseEnter: () => w?.(e.skuId),
                onMouseLeave: () => B?.(e.skuId),
                children: (0, i.jsxs)("div", {
                    className: _.qt,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(_.Dq, { [_.$r]: !n || ts || tu }),
                            children: (0, i.jsx)(g.A, { skuId: e.skuId, isCardHovered: tt, overrideVariantIndex: Q }),
                        }),
                        (0, i.jsxs)("div", {
                            className: _.N1,
                            children: [
                                (0, i.jsx)(p.A, {
                                    skuId: e.skuId,
                                    badgeOverride: O,
                                    className: G,
                                    prioritizedCurrency: M,
                                    skipLimitedTimeCheck: L,
                                }),
                                !r && (0, i.jsx)(k.A, { skuId: e.skuId, isCardHovered: tt }),
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
                                                        !(n && R) &&
                                                            (0, i.jsxs)("div", {
                                                                className: _.Ly,
                                                                children: [
                                                                    !n &&
                                                                        (0, i.jsx)(h.A, {
                                                                            skuId: e.skuId,
                                                                            className: s()(F, _.tZ),
                                                                        }),
                                                                    !R &&
                                                                        (0, i.jsx)("div", {
                                                                            className: _.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, i.jsx)(C.A, {
                                                                                skuId: e.skuId,
                                                                                prioritizedCurrency: M,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ti &&
                                                            (0, i.jsx)(j.A, {
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
                                                            !N &&
                                                                (0, i.jsx)(I.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: $,
                                                                    onClick: S,
                                                                    text: H,
                                                                    prioritizedCurrency: M,
                                                                    onClickAnalytics: X,
                                                                }),
                                                            !b &&
                                                                (0, i.jsx)(v.A, {
                                                                    skuId: e.skuId,
                                                                    cardRef: $,
                                                                    onClick: V,
                                                                    icon: W,
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
    R = (t) => {
        let { skuId: e, ...r } = t,
            l = (0, f.Vm)(e);
        return null == l ? null : (0, i.jsx)(E, { product: l, ...r });
    };
