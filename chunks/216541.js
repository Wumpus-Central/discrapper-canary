n.d(t, { d: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(780384),
    o = n(481060),
    l = n(410030),
    u = n(876917),
    c = n(328456),
    d = n(616066),
    f = n(379252),
    _ = n(63243),
    p = n(244488);
let h = (e) => {
    let { product: t, isPurchased: n, isHighlighted: r, user: h, forCollectedModal: m, profileEffectClassName: g } = e,
        { firstProfileEffect: E, firstAvatarDecoration: v } = (0, c.R)(t),
        y = (0, l.ZP)(),
        I = (0, s.ap)(y);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            null != E
                ? (0, i.jsx)('div', {
                      className: a()(f.profileEffectShopPreview, g),
                      children: (0, i.jsx)(u.Z, {
                          isHovering: r,
                          profileEffectId: E.id,
                          isPurchased: n,
                          forCollectedModal: m,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != v
                ? (0, i.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, i.jsx)(d.R, {
                          item: v,
                          user: h,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: n,
                          isHighlighted: r,
                          avatarPlaceholderSrc: I ? p : _
                      })
                  })
                : null
        ]
    });
};
