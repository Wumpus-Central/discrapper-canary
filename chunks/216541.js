n.d(t, { d: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(876917),
    u = n(328456),
    d = n(616066),
    f = n(986599),
    p = n(63243),
    _ = n(244488);
let h = (e) => {
    let { product: t, isPurchased: n, isHighlighted: i, user: h, forCollectedModal: m, profileEffectClassName: g } = e,
        { firstProfileEffect: E, firstAvatarDecoration: v } = (0, u.R)(t),
        b = (0, l.ZP)(),
        y = (0, a.ap)(b);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != E
                ? (0, r.jsx)('div', {
                      className: o()(f.profileEffectShopPreview, g),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: i,
                          profileEffectId: E.id,
                          isPurchased: n,
                          forCollectedModal: m,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != v
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(d.R, {
                          item: v,
                          user: h,
                          avatarSize: s.EFr.SIZE_120,
                          isPurchased: n,
                          isHighlighted: i,
                          avatarPlaceholderSrc: y ? _ : p
                      })
                  })
                : null
        ]
    });
};
