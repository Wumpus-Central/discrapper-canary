r.d(t, { d: () => v });
var n = r(255367);
r(73800);
var a = r(120356),
    l = r.n(a),
    i = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(876917),
    u = r(328456),
    d = r(619899),
    p = r(616066),
    b = r(912397),
    h = r(63243),
    f = r(244488);
let v = (e) => {
    let { product: t, isPurchased: r, isHighlighted: a, user: v, forCollectedModal: m, containerClassName: _, profileEffectClassName: O, avatarDecorationClassName: y } = e,
        { firstProfileEffect: g, firstAvatarDecoration: C } = (0, u.Rj)(t),
        j = (0, d.O1)(C),
        P = (0, s.ZP)(),
        E = (0, i.ap)(P);
    return (0, n.jsxs)('div', {
        className: l()(b.container, _),
        children: [
            null != g
                ? (0, n.jsx)('div', {
                      className: l()(b.profileEffectShopPreview, O),
                      children: (0, n.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: g.id,
                          isPurchased: r,
                          forCollectedModal: m,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != j
                ? (0, n.jsx)('div', {
                      className: l()(b.avatarDecorationPreview, y),
                      children: (0, n.jsx)(p.R, {
                          item: j,
                          user: v,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: r,
                          isHighlighted: a,
                          avatarPlaceholderSrc: E ? f : h
                      })
                  })
                : null
        ]
    });
};
