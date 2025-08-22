n.d(t, { d: () => E });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(876917),
    u = n(328456),
    d = n(330349),
    f = n(619899),
    _ = n(616066),
    p = n(22267),
    h = n(881937),
    m = n(63243),
    g = n(244488);
let E = (e) => {
    let { product: t, isPurchased: n, isHighlighted: i, user: E, forCollectedModal: b, containerClassName: y } = e,
        { firstProfileEffect: O, firstAvatarDecoration: v, firstNameplate: I } = (0, u.Rj)(t),
        T = (0, f.O1)(v),
        S = (0, l.ZP)(),
        A = (0, o.ap)(S),
        C = (0, d.L)(t);
    return (0, r.jsxs)("div", {
        className: a()(h.container, C ? h.threeItemBundle : null, y),
        children: [
            (0, r.jsx)("div", {
                className: a()(h.profileEffectShopPreview, b ? h.profileEffectShopPreviewCollectedModal : null),
                children: (0, r.jsx)(c.Z, {
                    isHovering: i,
                    profileEffectId: O.id,
                    isPurchased: n,
                    forCollectedModal: b,
                    removeSetHeight: !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(
                    h.avatarDecorationPreview,
                    b ? h.avatarDecorationPreviewCollectedModal : null,
                    C ? h.avatarDecorationDropShadow : null,
                ),
                children: (0, r.jsx)(_.R, {
                    item: T,
                    user: E,
                    avatarSize: null != I ? s.EFr.SIZE_96 : s.EFr.SIZE_120,
                    isPurchased: n,
                    isHighlighted: i,
                    avatarPlaceholderSrc: A ? g : m,
                }),
            }),
            C &&
                (0, r.jsx)("div", {
                    className: a()(h.nameplatePreview, b ? h.nameplatePreviewCollectedModal : null),
                    children: (0, r.jsx)(p.Z, {
                        user: E,
                        nameplate: I,
                        isHighlighted: i,
                        isPurchased: n,
                        nameplatePreviewSize: "default",
                        showPlaceholderUser: !i,
                        avatarDecorationOverride: null != T ? T : void 0,
                    }),
                }),
        ],
    });
};
