n.d(t, { U: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(566697),
    d = n(876917),
    f = n(328456),
    h = n(619899),
    p = n(616066),
    g = n(689157),
    m = n(63243),
    b = n(244488);
let _ = i.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: i, user: l } = e,
        { firstProfileEffect: _, firstAvatarDecoration: y, firstNameplate: O } = (0, f.Rj)(t),
        v = (0, h.O1)(y),
        j = (0, c.ZP)(),
        x = (0, a.ap)(j),
        C = null != O && null != y && null != _,
        E = C ? s.EFr.SIZE_72 : s.EFr.SIZE_80;
    return (0, r.jsxs)("div", {
        className: o()(g.container, {
            [g.twoItemBundle]: !C,
            [g.threeItemBundle]: C,
        }),
        children: [
            null != _ &&
                (0, r.jsx)("div", {
                    className: g.profileEffectShopPreview,
                    children: (0, r.jsx)(d.Z, {
                        isHighlighted: i,
                        skuId: _.skuId,
                        isPurchased: n,
                        removeSetHeight: !0,
                    }),
                }),
            C &&
                (0, r.jsx)("div", {
                    className: g.nameplatePreview,
                    children: (0, r.jsx)(u.Z, {
                        user: l,
                        nameplate: O,
                        isHighlighted: i,
                        isPurchased: n,
                        showPlaceholderUser: !i,
                        pendingAvatarDecoration: v,
                    }),
                }),
            null != v &&
                (0, r.jsx)("div", {
                    className: g.avatarDecorationPreview,
                    children: (0, r.jsx)(p.R, {
                        item: v,
                        user: l,
                        avatarSize: E,
                        isPurchased: n,
                        isHighlighted: i,
                        avatarPlaceholderSrc: x ? b : m,
                        className: g.avatar,
                    }),
                }),
        ],
    });
});
