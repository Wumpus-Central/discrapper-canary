"use strict";
n.d(t, { X: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(582754),
    u = n(397927),
    c = n(736653),
    d = n(775602),
    _ = n(550111),
    f = n(331402),
    p = n(320447),
    h = n(442759),
    m = n(929283),
    E = n(650906),
    g = n(180171),
    A = n(989099);
let I = i.memo(function (e) {
    let { product: t, isHighlighted: n, user: i, forCollectedModal: s } = e,
        { firstProfileEffect: I, firstAvatarDecoration: T, firstNameplate: S } = (0, h.f5)(t),
        { enabled: y } = (0, p.P)("BundlePreview"),
        v = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        N = (0, c.Ay)(),
        C = (0, l.qB)(N),
        R = null != S && null != T && null != I,
        O = R ? u._3J.SIZE_72 : u._3J.SIZE_80,
        b = C ? A : g,
        D = t.previewAssets?.fgStatic;
    if (y && null != D) {
        let e = n && !v,
            i = t.previewAssets?.fgAnimated,
            s = e && null != i ? i : D;
        return (0, r.jsx)("div", {
            className: E.kL,
            children: (0, r.jsx)("img", { className: a()(E.d2, { [E.M2]: n }), src: s, alt: t.name }),
        });
    }
    return (0, r.jsxs)("div", {
        className: a()(E.kL, { [E.ib]: !R, [E.c$]: R }),
        children: [
            null != I &&
                (0, r.jsx)("div", {
                    className: E.NM,
                    children: (0, r.jsx)(f.A, {
                        isHighlighted: n,
                        skuId: I.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            R &&
                (0, r.jsx)("div", {
                    className: E.M4,
                    children: (0, r.jsx)(_.A, {
                        user: i,
                        nameplate: S,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: T,
                    }),
                }),
            null != T &&
                (0, r.jsx)("div", {
                    className: E._P,
                    children: (0, r.jsx)(m.i, {
                        item: T,
                        user: i,
                        avatarSize: O,
                        isHighlighted: n,
                        avatarPlaceholderSrc: b,
                        className: E.my,
                    }),
                }),
        ],
    });
});
