a.d(s, { X: () => x });
var l = a(627968),
    i = a(64700),
    t = a(503698),
    r = a.n(t),
    d = a(17928),
    n = a(462887),
    c = a(778712),
    u = a(736653),
    o = a(775602),
    h = a(320447),
    m = a(442759),
    v = a(344346),
    p = a(139136),
    g = a(929283),
    A = a(806771),
    f = a(180171),
    j = a(989099);
let x = i.memo(function (e) {
    let { product: s, isHighlighted: a, user: i, forCollectedModal: t, staticPreviewClassName: x } = e,
        { firstProfileEffect: N, firstAvatarDecoration: b, firstNameplate: H } = (0, m.f5)(s),
        { enabled: S } = (0, h.P)("BundlePreview"),
        k = (0, d.bG)([o.A], () => o.A.useReducedMotion),
        w = (0, u.Ay)(),
        P = (0, n.q)(w),
        y = null != H && null != b && null != N,
        I = y ? c._3.SIZE_72 : c._3.SIZE_80,
        _ = s.previewAssets?.fgStatic;
    if (S && null != _) {
        let e = a && !k,
            i = s.previewAssets?.fgAnimated;
        return (0, l.jsx)("div", {
            className: A.EJ,
            children: (0, l.jsx)("img", {
                className: r()(A.d2, x, { [A.M2]: a }),
                src: e && null != i ? i : _,
                alt: s.name,
            }),
        });
    }
    return (0, l.jsxs)("div", {
        className: r()(A.kL, { [A.ib]: !y, [A.c$]: y }),
        children: [
            null != N &&
                (0, l.jsx)("div", {
                    className: A.NM,
                    children: (0, l.jsx)(p.A, {
                        isHighlighted: a,
                        skuId: N.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: t,
                        withScaleAnimation: t,
                    }),
                }),
            y &&
                (0, l.jsx)("div", {
                    className: A.M4,
                    children: (0, l.jsx)(v.A, {
                        user: i,
                        nameplate: H,
                        isHighlighted: a,
                        showPlaceholderUser: !a,
                        pendingAvatarDecoration: b,
                        hideDecorators: !0,
                    }),
                }),
            null != b &&
                (0, l.jsx)("div", {
                    className: A._P,
                    children: (0, l.jsx)(g.i, {
                        item: b,
                        user: i,
                        avatarSize: I,
                        isHighlighted: a,
                        avatarPlaceholderSrc: P ? j : f,
                        className: A.my,
                    }),
                }),
        ],
    });
});
