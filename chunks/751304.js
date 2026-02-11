"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(230109),
    u = n(397927),
    c = n(793574),
    d = n(713517),
    _ = n(161918),
    f = n(645178),
    h = n(597783),
    p = n(268959),
    g = n(387945),
    E = n(638006),
    A = n(140877),
    I = n(834384),
    T = n(157200),
    y = n(561769),
    S = n(364616),
    v = n(666839),
    C = n(935094),
    b = n(758836),
    N = n(514294);
let R = 4,
    O = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: a,
                hideVariantSwitcher: O,
                hidePrice: D,
                hidePrimaryCTA: L,
                hideSecondaryCTA: w,
                badgeOverride: x,
                skipLimitedTimeCheck: P,
                onClickCard: M,
                onClickPrimaryCTA: k,
                onClickSecondaryCTA: U,
                onMouseEnter: G,
                onMouseLeave: F,
                onFocus: V,
                onBlur: B,
                primaryCTAText: j,
                secondaryCTAIcon: H,
                productNameClassName: Y,
                badgeClassName: W,
                cardClassName: K,
                prioritizedCurrency: $,
                onClickAnalytics: z,
            } = e,
            { previewingVariantIndex: q, handleEntering: X, handleLeaving: Z } = (0, C.f)(t),
            Q = (0, y.sC)(),
            J = (0, _.Mk)(),
            ee = J?.tab,
            et = (0, f.ho)(t),
            en = i.useRef(null),
            { isHoveringOrFocusing: er } = (0, d.A)(en),
            { handleCardVisibilityChange: ei } = (0, h.Z)(t.skuId, ee === b.G2.CATALOG ? "full" : ee),
            ea = (0, y.ql)(t, c.A.COLLECTIBLES_SHOP_CARD, z, Q),
            es = t.type === o.R.VARIANTS_GROUP && !O,
            eo = i.useMemo(() => ({ maxVariantsToShow: R, onClick: ea }), [ea]),
            el = !L || !w,
            eu = !(D && a) || es,
            ec = eu || el,
            ed = el || es;
        return (0, r.jsx)(l.L, {
            innerRef: en,
            onChange: ei,
            threshold: 0,
            children: (0, r.jsx)(u.sqX, {
                ref: en,
                onClick: M ?? ea,
                "aria-label": et,
                className: s()(K, N.ty, { [N.yo]: er }),
                onFocus: () => V?.(t.skuId),
                onBlur: () => B?.(t.skuId),
                onMouseEnter: () => G?.(t.skuId),
                onMouseLeave: () => F?.(t.skuId),
                children: (0, r.jsxs)("div", {
                    className: N.qt,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(N.Dq, { [N.$r]: !a || eu || ed }),
                            children: (0, r.jsx)(E.A, { skuId: t.skuId, isCardHovered: er, overrideVariantIndex: q }),
                        }),
                        (0, r.jsxs)("div", {
                            className: N.N1,
                            children: [
                                (0, r.jsx)(p.A, {
                                    skuId: t.skuId,
                                    badgeOverride: x,
                                    className: W,
                                    prioritizedCurrency: $,
                                    skipLimitedTimeCheck: P,
                                }),
                                !n && (0, r.jsx)(v.A, { skuId: t.skuId, isCardHovered: er }),
                            ],
                        }),
                        ec &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: N.wY }),
                                    (0, r.jsxs)("div", {
                                        className: N.xQ,
                                        children: [
                                            eu &&
                                                (0, r.jsxs)("div", {
                                                    className: N.xE,
                                                    children: [
                                                        !(a && D) &&
                                                            (0, r.jsxs)("div", {
                                                                className: N.Ly,
                                                                children: [
                                                                    !a &&
                                                                        (0, r.jsx)(g.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(Y, N.tZ),
                                                                        }),
                                                                    !D &&
                                                                        (0, r.jsx)("div", {
                                                                            className: N.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, r.jsx)(A.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: $,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        es &&
                                                            (0, r.jsx)(S.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !er,
                                                                onVariantEnter: X,
                                                                onVariantExit: Z,
                                                                overflowProps: eo,
                                                            }),
                                                    ],
                                                }),
                                            el &&
                                                (0, r.jsx)("div", {
                                                    className: N.Vs,
                                                    children: (0, r.jsxs)(u.ButtonGroup, {
                                                        wrap: !1,
                                                        className: N.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !L &&
                                                                (0, r.jsx)(I.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: en,
                                                                    onClick: k,
                                                                    text: j,
                                                                    prioritizedCurrency: $,
                                                                    onClickAnalytics: z,
                                                                }),
                                                            !w &&
                                                                (0, r.jsx)(T.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: en,
                                                                    onClick: U,
                                                                    icon: H,
                                                                    prioritizedCurrency: $,
                                                                    onClickAnalytics: z,
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
    D = (e) => {
        let { skuId: t, ...n } = e,
            i = (0, y.Vm)(t);
        return null == i ? null : (0, r.jsx)(O, { product: i, ...n });
    };
