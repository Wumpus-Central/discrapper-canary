r.d(t, { d: () => v });
var n = r(951288);
r(647438);
var l = r(120356),
    i = r.n(l),
    a = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(876917),
    u = r(328456),
    d = r(330349),
    p = r(619899),
    f = r(616066),
    b = r(22267),
    h = r(127782),
    g = r(63243),
    y = r(244488);
let v = (e) => {
    let { product: t, isPurchased: r, isHighlighted: l, user: v, forCollectedModal: m, containerClassName: O } = e,
        { firstProfileEffect: P, firstAvatarDecoration: j, firstNameplate: _ } = (0, u.Rj)(t),
        E = (0, p.O1)(j),
        x = (0, s.ZP)(),
        C = (0, a.ap)(x),
        S = (0, d.L)(t);
    return (0, n.jsxs)("div", {
        className: i()(h.container, S ? h.threeItemBundle : null, O),
        children: [
            (0, n.jsx)("div", {
                className: i()(h.profileEffectShopPreview, m ? h.profileEffectShopPreviewCollectedModal : null),
                children:
                    null != P &&
                    (0, n.jsx)(c.Z, {
                        isHovering: l,
                        skuId: P.skuId,
                        isPurchased: r,
                        forCollectedModal: m,
                        removeSetHeight: !0,
                    }),
            }),
            (0, n.jsx)("div", {
                className: i()(
                    h.avatarDecorationPreview,
                    m ? h.avatarDecorationPreviewCollectedModal : null,
                    S ? h.avatarDecorationDropShadow : null,
                ),
                children: (0, n.jsx)(f.R, {
                    item: E,
                    user: v,
                    avatarSize: null != _ ? o.EFr.SIZE_96 : o.EFr.SIZE_120,
                    isPurchased: r,
                    isHighlighted: l,
                    avatarPlaceholderSrc: C ? y : g,
                }),
            }),
            S &&
                (0, n.jsx)("div", {
                    className: i()(h.nameplatePreview, m ? h.nameplatePreviewCollectedModal : null),
                    children: (0, n.jsx)(b.Z, {
                        user: v,
                        nameplate: _,
                        isHighlighted: l,
                        isPurchased: r,
                        nameplatePreviewSize: "default",
                        showPlaceholderUser: !l,
                        avatarDecorationOverride: null != E ? E : void 0,
                    }),
                }),
        ],
    });
};
