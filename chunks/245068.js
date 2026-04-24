a.d(t, { X: () => v });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(17928),
    o = a(462887),
    c = a(778712),
    d = a(736653),
    u = a(775602),
    h = a(320447),
    p = a(442759),
    m = a(344346),
    f = a(139136),
    b = a(929283),
    _ = a(806771),
    g = a(180171),
    x = a(989099);
let v = n.memo(function (e) {
    let { product: t, isHighlighted: a, user: n, forCollectedModal: l, staticPreviewClassName: v } = e,
        { firstProfileEffect: A, firstAvatarDecoration: y, firstNameplate: E } = (0, p.f5)(t),
        { enabled: I } = (0, h.P)("BundlePreview"),
        S = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        j = (0, d.Ay)(),
        C = (0, o.q)(j),
        T = null != E && null != y && null != A,
        R = T ? c._3.SIZE_72 : c._3.SIZE_80,
        w = t.previewAssets?.fgStatic;
    if (I && null != w) {
        let e = a && !S,
            n = t.previewAssets?.fgAnimated;
        return (0, r.jsx)("div", {
            className: _.EJ,
            children: (0, r.jsx)("img", {
                className: i()(_.d2, v, { [_.M2]: a }),
                src: e && null != n ? n : w,
                alt: t.name,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: i()(_.kL, { [_.ib]: !T, [_.c$]: T }),
        children: [
            null != A &&
                (0, r.jsx)("div", {
                    className: _.NM,
                    children: (0, r.jsx)(f.A, {
                        isHighlighted: a,
                        skuId: A.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: l,
                        withScaleAnimation: l,
                    }),
                }),
            T &&
                (0, r.jsx)("div", {
                    className: _.M4,
                    children: (0, r.jsx)(m.A, {
                        user: n,
                        nameplate: E,
                        isHighlighted: a,
                        showPlaceholderUser: !a,
                        pendingAvatarDecoration: y,
                    }),
                }),
            null != y &&
                (0, r.jsx)("div", {
                    className: _._P,
                    children: (0, r.jsx)(b.i, {
                        item: y,
                        user: n,
                        avatarSize: R,
                        isHighlighted: a,
                        avatarPlaceholderSrc: C ? x : g,
                        className: _.my,
                    }),
                }),
        ],
    });
});
