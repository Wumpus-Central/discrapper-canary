r.d(t, { d: () => P });
var a = r(951288);
r(647438);
var n = r(120356),
    i = r.n(n),
    l = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(876917),
    d = r(328456),
    u = r(330349),
    f = r(619899),
    p = r(616066),
    v = r(22267),
    h = r(881937),
    m = r(63243),
    g = r(244488);
let P = (e) => {
    let { product: t, isPurchased: r, isHighlighted: n, user: P, forCollectedModal: w, containerClassName: y } = e,
        { firstProfileEffect: b, firstAvatarDecoration: O, firstNameplate: _ } = (0, d.Rj)(t),
        j = (0, f.O1)(O),
        E = (0, s.ZP)(),
        C = (0, l.ap)(E),
        x = (0, u.L)(t);
    return (0, a.jsxs)("div", {
        className: i()(h.container, x ? h.threeItemBundle : null, y),
        children: [
            (0, a.jsx)("div", {
                className: i()(h.profileEffectShopPreview, w ? h.profileEffectShopPreviewCollectedModal : null),
                children:
                    null != b &&
                    (0, a.jsx)(c.Z, {
                        isHighlighted: n,
                        skuId: b.skuId,
                        isPurchased: r,
                        forCollectedModal: w,
                        removeSetHeight: !0,
                    }),
            }),
            (0, a.jsx)("div", {
                className: i()(
                    h.avatarDecorationPreview,
                    w ? h.avatarDecorationPreviewCollectedModal : null,
                    x ? h.avatarDecorationDropShadow : null,
                ),
                children: (0, a.jsx)(p.R, {
                    item: j,
                    user: P,
                    avatarSize: null != _ ? o.EFr.SIZE_96 : o.EFr.SIZE_120,
                    isPurchased: r,
                    isHighlighted: n,
                    avatarPlaceholderSrc: C ? g : m,
                }),
            }),
            x &&
                (0, a.jsx)("div", {
                    className: i()(h.nameplatePreview, w ? h.nameplatePreviewCollectedModal : null),
                    children: (0, a.jsx)(v.Z, {
                        user: P,
                        nameplate: _,
                        isHighlighted: n,
                        isPurchased: r,
                        nameplatePreviewSize: "default",
                        showPlaceholderUser: !n,
                        avatarDecorationOverride: null != j ? j : void 0,
                    }),
                }),
        ],
    });
};
