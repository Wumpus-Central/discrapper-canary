n.d(t, { U: () => _ });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(566697),
    d = n(876917),
    p = n(328456),
    g = n(619899),
    f = n(616066),
    h = n(689157),
    C = n(63243),
    m = n(244488);
let _ = l.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: l, user: i } = e,
        { firstProfileEffect: _, firstAvatarDecoration: b, firstNameplate: v } = (0, p.Rj)(t),
        E = (0, g.O1)(b),
        x = (0, c.ZP)(),
        O = (0, a.ap)(x),
        S = null != v && null != b && null != _,
        y = S ? o.EFr.SIZE_72 : o.EFr.SIZE_80;
    return (0, r.jsxs)("div", {
        className: s()(h.container, {
            [h.twoItemBundle]: !S,
            [h.threeItemBundle]: S,
        }),
        children: [
            null != _ &&
                (0, r.jsx)("div", {
                    className: h.profileEffectShopPreview,
                    children: (0, r.jsx)(d.Z, {
                        isHighlighted: l,
                        skuId: _.skuId,
                        isPurchased: n,
                        removeSetHeight: !0,
                    }),
                }),
            S &&
                (0, r.jsx)("div", {
                    className: h.nameplatePreview,
                    children: (0, r.jsx)(u.Z, {
                        user: i,
                        nameplate: v,
                        isHighlighted: l,
                        isPurchased: n,
                        showPlaceholderUser: !l,
                        pendingAvatarDecoration: E,
                    }),
                }),
            null != E &&
                (0, r.jsx)("div", {
                    className: h.avatarDecorationPreview,
                    children: (0, r.jsx)(f.R, {
                        item: E,
                        user: i,
                        avatarSize: y,
                        isPurchased: n,
                        isHighlighted: l,
                        avatarPlaceholderSrc: O ? m : C,
                        className: h.avatar,
                    }),
                }),
        ],
    });
});
