r.d(t, { d: () => b });
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    a = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(876917),
    u = r(328456),
    d = r(619899),
    p = r(616066),
    f = r(912397),
    g = r(63243),
    h = r(244488);
let b = (e) => {
    let { product: t, isPurchased: r, isHighlighted: l, user: b, forCollectedModal: m, containerClassName: _, profileEffectClassName: O, avatarDecorationClassName: v } = e,
        { firstProfileEffect: C, firstAvatarDecoration: E } = (0, u.Rj)(t),
        S = (0, d.O1)(E),
        y = (0, s.ZP)(),
        x = (0, a.ap)(y);
    return (0, n.jsxs)('div', {
        className: i()(f.container, _),
        children: [
            null != C
                ? (0, n.jsx)('div', {
                      className: i()(f.profileEffectShopPreview, O),
                      children: (0, n.jsx)(c.Z, {
                          isHovering: l,
                          profileEffectId: C.id,
                          isPurchased: r,
                          forCollectedModal: m,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != S
                ? (0, n.jsx)('div', {
                      className: i()(f.avatarDecorationPreview, v),
                      children: (0, n.jsx)(p.R, {
                          item: S,
                          user: b,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: r,
                          isHighlighted: l,
                          avatarPlaceholderSrc: x ? h : g
                      })
                  })
                : null
        ]
    });
};
