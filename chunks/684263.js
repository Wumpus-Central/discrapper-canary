n.d(t, { U: () => _ });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(566697),
    d = n(876917),
    f = n(328456),
    g = n(619899),
    p = n(616066),
    m = n(106221),
    h = n(63243),
    C = n(244488);
let _ = l.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: l, user: i } = e,
        { firstProfileEffect: _, firstAvatarDecoration: b, firstNameplate: v } = (0, f.Rj)(t),
        x = (0, g.O1)(b),
        E = (0, c.ZP)(),
        O = (0, s.ap)(E),
        S = null != v && null != b && null != _,
        y = S ? o.EFr.SIZE_72 : o.EFr.SIZE_80;
    return (0, r.jsxs)("div", {
        className: a()(m.container, {
            [m.twoItemBundle]: !S,
            [m.threeItemBundle]: S,
        }),
        children: [
            null != _ &&
                (0, r.jsx)("div", {
                    className: m.profileEffectShopPreview,
                    children: (0, r.jsx)(d.Z, {
                        isHighlighted: l,
                        skuId: _.skuId,
                        isPurchased: n,
                        removeSetHeight: !0,
                    }),
                }),
            S &&
                (0, r.jsx)("div", {
                    className: m.nameplatePreview,
                    children: (0, r.jsx)(u.Z, {
                        user: i,
                        nameplate: v,
                        isHighlighted: l,
                        isPurchased: n,
                        showPlaceholderUser: !l,
                        pendingAvatarDecoration: x,
                    }),
                }),
            null != x &&
                (0, r.jsx)("div", {
                    className: m.avatarDecorationPreview,
                    children: (0, r.jsx)(p.R, {
                        item: x,
                        user: i,
                        avatarSize: y,
                        isPurchased: n,
                        isHighlighted: l,
                        avatarPlaceholderSrc: O ? C : h,
                        className: m.avatar,
                    }),
                }),
        ],
    });
});
