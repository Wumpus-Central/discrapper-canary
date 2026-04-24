"use strict";
n.d(t, { X: () => E });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(17928),
    c = n(462887),
    o = n(778712),
    d = n(736653),
    u = n(775602),
    m = n(320447),
    f = n(442759),
    h = n(344346),
    _ = n(139136),
    p = n(929283),
    g = n(806771),
    x = n(180171),
    b = n(989099);
let E = i.memo(function (e) {
    let { product: t, isHighlighted: n, user: i, forCollectedModal: l, staticPreviewClassName: E } = e,
        { firstProfileEffect: v, firstAvatarDecoration: A, firstNameplate: I } = (0, f.f5)(t),
        { enabled: N } = (0, m.P)("BundlePreview"),
        S = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        j = (0, d.Ay)(),
        C = (0, c.q)(j),
        y = null != I && null != A && null != v,
        R = y ? o._3.SIZE_72 : o._3.SIZE_80,
        T = t.previewAssets?.fgStatic;
    if (N && null != T) {
        let e = n && !S,
            i = t.previewAssets?.fgAnimated;
        return (0, a.jsx)("div", {
            className: g.EJ,
            children: (0, a.jsx)("img", {
                className: r()(g.d2, E, { [g.M2]: n }),
                src: e && null != i ? i : T,
                alt: t.name,
            }),
        });
    }
    return (0, a.jsxs)("div", {
        className: r()(g.kL, { [g.ib]: !y, [g.c$]: y }),
        children: [
            null != v &&
                (0, a.jsx)("div", {
                    className: g.NM,
                    children: (0, a.jsx)(_.A, {
                        isHighlighted: n,
                        skuId: v.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: l,
                        withScaleAnimation: l,
                    }),
                }),
            y &&
                (0, a.jsx)("div", {
                    className: g.M4,
                    children: (0, a.jsx)(h.A, {
                        user: i,
                        nameplate: I,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: A,
                    }),
                }),
            null != A &&
                (0, a.jsx)("div", {
                    className: g._P,
                    children: (0, a.jsx)(p.i, {
                        item: A,
                        user: i,
                        avatarSize: R,
                        isHighlighted: n,
                        avatarPlaceholderSrc: C ? b : x,
                        className: g.my,
                    }),
                }),
        ],
    });
});
