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
    let {
            product: t,
            isHighlighted: n,
            user: i,
            forCollectedModal: s,
            showDefaultAvatar: I = !1,
            disableAnimation: T = !1,
        } = e,
        { firstProfileEffect: S, firstAvatarDecoration: y, firstNameplate: v } = (0, h.f5)(t),
        { enabled: N } = (0, p.P)("BundlePreview"),
        C = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        R = (0, c.Ay)(),
        O = (0, l.qB)(R),
        b = null != v && null != y && null != S,
        D = b ? u._3J.SIZE_72 : u._3J.SIZE_80,
        L = O ? A : g,
        w = t.previewAssets?.fgStatic;
    if (N && null != w) {
        let e = n && !C,
            i = t.previewAssets?.fgAnimated,
            s = e && null != i ? i : w;
        return (0, r.jsx)("div", {
            className: E.kL,
            children: (0, r.jsx)("img", { className: a()(E.d2, { [E.M2]: n }), src: s, alt: t.name }),
        });
    }
    return (0, r.jsxs)("div", {
        className: a()(E.kL, { [E.ib]: !b, [E.c$]: b }),
        children: [
            null != S &&
                (0, r.jsx)("div", {
                    className: E.NM,
                    children: (0, r.jsx)(f.A, {
                        isHighlighted: n,
                        skuId: S.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            b &&
                (0, r.jsx)("div", {
                    className: E.M4,
                    children: (0, r.jsx)(_.A, {
                        user: i,
                        nameplate: v,
                        isHighlighted: n,
                        showPlaceholderUser: !n || I,
                        pendingAvatarDecoration: y,
                    }),
                }),
            null != y &&
                (0, r.jsx)("div", {
                    className: E._P,
                    children: (0, r.jsx)(m.i, {
                        item: y,
                        user: i,
                        avatarSize: D,
                        isHighlighted: n,
                        showDefaultAvatar: I,
                        disableAnimation: T,
                        avatarPlaceholderSrc: L,
                        className: E.my,
                    }),
                }),
        ],
    });
});
