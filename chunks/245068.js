i.d(s, { X: () => x });
var l = i(627968),
    a = i(64700),
    t = i(503698),
    r = i.n(t),
    c = i(17928),
    d = i(462887),
    n = i(778712),
    h = i(736653),
    u = i(775602),
    m = i(442759),
    o = i(344346),
    v = i(139136),
    g = i(929283),
    p = i(806771),
    A = i(180171),
    j = i(989099);
let x = a.memo(function (e) {
    let { product: s, isHighlighted: i, user: a, forCollectedModal: t, staticPreviewClassName: x } = e,
        { firstProfileEffect: f, firstAvatarDecoration: N, firstNameplate: k } = (0, m.f5)(s),
        S = (0, c.bG)([u.Ay], () => u.Ay.useReducedMotion),
        _ = (0, h.Ay)(),
        w = (0, d.q)(_),
        y = null != k && null != N && null != f,
        I = y ? n._3.SIZE_72 : n._3.SIZE_80,
        b = s.previewAssets?.fgStatic;
    if (null != b) {
        let e = i && !S,
            a = s.previewAssets?.fgAnimated;
        return (0, l.jsx)("div", {
            className: p.EJ,
            children: (0, l.jsx)("img", {
                className: r()(p.d2, x, { [p.M2]: i }),
                src: e && null != a ? a : b,
                alt: s.name,
            }),
        });
    }
    return (0, l.jsxs)("div", {
        className: r()(p.kL, { [p.ib]: !y, [p.c$]: y }),
        children: [
            null != f &&
                (0, l.jsx)("div", {
                    className: p.NM,
                    children: (0, l.jsx)(v.A, {
                        isHighlighted: i,
                        skuId: f.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: t,
                        withScaleAnimation: t,
                    }),
                }),
            y &&
                (0, l.jsx)("div", {
                    className: p.M4,
                    children: (0, l.jsx)(o.A, {
                        user: a,
                        nameplate: k,
                        isHighlighted: i,
                        showPlaceholderUser: !i,
                        pendingAvatarDecoration: N,
                        hideDecorators: !0,
                    }),
                }),
            null != N &&
                (0, l.jsx)("div", {
                    className: p._P,
                    children: (0, l.jsx)(g.i, {
                        item: N,
                        user: a,
                        avatarSize: I,
                        isHighlighted: i,
                        avatarPlaceholderSrc: w ? j : A,
                        className: p.my,
                    }),
                }),
        ],
    });
});
