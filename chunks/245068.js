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
    _ = n(320447),
    f = n(442759),
    p = n(512213),
    h = n(139136),
    m = n(929283),
    E = n(939587),
    g = n(180171),
    A = n(989099);
let I = i.memo(function (e) {
    let { product: t, isHighlighted: n, user: i, forCollectedModal: s, staticPreviewClassName: I } = e,
        { firstProfileEffect: T, firstAvatarDecoration: S, firstNameplate: y } = (0, f.f5)(t),
        { enabled: v } = (0, _.P)("BundlePreview"),
        N = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        C = (0, c.Ay)(),
        R = (0, l.qB)(C),
        O = null != y && null != S && null != T,
        b = O ? u._3J.SIZE_72 : u._3J.SIZE_80,
        D = R ? A : g,
        L = t.previewAssets?.fgStatic;
    if (v && null != L) {
        let e = n && !N,
            i = t.previewAssets?.fgAnimated,
            s = e && null != i ? i : L;
        return (0, r.jsx)("div", {
            className: E.EJ,
            children: (0, r.jsx)("img", { className: a()(E.d2, I, { [E.M2]: n }), src: s, alt: t.name }),
        });
    }
    return (0, r.jsxs)("div", {
        className: a()(E.kL, { [E.ib]: !O, [E.c$]: O }),
        children: [
            null != T &&
                (0, r.jsx)("div", {
                    className: E.NM,
                    children: (0, r.jsx)(h.A, {
                        isHighlighted: n,
                        skuId: T.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            O &&
                (0, r.jsx)("div", {
                    className: E.M4,
                    children: (0, r.jsx)(p.A, {
                        user: i,
                        nameplate: y,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: S,
                    }),
                }),
            null != S &&
                (0, r.jsx)("div", {
                    className: E._P,
                    children: (0, r.jsx)(m.i, {
                        item: S,
                        user: i,
                        avatarSize: b,
                        isHighlighted: n,
                        avatarPlaceholderSrc: D,
                        className: E.my,
                    }),
                }),
        ],
    });
});
