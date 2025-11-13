n.d(t, { U: () => _ });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(566697),
    d = n(876917),
    g = n(328456),
    p = n(619899),
    f = n(616066),
    h = n(689157),
    C = n(63243),
    m = n(244488);
let _ = l.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: l, user: i } = e,
        { firstProfileEffect: _, firstAvatarDecoration: b, firstNameplate: v } = (0, g.Rj)(t),
        x = (0, p.O1)(b),
        E = (0, c.ZP)(),
        S = (0, o.ap)(E),
        O = null != v && null != b && null != _,
        y = O ? s.EFr.SIZE_72 : s.EFr.SIZE_80;
    return (0, r.jsxs)("div", {
        className: a()(h.container, {
            [h.twoItemBundle]: !O,
            [h.threeItemBundle]: O,
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
            O &&
                (0, r.jsx)("div", {
                    className: h.nameplatePreview,
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
                    className: h.avatarDecorationPreview,
                    children: (0, r.jsx)(f.R, {
                        item: x,
                        user: i,
                        avatarSize: y,
                        isPurchased: n,
                        isHighlighted: l,
                        avatarPlaceholderSrc: S ? m : C,
                        className: h.avatar,
                    }),
                }),
        ],
    });
});
