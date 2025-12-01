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
    p = n(330349),
    _ = n(619899),
    m = n(616066),
    h = n(881937),
    g = n(63243),
    E = n(244488);
let b = i.memo(function (e) {
    let { product: t, isPurchased: n, isHighlighted: a, user: b, forCollectedModal: y, containerClassName: O } = e,
        { firstProfileEffect: v, firstAvatarDecoration: S, firstNameplate: I } = (0, f.Rj)(t),
        T = (0, _.O1)(S),
        A = (0, c.ZP)(),
        C = (0, s.ap)(A),
        N = i.useMemo(() => (0, p.L)(t), [t]),
        P = i.useMemo(() => (null != I ? l.EFr.SIZE_96 : l.EFr.SIZE_120), [I]),
        R = i.useMemo(() => (C ? E : g), [C]);
    return (0, r.jsxs)("div", {
        className: o()(h.container, N ? h.threeItemBundle : null, O),
        children: [
            (0, r.jsx)("div", {
                className: o()(h.profileEffectShopPreview, y ? h.profileEffectShopPreviewCollectedModal : null),
                children:
                    null != v &&
                    (0, r.jsx)(d.Z, {
                        isHighlighted: a,
                        skuId: v.skuId,
                        isPurchased: n,
                        removeSetHeight: !0,
                        withScaleAnimation: y,
                        delayProfileEffectIntro: y,
                    }),
            }),
            (0, r.jsx)("div", {
                className: o()(
                    h.avatarDecorationPreview,
                    y ? h.avatarDecorationPreviewCollectedModal : null,
                    N ? h.avatarDecorationDropShadow : null,
                ),
                children: (0, r.jsx)(m.R, {
                    item: T,
                    user: b,
                    avatarSize: P,
                    isPurchased: n,
                    isHighlighted: a,
                    avatarPlaceholderSrc: R,
                    className: h.avatar,
                }),
            }),
            N &&
                (0, r.jsx)("div", {
                    className: o()(h.nameplatePreview, y ? h.nameplatePreviewCollectedModal : null),
                    children: (0, r.jsx)(u.Z, {
                        user: b,
                        nameplate: I,
                        isHighlighted: a,
                        isPurchased: n,
                        nameplatePreviewSize: "default",
                        showPlaceholderUser: !a,
                        pendingAvatarDecoration: T,
                    }),
                }),
        ],
    });
});
