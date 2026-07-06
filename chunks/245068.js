"use strict";
n.d(t, { X: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(462887),
    u = n(778712),
    c = n(736653),
    d = n(775602),
    _ = n(442759),
    h = n(344346),
    f = n(139136),
    E = n(929283),
    p = n(806771),
    m = n(180171),
    g = n(989099);
let A = r.memo(function (e) {
    let { product: t, isHighlighted: n, user: r, forCollectedModal: s, staticPreviewClassName: A } = e,
        { firstProfileEffect: I, firstAvatarDecoration: T, firstNameplate: S } = (0, _.f5)(t),
        N = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion),
        C = (0, c.Ay)(),
        y = (0, l.q)(C),
        O = null != S && null != T && null != I,
        R = O ? u._3.SIZE_72 : u._3.SIZE_80,
        v = t.previewAssets?.fgStatic;
    if (null != v) {
        let e = n && !N,
            r = t.previewAssets?.fgAnimated;
        return (0, i.jsx)("div", {
            className: p.EJ,
            children: (0, i.jsx)("img", {
                className: a()(p.d2, A, { [p.M2]: n }),
                src: e && null != r ? r : v,
                alt: t.name,
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(p.kL, { [p.ib]: !O, [p.c$]: O }),
        children: [
            null != I &&
                (0, i.jsx)("div", {
                    className: p.NM,
                    children: (0, i.jsx)(f.A, {
                        isHighlighted: n,
                        skuId: I.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            O &&
                (0, i.jsx)("div", {
                    className: p.M4,
                    children: (0, i.jsx)(h.A, {
                        user: r,
                        nameplate: S,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: T,
                        hideDecorators: !0,
                    }),
                }),
            null != T &&
                (0, i.jsx)("div", {
                    className: p._P,
                    children: (0, i.jsx)(E.i, {
                        item: T,
                        user: r,
                        avatarSize: R,
                        isHighlighted: n,
                        avatarPlaceholderSrc: y ? g : m,
                        className: p.my,
                    }),
                }),
        ],
    });
});
