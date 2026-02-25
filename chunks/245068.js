"use strict";
n.d(t, { X: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(550111),
    d = n(331402),
    _ = n(442759),
    f = n(940622),
    p = n(929283),
    h = n(122952),
    m = n(180171),
    E = n(989099);
let g = i.memo(function (e) {
    let {
            product: t,
            isHighlighted: n,
            user: i,
            forCollectedModal: s,
            showDefaultAvatar: g = !1,
            disableAnimation: A = !1,
        } = e,
        { firstProfileEffect: I, firstAvatarDecoration: T, firstNameplate: S } = (0, _.f5)(t),
        y = (0, f.br)(T),
        v = (0, u.Ay)(),
        N = (0, o.qB)(v),
        C = null != S && null != T && null != I,
        b = C ? l._3J.SIZE_72 : l._3J.SIZE_80,
        R = N ? E : m;
    return (0, r.jsxs)("div", {
        className: a()(h.kL, { [h.ib]: !C, [h.c$]: C }),
        children: [
            null != I &&
                (0, r.jsx)("div", {
                    className: h.NM,
                    children: (0, r.jsx)(d.A, {
                        isHighlighted: n,
                        skuId: I.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            C &&
                (0, r.jsx)("div", {
                    className: h.M4,
                    children: (0, r.jsx)(c.A, {
                        user: i,
                        nameplate: S,
                        isHighlighted: n,
                        showPlaceholderUser: !n || g,
                        pendingAvatarDecoration: y,
                    }),
                }),
            null != y &&
                (0, r.jsx)("div", {
                    className: h._P,
                    children: (0, r.jsx)(p.i, {
                        item: y,
                        user: i,
                        avatarSize: b,
                        isHighlighted: n,
                        showDefaultAvatar: g,
                        disableAnimation: A,
                        avatarPlaceholderSrc: R,
                        className: h.my,
                    }),
                }),
        ],
    });
});
