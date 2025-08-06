r.d(t, { d: () => b });
var n = r(255367);
r(73800);
var l = r(120356),
    a = r.n(l),
    i = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(876917),
    u = r(328456),
    d = r(619899),
    p = r(616066),
    g = r(912397),
    f = r(63243),
    h = r(244488);
let b = (e) => {
    let {
            product: t,
            isPurchased: r,
            isHighlighted: l,
            user: b,
            forCollectedModal: _,
            containerClassName: m,
            profileEffectClassName: v,
            avatarDecorationClassName: C,
        } = e,
        { firstProfileEffect: O, firstAvatarDecoration: E } = (0, u.Rj)(t),
        S = (0, d.O1)(E),
        y = (0, s.ZP)(),
        x = (0, i.ap)(y);
    return (0, n.jsxs)("div", {
        className: a()(g.container, m),
        children: [
            null != O
                ? (0, n.jsx)("div", {
                      className: a()(g.profileEffectShopPreview, v),
                      children: (0, n.jsx)(c.Z, {
                          isHovering: l,
                          profileEffectId: O.id,
                          isPurchased: r,
                          forCollectedModal: _,
                          removeSetHeight: !0,
                      }),
                  })
                : null,
            null != S
                ? (0, n.jsx)("div", {
                      className: a()(g.avatarDecorationPreview, C),
                      children: (0, n.jsx)(p.R, {
                          item: S,
                          user: b,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: r,
                          isHighlighted: l,
                          avatarPlaceholderSrc: x ? h : f,
                      }),
                  })
                : null,
        ],
    });
};
