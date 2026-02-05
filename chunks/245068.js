"use strict";
n.d(t, { X: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(550111),
    d = n(331402),
    _ = n(442759),
    f = n(940622),
    p = n(929283),
    h = n(650906),
    m = n(180171),
    g = n(989099);
let E = i.memo(function (e) {
    let { product: t, isHighlighted: n, user: i, forCollectedModal: a } = e,
        { firstProfileEffect: E, firstAvatarDecoration: A, firstNameplate: I } = (0, _.f5)(t),
        T = (0, f.br)(A),
        y = (0, u.Ay)(),
        S = (0, o.qB)(y),
        v = null != I && null != A && null != E,
        C = v ? l._3J.SIZE_72 : l._3J.SIZE_80,
        b = S ? g : m;
    return (0, r.jsxs)("div", {
        className: s()(h.kL, { [h.ib]: !v, [h.c$]: v }),
        children: [
            null != E &&
                (0, r.jsx)("div", {
                    className: h.NM,
                    children: (0, r.jsx)(d.A, {
                        isHighlighted: n,
                        skuId: E.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: a,
                        withScaleAnimation: a,
                    }),
                }),
            v &&
                (0, r.jsx)("div", {
                    className: h.M4,
                    children: (0, r.jsx)(c.A, {
                        user: i,
                        nameplate: I,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: T,
                    }),
                }),
            null != T &&
                (0, r.jsx)("div", {
                    className: h._P,
                    children: (0, r.jsx)(p.i, {
                        item: T,
                        user: i,
                        avatarSize: C,
                        isHighlighted: n,
                        avatarPlaceholderSrc: b,
                        className: h.my,
                    }),
                }),
        ],
    });
});
