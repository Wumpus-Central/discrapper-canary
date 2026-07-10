"use strict";
n.d(t, { X: () => T });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(462887),
    d = n(778712),
    c = n(736653),
    u = n(775602),
    _ = n(442759),
    E = n(344346),
    A = n(139136),
    h = n(929283),
    I = n(806771),
    f = n(180171),
    p = n(989099);
let T = r.memo(function (e) {
    let { product: t, isHighlighted: n, user: r, forCollectedModal: a, staticPreviewClassName: T } = e,
        { firstProfileEffect: m, firstAvatarDecoration: g, firstNameplate: S } = (0, _.f5)(t),
        N = (0, l.bG)([u.Ay], () => u.Ay.useReducedMotion),
        C = (0, c.Ay)(),
        R = (0, o.q)(C),
        O = null != S && null != g && null != m,
        L = O ? d._3.SIZE_72 : d._3.SIZE_80,
        D = t.previewAssets?.fgStatic;
    if (null != D) {
        let e = n && !N,
            r = t.previewAssets?.fgAnimated;
        return (0, i.jsx)("div", {
            className: I.EJ,
            children: (0, i.jsx)("img", {
                className: s()(I.d2, T, { [I.M2]: n }),
                src: e && null != r ? r : D,
                alt: t.name,
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: s()(I.kL, { [I.ib]: !O, [I.c$]: O }),
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: I.NM,
                    children: (0, i.jsx)(A.A, {
                        isHighlighted: n,
                        skuId: m.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: a,
                        withScaleAnimation: a,
                    }),
                }),
            O &&
                (0, i.jsx)("div", {
                    className: I.M4,
                    children: (0, i.jsx)(E.A, {
                        user: r,
                        nameplate: S,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: g,
                        hideDecorators: !0,
                    }),
                }),
            null != g &&
                (0, i.jsx)("div", {
                    className: I._P,
                    children: (0, i.jsx)(h.i, {
                        item: g,
                        user: r,
                        avatarSize: L,
                        isHighlighted: n,
                        avatarPlaceholderSrc: R ? p : f,
                        className: I.my,
                    }),
                }),
        ],
    });
});
