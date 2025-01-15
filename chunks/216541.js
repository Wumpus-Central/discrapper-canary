n.d(e, {
    d: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(876917),
    d = n(328456),
    u = n(616066),
    f = n(649371),
    g = n(63243),
    p = n(244488);
let v = (t) => {
    let { product: e, isPurchased: n, isHighlighted: a, user: v, forCollectedModal: h, profileEffectClassName: m } = t,
        { firstProfileEffect: b, firstAvatarDecoration: x } = (0, d.R)(e),
        C = (0, l.ZP)(),
        S = (0, o.ap)(C);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != b
                ? (0, r.jsx)('div', {
                      className: i()(f.profileEffectShopPreview, m),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: b.id,
                          isPurchased: n,
                          forCollectedModal: h,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != x
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(u.R, {
                          item: x,
                          user: v,
                          avatarSize: s.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: a,
                          avatarPlaceholderSrc: S ? p : g
                      })
                  })
                : null
        ]
    });
};
