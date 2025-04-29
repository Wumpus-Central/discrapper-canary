n.d(t, { d: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(876917),
    u = n(328456),
    d = n(619899),
    f = n(616066),
    _ = n(912397),
    p = n(63243),
    h = n(244488);
let m = (e) => {
    let { product: t, isPurchased: n, isHighlighted: i, user: m, forCollectedModal: g, profileEffectClassName: E } = e,
        { firstProfileEffect: b, firstAvatarDecoration: y } = (0, u.R)(t),
        O = (0, d.O1)(y),
        v = (0, l.ZP)(),
        I = (0, a.ap)(v);
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            null != b
                ? (0, r.jsx)('div', {
                      className: o()(_.profileEffectShopPreview, E),
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
                      className: _.avatarDecorationPreview,
                      children: (0, r.jsx)(f.R, {
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
