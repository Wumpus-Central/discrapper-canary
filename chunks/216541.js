n.d(t, { d: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(876917),
    u = n(328456),
    d = n(619899),
    _ = n(616066),
    f = n(912397),
    p = n(63243),
    h = n(244488);
let m = (e) => {
    let { product: t, isPurchased: n, isHighlighted: i, user: m, forCollectedModal: g, profileEffectClassName: E } = e,
        { firstProfileEffect: b, firstAvatarDecoration: y } = (0, u.Rj)(t),
        O = (0, d.O1)(y),
        v = (0, l.ZP)(),
        I = (0, o.ap)(v);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != b
                ? (0, r.jsx)('div', {
                      className: a()(f.profileEffectShopPreview, E),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: i,
                          profileEffectId: b.id,
                          isPurchased: n,
                          forCollectedModal: g,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != O
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(_.R, {
                          item: O,
                          user: m,
                          avatarSize: s.EFr.SIZE_120,
                          isPurchased: n,
                          isHighlighted: i,
                          avatarPlaceholderSrc: I ? h : p
                      })
                  })
                : null
        ]
    });
};
