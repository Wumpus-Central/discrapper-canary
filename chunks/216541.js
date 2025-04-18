n.d(t, { d: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
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
        v = (0, d.O1)(y),
        O = (0, l.ZP)(),
        I = (0, o.ap)(O);
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            null != b
                ? (0, r.jsx)('div', {
                      className: a()(_.profileEffectShopPreview, E),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: i,
                          profileEffectId: b.id,
                          isPurchased: n,
                          forCollectedModal: g,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != v
                ? (0, r.jsx)('div', {
                      className: _.avatarDecorationPreview,
                      children: (0, r.jsx)(f.R, {
                          item: v,
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
