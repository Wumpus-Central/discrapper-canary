n.d(t, { d: () => E });
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
    m = n(235809),
    h = n(63243),
    g = n(244488);
let E = i.memo(function (e) {
    let { product: t, isHighlighted: n, user: i, forCollectedModal: a } = e,
        { firstProfileEffect: E, firstAvatarDecoration: b, firstNameplate: y } = (0, f.Rj)(t),
        O = (0, p.O1)(b),
        v = (0, c.ZP)(),
        S = (0, s.ap)(v),
        I = null != y && null != b && null != E,
        T = I ? l.EFr.SIZE_72 : l.EFr.SIZE_80,
        C = S ? g : h;
    return (0, r.jsxs)("div", {
        className: o()(m.container, {
            [m.twoItemBundle]: !I,
            [m.threeItemBundle]: I,
        }),
        children: [
            null != E &&
                (0, r.jsx)("div", {
                    className: m.profileEffectShopPreview,
                    children: (0, r.jsx)(d.Z, {
                        isHighlighted: n,
                        skuId: E.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: a,
                        withScaleAnimation: a,
                    }),
                }),
            I &&
                (0, r.jsx)("div", {
                    className: m.nameplatePreview,
                    children: (0, r.jsx)(u.Z, {
                        user: i,
                        nameplate: y,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        pendingAvatarDecoration: O,
                    }),
                }),
            null != O &&
                (0, r.jsx)("div", {
                    className: m.avatarDecorationPreview,
                    children: (0, r.jsx)(_.R, {
                        item: O,
                        user: i,
                        avatarSize: T,
                        isHighlighted: n,
                        avatarPlaceholderSrc: C,
                        className: m.avatar,
                    }),
                }),
        ],
    });
});
