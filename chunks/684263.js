n.d(t, { U: () => E });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(566697),
    d = n(876917),
    f = n(328456),
    p = n(619899),
    _ = n(616066),
    m = n(689157),
    h = n(63243),
    g = n(244488);
let E = i.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: i, user: a, forCollectedModal: E } = e,
        { firstProfileEffect: b, firstAvatarDecoration: y, firstNameplate: O } = (0, f.Rj)(t),
        v = (0, p.O1)(y),
        S = (0, c.ZP)(),
        I = (0, s.ap)(S),
        T = null != O && null != y && null != b,
        A = T ? l.EFr.SIZE_72 : l.EFr.SIZE_80,
        C = I ? g : h;
    return (0, r.jsxs)("div", {
        className: o()(m.container, {
            [m.twoItemBundle]: !T,
            [m.threeItemBundle]: T,
        }),
        children: [
            null != b &&
                (0, r.jsx)("div", {
                    className: m.profileEffectShopPreview,
                    children: (0, r.jsx)(d.Z, {
                        isHighlighted: i,
                        skuId: b.skuId,
                        isPurchased: n,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: E,
                        withScaleAnimation: E,
                    }),
                }),
            T &&
                (0, r.jsx)("div", {
                    className: m.nameplatePreview,
                    children: (0, r.jsx)(u.Z, {
                        user: a,
                        nameplate: O,
                        isHighlighted: i,
                        isPurchased: n,
                        showPlaceholderUser: !i,
                        pendingAvatarDecoration: v,
                    }),
                }),
            null != v &&
                (0, r.jsx)("div", {
                    className: m.avatarDecorationPreview,
                    children: (0, r.jsx)(_.R, {
                        item: v,
                        user: a,
                        avatarSize: A,
                        isPurchased: n,
                        isHighlighted: i,
                        avatarPlaceholderSrc: C,
                        className: m.avatar,
                    }),
                }),
        ],
    });
});
