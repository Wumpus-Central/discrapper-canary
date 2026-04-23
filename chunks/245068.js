n.d(t, { X: () => v });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(17928),
    o = n(462887),
    c = n(778712),
    d = n(736653),
    u = n(775602),
    m = n(320447),
    h = n(442759),
    f = n(344346),
    _ = n(139136),
    g = n(929283),
    p = n(806771),
    x = n(180171),
    E = n(989099);
let v = a.memo(function (e) {
    let { product: t, isHighlighted: n, user: a, forCollectedModal: i, staticPreviewClassName: v } = e,
        { firstProfileEffect: A, firstAvatarDecoration: I, firstNameplate: b } = (0, h.f5)(t),
        { enabled: j } = (0, m.P)("BundlePreview"),
        C = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        N = (0, d.Ay)(),
        S = (0, o.q)(N),
        y = null != b && null != I && null != A,
        R = y ? c._3.SIZE_72 : c._3.SIZE_80,
        L = t.previewAssets?.fgStatic;
    if (j && null != L) {
        let e = n && !C,
            a = t.previewAssets?.fgAnimated;
        return (0, l.jsx)("div", {
            className: p.EJ,
            children: (0, l.jsx)("img", {
                className: r()(p.d2, v, { [p.M2]: n }),
                src: e && null != a ? a : L,
                alt: t.name,
            }),
        });
    }
    return (0, l.jsxs)("div", {
        className: r()(p.kL, { [p.ib]: !y, [p.c$]: y }),
        children: [
            null != A &&
                (0, l.jsx)("div", {
                    className: p.NM,
                    children: (0, l.jsx)(_.A, {
                        isHighlighted: n,
                        skuId: A.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: i,
                        withScaleAnimation: i,
                    }),
                }),
            y &&
                (0, l.jsx)("div", {
                    className: p.M4,
                    children: (0, l.jsx)(f.A, {
                        user: a,
                        nameplate: b,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: I,
                    }),
                }),
            null != I &&
                (0, l.jsx)("div", {
                    className: p._P,
                    children: (0, l.jsx)(g.i, {
                        item: I,
                        user: a,
                        avatarSize: R,
                        isHighlighted: n,
                        avatarPlaceholderSrc: S ? E : x,
                        className: p.my,
                    }),
                }),
        ],
    });
});
