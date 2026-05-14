"use strict";
n.d(t, { X: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(462887),
    u = n(778712),
    c = n(736653),
    d = n(775602),
    _ = n(320447),
    f = n(442759),
    h = n(344346),
    p = n(139136),
    E = n(929283),
    m = n(806771),
    g = n(180171),
    A = n(989099);
let I = r.memo(function (e) {
    let { product: t, isHighlighted: n, user: r, forCollectedModal: s, staticPreviewClassName: I } = e,
        { firstProfileEffect: T, firstAvatarDecoration: S, firstNameplate: N } = (0, f.f5)(t),
        { enabled: y } = (0, _.P)("BundlePreview"),
        C = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        v = (0, c.Ay)(),
        O = (0, l.q)(v),
        R = null != N && null != S && null != T,
        b = R ? u._3.SIZE_72 : u._3.SIZE_80,
        D = t.previewAssets?.fgStatic;
    if (y && null != D) {
        let e = n && !C,
            r = t.previewAssets?.fgAnimated;
        return (0, i.jsx)("div", {
            className: m.EJ,
            children: (0, i.jsx)("img", {
                className: a()(m.d2, I, { [m.M2]: n }),
                src: e && null != r ? r : D,
                alt: t.name,
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(m.kL, { [m.ib]: !R, [m.c$]: R }),
        children: [
            null != T &&
                (0, i.jsx)("div", {
                    className: m.NM,
                    children: (0, i.jsx)(p.A, {
                        isHighlighted: n,
                        skuId: T.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            R &&
                (0, i.jsx)("div", {
                    className: m.M4,
                    children: (0, i.jsx)(h.A, {
                        user: r,
                        nameplate: N,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: S,
                        hideDecorators: !0,
                    }),
                }),
            null != S &&
                (0, i.jsx)("div", {
                    className: m._P,
                    children: (0, i.jsx)(E.i, {
                        item: S,
                        user: r,
                        avatarSize: b,
                        isHighlighted: n,
                        avatarPlaceholderSrc: O ? A : g,
                        className: m.my,
                    }),
                }),
        ],
    });
});
