a.d(s, { X: () => j });
var t = a(627968),
    i = a(64700),
    l = a(503698),
    r = a.n(l),
    d = a(17928),
    c = a(462887),
    n = a(778712),
    u = a(736653),
    o = a(775602),
    h = a(442759),
    m = a(344346),
    v = a(139136),
    p = a(929283),
    g = a(806771),
    A = a(180171),
    f = a(989099);
let j = i.memo(function (e) {
    let { product: s, isHighlighted: a, user: i, forCollectedModal: l, staticPreviewClassName: j } = e,
        { firstProfileEffect: x, firstAvatarDecoration: N, firstNameplate: y } = (0, h.f5)(s),
        H = (0, d.bG)([o.Ay], () => o.Ay.useReducedMotion),
        S = (0, u.Ay)(),
        b = (0, c.q)(S),
        k = null != y && null != N && null != x,
        w = k ? n._3.SIZE_72 : n._3.SIZE_80,
        I = s.previewAssets?.fgStatic;
    if (null != I) {
        let e = a && !H,
            i = s.previewAssets?.fgAnimated;
        return (0, t.jsx)("div", {
            className: g.EJ,
            children: (0, t.jsx)("img", {
                className: r()(g.d2, j, { [g.M2]: a }),
                src: e && null != i ? i : I,
                alt: s.name,
            }),
        });
    }
    return (0, t.jsxs)("div", {
        className: r()(g.kL, { [g.ib]: !k, [g.c$]: k }),
        children: [
            null != x &&
                (0, t.jsx)("div", {
                    className: g.NM,
                    children: (0, t.jsx)(v.A, {
                        isHighlighted: a,
                        skuId: x.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: l,
                        withScaleAnimation: l,
                    }),
                }),
            k &&
                (0, t.jsx)("div", {
                    className: g.M4,
                    children: (0, t.jsx)(m.A, {
                        user: i,
                        nameplate: y,
                        isHighlighted: a,
                        showPlaceholderUser: !a,
                        pendingAvatarDecoration: N,
                        hideDecorators: !0,
                    }),
                }),
            null != N &&
                (0, t.jsx)("div", {
                    className: g._P,
                    children: (0, t.jsx)(p.i, {
                        item: N,
                        user: i,
                        avatarSize: w,
                        isHighlighted: a,
                        avatarPlaceholderSrc: b ? f : A,
                        className: g.my,
                    }),
                }),
        ],
    });
});
