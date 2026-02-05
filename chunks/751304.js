"use strict";
n.d(t, { A: () => R });
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
let N = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: a,
                hideVariantSwitcher: N,
                hidePrice: R,
                hidePrimaryCTA: O,
                hideSecondaryCTA: D,
                badgeOverride: L,
                skipLimitedTimeCheck: w,
                onClickCard: x,
                onClickPrimaryCTA: P,
                onClickSecondaryCTA: M,
                onMouseEnter: k,
                onMouseLeave: U,
                onFocus: G,
                onBlur: V,
                primaryCTAText: F,
                secondaryCTAIcon: B,
                productNameClassName: j,
                badgeClassName: H,
                cardClassName: Y,
                prioritizedCurrency: W,
                onClickAnalytics: K,
            } = e,
            { previewingVariantIndex: z, handleEntering: $, handleLeaving: q } = (0, v.f)(t),
            Z = (0, T.sC)(),
            Q = (0, _.Mk)(),
            X = Q?.tab,
            J = (0, f.ho)(t),
            ee = i.useRef(null),
            { isHoveringOrFocusing: et } = (0, d.A)(ee),
            { handleCardVisibilityChange: en } = (0, p.Z)(t.skuId, X === C.G2.CATALOG ? "full" : X),
            er = (0, T.ql)(t, c.A.COLLECTIBLES_SHOP_CARD, K, Z),
            ei = t.type === o.R.VARIANTS_GROUP && !N,
            ea = !O || !D,
            es = !(R && a) || ei,
            eo = es || ea,
            el = ea || ei;
        return (0, r.jsx)(l.L, {
            innerRef: ee,
            onChange: en,
            threshold: 0,
            children: (0, r.jsx)(u.sqX, {
                ref: ee,
                onClick: x ?? er,
                "aria-label": J,
                className: s()(Y, b.ty, { [b.yo]: et }),
                onFocus: () => G?.(t.skuId),
                onBlur: () => V?.(t.skuId),
                onMouseEnter: () => k?.(t.skuId),
                onMouseLeave: () => U?.(t.skuId),
                children: (0, r.jsxs)("div", {
                    className: b.qt,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(b.Dq, { [b.$r]: !a || es || el }),
                            children: (0, r.jsx)(g.A, { skuId: t.skuId, isCardHovered: et, overrideVariantIndex: z }),
                        }),
                        (0, r.jsxs)("div", {
                            className: b.N1,
                            children: [
                                (0, r.jsx)(h.A, {
                                    skuId: t.skuId,
                                    badgeOverride: L,
                                    className: H,
                                    prioritizedCurrency: W,
                                    skipLimitedTimeCheck: w,
                                }),
                                !n && (0, r.jsx)(S.A, { skuId: t.skuId, isCardHovered: et }),
                            ],
                        }),
                        eo &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: b.wY }),
                                    (0, r.jsxs)("div", {
                                        className: b.xQ,
                                        children: [
                                            es &&
                                                (0, r.jsxs)("div", {
                                                    className: b.xE,
                                                    children: [
                                                        !(a && R) &&
                                                            (0, r.jsxs)("div", {
                                                                className: b.Ly,
                                                                children: [
                                                                    !a &&
                                                                        (0, r.jsx)(m.A, {
                                                                            skuId: t.skuId,
                                                                            className: s()(j, b.tZ),
                                                                        }),
                                                                    !R &&
                                                                        (0, r.jsx)("div", {
                                                                            className: b.oh,
                                                                            "aria-hidden": !0,
                                                                            children: (0, r.jsx)(E.A, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: W,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        ei &&
                                                            (0, r.jsx)(y.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !et,
                                                                onVariantEnter: $,
                                                                onVariantExit: q,
                                                            }),
                                                    ],
                                                }),
                                            ea &&
                                                (0, r.jsx)("div", {
                                                    className: b.Vs,
                                                    children: (0, r.jsxs)(u.ButtonGroup, {
                                                        wrap: !1,
                                                        className: b.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !O &&
                                                                (0, r.jsx)(A.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: P,
                                                                    text: F,
                                                                    prioritizedCurrency: W,
                                                                    onClickAnalytics: K,
                                                                }),
                                                            !D &&
                                                                (0, r.jsx)(I.A, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ee,
                                                                    onClick: M,
                                                                    icon: B,
                                                                    prioritizedCurrency: W,
                                                                    onClickAnalytics: K,
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
    R = (e) => {
        let { skuId: t, ...n } = e,
            i = (0, T.Vm)(t);
        return null == i ? null : (0, r.jsx)(N, { product: i, ...n });
    };
