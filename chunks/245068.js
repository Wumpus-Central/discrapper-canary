"use strict";
n.d(t, { X: () => E });
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
    f = n(929283),
    p = n(122952),
    h = n(180171),
    m = n(989099);
let E = i.memo(function (e) {
    let {
            product: t,
            isHighlighted: n,
            user: i,
            forCollectedModal: s,
            showDefaultAvatar: E = !1,
            disableAnimation: g = !1,
        } = e,
        { firstProfileEffect: A, firstAvatarDecoration: I, firstNameplate: T } = (0, _.f5)(t),
        S = (0, u.Ay)(),
        y = (0, o.qB)(S),
        v = null != T && null != I && null != A,
        N = v ? l._3J.SIZE_72 : l._3J.SIZE_80,
        C = y ? m : h;
    return (0, r.jsxs)("div", {
        className: a()(p.kL, { [p.ib]: !v, [p.c$]: v }),
        children: [
            null != A &&
                (0, r.jsx)("div", {
                    className: p.NM,
                    children: (0, r.jsx)(d.A, {
                        isHighlighted: n,
                        skuId: A.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            v &&
                (0, r.jsx)("div", {
                    className: p.M4,
                    children: (0, r.jsx)(c.A, {
                        user: i,
                        nameplate: T,
                        isHighlighted: n,
                        showPlaceholderUser: !n || E,
                        pendingAvatarDecoration: I,
                    }),
                }),
            null != I &&
                (0, r.jsx)("div", {
                    className: p._P,
                    children: (0, r.jsx)(f.i, {
                        item: I,
                        user: i,
                        avatarSize: N,
                        isHighlighted: n,
                        showDefaultAvatar: E,
                        disableAnimation: g,
                        avatarPlaceholderSrc: C,
                        className: p.my,
                    }),
                }),
        ],
    });
});
