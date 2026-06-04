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
    p = n(929283),
    E = n(806771),
    m = n(180171),
    g = n(989099);
let A = r.memo(function (e) {
    let { product: t, isHighlighted: n, user: r, forCollectedModal: s, staticPreviewClassName: A } = e,
        { firstProfileEffect: I, firstAvatarDecoration: T, firstNameplate: S } = (0, _.f5)(t),
        y = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        N = (0, c.Ay)(),
        v = (0, l.q)(N),
        C = null != S && null != T && null != I,
        R = C ? u._3.SIZE_72 : u._3.SIZE_80,
        O = t.previewAssets?.fgStatic;
    if (null != O) {
        let e = n && !y,
            r = t.previewAssets?.fgAnimated;
        return (0, i.jsx)("div", {
            className: E.EJ,
            children: (0, i.jsx)("img", {
                className: a()(E.d2, A, { [E.M2]: n }),
                src: e && null != r ? r : O,
                alt: t.name,
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(E.kL, { [E.ib]: !C, [E.c$]: C }),
        children: [
            null != I &&
                (0, i.jsx)("div", {
                    className: E.NM,
                    children: (0, i.jsx)(f.A, {
                        isHighlighted: n,
                        skuId: I.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            C &&
                (0, i.jsx)("div", {
                    className: E.M4,
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
                    className: E._P,
                    children: (0, i.jsx)(p.i, {
                        item: T,
                        user: r,
                        avatarSize: R,
                        isHighlighted: n,
                        avatarPlaceholderSrc: v ? g : m,
                        className: E.my,
                    }),
                }),
        ],
    });
});
