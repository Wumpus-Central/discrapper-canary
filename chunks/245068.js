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
    h = n(442759),
    f = n(344346),
    p = n(139136),
    E = n(929283),
    m = n(806771),
    g = n(180171),
    A = n(989099);
let I = r.memo(function (e) {
    let { product: t, isHighlighted: n, user: r, forCollectedModal: s, staticPreviewClassName: I } = e,
        { firstProfileEffect: T, firstAvatarDecoration: S, firstNameplate: y } = (0, h.f5)(t),
        { enabled: N } = (0, _.P)("BundlePreview"),
        v = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        C = (0, c.Ay)(),
        R = (0, l.q)(C),
        O = null != y && null != S && null != T,
        b = O ? u._3.SIZE_72 : u._3.SIZE_80,
        D = t.previewAssets?.fgStatic;
    if (N && null != D) {
        let e = n && !v,
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
        className: a()(m.kL, { [m.ib]: !O, [m.c$]: O }),
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
            O &&
                (0, i.jsx)("div", {
                    className: m.M4,
                    children: (0, i.jsx)(f.A, {
                        user: r,
                        nameplate: y,
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
                        avatarPlaceholderSrc: R ? A : g,
                        className: m.my,
                    }),
                }),
        ],
    });
});
