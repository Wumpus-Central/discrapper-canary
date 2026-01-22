n.d(t, { X: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(550111),
    d = n(331402),
    f = n(442759),
    p = n(940622),
    _ = n(929283),
    h = n(650906),
    m = n(180171),
    g = n(989099);
let E = i.memo(function (e) {
    let { product: t, isHighlighted: n, user: i, forCollectedModal: a } = e,
        { firstProfileEffect: E, firstAvatarDecoration: b, firstNameplate: y } = (0, f.f5)(t),
        O = (0, p.br)(b),
        A = (0, c.Ay)(),
        v = (0, o.qB)(A),
        S = null != y && null != b && null != E,
        I = S ? l._3J.SIZE_72 : l._3J.SIZE_80,
        T = v ? g : m;
    return (0, r.jsxs)("div", {
        className: s()(h.kL, {
            [h.ib]: !S,
            [h.c$]: S,
        }),
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
            S &&
                (0, r.jsx)("div", {
                    className: h.M4,
                    children: (0, r.jsx)(u.A, {
                        user: i,
                        nameplate: y,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: O,
                    }),
                }),
            null != O &&
                (0, r.jsx)("div", {
                    className: h._P,
                    children: (0, r.jsx)(_.i, {
                        item: O,
                        user: i,
                        avatarSize: I,
                        isHighlighted: n,
                        avatarPlaceholderSrc: T,
                        className: h.my,
                    }),
                }),
        ],
    });
});
