r.d(n, {
    d: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(780384),
    l = r(481060),
    u = r(410030),
    c = r(876917),
    d = r(328456),
    f = r(616066),
    p = r(379252),
    h = r(63243),
    _ = r(244488);
let m = (e) => {
    let { product: n, isPurchased: r, isHighlighted: a, user: m, forCollectedModal: g, profileEffectClassName: E } = e,
        { firstProfileEffect: v, firstAvatarDecoration: y } = (0, d.R)(n),
        b = (0, u.ZP)(),
        I = (0, s.ap)(b);
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            null != v
                ? (0, i.jsx)('div', {
                      className: o()(p.profileEffectShopPreview, E),
                      children: (0, i.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: v.id,
                          isPurchased: r,
                          forCollectedModal: g,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != y
                ? (0, i.jsx)('div', {
                      className: p.avatarDecorationPreview,
                      children: (0, i.jsx)(f.R, {
                          item: y,
                          user: m,
                          avatarSize: l.AvatarSizes.SIZE_120,
                          isPurchased: r,
                          isHighlighted: a,
                          avatarPlaceholderSrc: I ? _ : h
                      })
                  })
                : null
        ]
    });
};
