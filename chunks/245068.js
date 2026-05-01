n.d(t, { X: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    o = n(462887),
    d = n(778712),
    u = n(736653),
    c = n(775602),
    h = n(320447),
    E = n(442759),
    A = n(344346),
    _ = n(139136),
    p = n(929283),
    g = n(806771),
    f = n(180171),
    I = n(989099);
let S = l.memo(function (e) {
    let { product: t, isHighlighted: n, user: l, forCollectedModal: a, staticPreviewClassName: S } = e,
        { firstProfileEffect: T, firstAvatarDecoration: m, firstNameplate: C } = (0, E.f5)(t),
        { enabled: O } = (0, h.P)("BundlePreview"),
        N = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        y = (0, u.Ay)(),
        R = (0, o.q)(y),
        L = null != C && null != m && null != T,
        v = L ? d._3.SIZE_72 : d._3.SIZE_80,
        D = t.previewAssets?.fgStatic;
    if (O && null != D) {
        let e = n && !N,
            l = t.previewAssets?.fgAnimated;
        return (0, i.jsx)("div", {
            className: g.EJ,
            children: (0, i.jsx)("img", {
                className: r()(g.d2, S, { [g.M2]: n }),
                src: e && null != l ? l : D,
                alt: t.name,
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: r()(g.kL, { [g.ib]: !L, [g.c$]: L }),
        children: [
            null != T &&
                (0, i.jsx)("div", {
                    className: g.NM,
                    children: (0, i.jsx)(_.A, {
                        isHighlighted: n,
                        skuId: T.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: a,
                        withScaleAnimation: a,
                    }),
                }),
            L &&
                (0, i.jsx)("div", {
                    className: g.M4,
                    children: (0, i.jsx)(A.A, {
                        user: l,
                        nameplate: C,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: m,
                    }),
                }),
            null != m &&
                (0, i.jsx)("div", {
                    className: g._P,
                    children: (0, i.jsx)(p.i, {
                        item: m,
                        user: l,
                        avatarSize: v,
                        isHighlighted: n,
                        avatarPlaceholderSrc: R ? I : f,
                        className: g.my,
                    }),
                }),
        ],
    });
});
