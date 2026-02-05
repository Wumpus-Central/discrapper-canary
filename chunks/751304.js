"use strict";
n.d(t, { A: () => O });
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
    p = n(597783),
    h = n(268959),
    m = n(387945),
    g = n(638006),
    E = n(140877),
    A = n(834384),
    I = n(157200),
    T = n(561769),
    y = n(364616),
    S = n(666839),
    v = n(935094),
    C = n(758836),
    b = n(514294);
let N = 4,
    R = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: a,
                hideVariantSwitcher: R,
                hidePrice: O,
                hidePrimaryCTA: D,
                hideSecondaryCTA: L,
                badgeOverride: w,
                skipLimitedTimeCheck: x,
                onClickCard: P,
                onClickPrimaryCTA: M,
                onClickSecondaryCTA: k,
                onMouseEnter: U,
                onMouseLeave: G,
                onFocus: V,
                onBlur: F,
                primaryCTAText: B,
                secondaryCTAIcon: j,
                productNameClassName: H,
                badgeClassName: Y,
                cardClassName: W,
                prioritizedCurrency: K,
                onClickAnalytics: z,
            } = e,
            { previewingVariantIndex: $, handleEntering: q, handleLeaving: Z } = (0, v.f)(t),
            Q = (0, T.sC)(),
            X = (0, _.Mk)(),
            J = X?.tab,
            ee = (0, f.ho)(t),
            et = i.useRef(null),
            { isHoveringOrFocusing: en } = (0, d.A)(et),
            { handleCardVisibilityChange: er } = (0, p.Z)(t.skuId, J === C.G2.CATALOG ? "full" : J),
            ei = (0, T.ql)(t, c.A.COLLECTIBLES_SHOP_CARD, z, Q),
            ea = t.type === o.R.VARIANTS_GROUP && !R,
            es = i.useMemo(() => ({ maxVariantsToShow: N, onClick: ei }), [ei]),
            eo = !D || !L,
            el = !(O && a) || ea,
            eu = el || eo,
            ec = eo || ea;
        return (0, r.jsx)(l.L, {
            innerRef: et,
            onChange: er,
            threshold: 0,
            children: (0, r.jsx)(u.sqX, {
                ref: et,
                onClick: P ?? ei,
                "aria-label": ee,
                className: s()(W, b.ty, { [b.yo]: en }),
                onFocus: () => V?.(t.skuId),
                onBlur: () => F?.(t.skuId),
                onMouseEnter: () => U?.(t.skuId),
                onMouseLeave: () => G?.(t.skuId),
                children: (0, r.jsxs)("div", {
                    className: b.qt,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(b.Dq, { [b.$r]: !a || el || ec }),
                            children: (0, r.jsx)(g.A, { skuId: t.skuId, isCardHovered: en, overrideVariantIndex: $ }),
                        }),
                        (0, r.jsxs)("div", {
                            className: b.N1,
                            children: [
                                (0, r.jsx)(h.A, {
                                    skuId: t.skuId,
                                    badgeOverride: w,
                                    className: Y,
                                    prioritizedCurrency: K,
                                    skipLimitedTimeCheck: x,
                                }),
                                !n && (0, r.jsx)(S.A, { skuId: t.skuId, isCardHovered: en }),
                            ],
                        }),
                        eu &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: b.wY }),
                                    (0, r.jsxs)("div", {
                                        className: b.xQ,
                                        children: [
                                            el &&
                                                (0, r.jsxs)("div", {
                                                    className: b.xE,
                                                    children: [
                                                        !(a && O) &&
                                                            (0, r.jsxs)("div", {
                                                                className: b.Ly,
                                                                children: [
                                                                    !a &&
                                                                        (0, r.jsx)(m.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(H, b.tZ),
                                                                        }),
                                                                    !O &&
                                                                        (0, r.jsx)("div", {
                                                                            className: b.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, r.jsx)(E.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: K,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ea &&
                                                            (0, r.jsx)(y.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !en,
                                                                onVariantEnter: q,
                                                                onVariantExit: Z,
                                                                overflowProps: es,
                                                            }),
                                                    ],
                                                }),
                                            eo &&
                                                (0, r.jsx)("div", {
                                                    className: b.Vs,
                                                    children: (0, r.jsxs)(u.ButtonGroup, {
                                                        wrap: !1,
                                                        className: b.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !D &&
                                                                (0, r.jsx)(A.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: et,
                                                                    onClick: M,
                                                                    text: B,
                                                                    prioritizedCurrency: K,
                                                                    onClickAnalytics: z,
                                                                }),
                                                            !L &&
                                                                (0, r.jsx)(I.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: et,
                                                                    onClick: k,
                                                                    icon: j,
                                                                    prioritizedCurrency: K,
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
    O = (e) => {
        let { skuId: t, ...n } = e,
            i = (0, T.Vm)(t);
        return null == i ? null : (0, r.jsx)(R, { product: i, ...n });
    };
