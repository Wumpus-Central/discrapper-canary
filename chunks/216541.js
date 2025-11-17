n.d(t, { d: () => b });
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
    _ = n(330349),
    p = n(619899),
    h = n(616066),
    m = n(881937),
    g = n(63243),
    E = n(244488);
let b = i.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: a, user: b, forCollectedModal: y, containerClassName: O } = e,
        { firstProfileEffect: v, firstAvatarDecoration: I, firstNameplate: T } = (0, f.Rj)(t),
        S = (0, p.O1)(I),
        A = (0, c.ZP)(),
        C = (0, s.ap)(A),
        N = i.useMemo(() => (0, _.L)(t), [t]),
        R = i.useMemo(() => (null != T ? l.EFr.SIZE_96 : l.EFr.SIZE_120), [T]),
        P = i.useMemo(() => (C ? E : g), [C]);
    return (0, r.jsxs)("div", {
        className: o()(m.container, N ? m.threeItemBundle : null, O),
        children: [
            (0, r.jsx)("div", {
                className: o()(m.profileEffectShopPreview, y ? m.profileEffectShopPreviewCollectedModal : null),
                children:
                    null != v &&
                    (0, r.jsx)(d.Z, {
                        isHighlighted: a,
                        skuId: v.skuId,
                        isPurchased: n,
                        forCollectedModal: y,
                        removeSetHeight: !0,
                    }),
            }),
            (0, r.jsx)("div", {
                className: o()(
                    m.avatarDecorationPreview,
                    y ? m.avatarDecorationPreviewCollectedModal : null,
                    N ? m.avatarDecorationDropShadow : null,
                ),
                children: (0, r.jsx)(h.R, {
                    item: S,
                    user: b,
                    avatarSize: R,
                    isPurchased: n,
                    isHighlighted: a,
                    avatarPlaceholderSrc: P,
                    className: m.avatar,
                }),
            }),
            N &&
                (0, r.jsx)("div", {
                    className: o()(m.nameplatePreview, y ? m.nameplatePreviewCollectedModal : null),
                    children: (0, r.jsx)(u.Z, {
                        user: b,
                        nameplate: T,
                        isHighlighted: a,
                        isPurchased: n,
                        nameplatePreviewSize: "default",
                        showPlaceholderUser: !a,
                        pendingAvatarDecoration: S,
                    }),
                }),
        ],
    });
});
