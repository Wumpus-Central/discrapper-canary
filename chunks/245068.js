n.d(t, { X: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(462887),
    d = n(778712),
    c = n(736653),
    u = n(775602),
    h = n(320447),
    A = n(442759),
    _ = n(512213),
    m = n(139136),
    g = n(929283),
    p = n(806771),
    f = n(180171),
    E = n(989099);
let x = l.memo(function (e) {
    let { product: t, isHighlighted: n, user: l, forCollectedModal: s, staticPreviewClassName: x } = e,
        { firstProfileEffect: I, firstAvatarDecoration: C, firstNameplate: b } = (0, A.f5)(t),
        { enabled: N } = (0, h.P)("BundlePreview"),
        S = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        v = (0, c.Ay)(),
        T = (0, o.q)(v),
        y = null != b && null != C && null != I,
        R = y ? d._3.SIZE_72 : d._3.SIZE_80,
        j = t.previewAssets?.fgStatic;
    if (N && null != j) {
        let e = n && !S,
            l = t.previewAssets?.fgAnimated;
        return (0, i.jsx)("div", {
            className: p.EJ,
            children: (0, i.jsx)("img", {
                className: a()(p.d2, x, { [p.M2]: n }),
                src: e && null != l ? l : j,
                alt: t.name,
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(p.kL, { [p.ib]: !y, [p.c$]: y }),
        children: [
            null != I &&
                (0, i.jsx)("div", {
                    className: p.NM,
                    children: (0, i.jsx)(m.A, {
                        isHighlighted: n,
                        skuId: I.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                    }),
                }),
            y &&
                (0, i.jsx)("div", {
                    className: p.M4,
                    children: (0, i.jsx)(_.A, {
                        user: l,
                        nameplate: b,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: C,
                    }),
                }),
            null != C &&
                (0, i.jsx)("div", {
                    className: p._P,
                    children: (0, i.jsx)(g.i, {
                        item: C,
                        user: l,
                        avatarSize: R,
                        isHighlighted: n,
                        avatarPlaceholderSrc: T ? E : f,
                        className: p.my,
                    }),
                }),
        ],
    });
});
