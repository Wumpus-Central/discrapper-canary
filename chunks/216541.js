r.d(t, { d: () => b });
var n = r(951288);
r(647438);
var l = r(120356),
    a = r.n(l),
    i = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(876917),
    u = r(328456),
    d = r(619899),
    p = r(616066),
    g = r(881937),
    f = r(63243),
    m = r(244488);
let b = (e) => {
    let {
            product: t,
            isPurchased: r,
            isHighlighted: l,
            user: b,
            forCollectedModal: h,
            containerClassName: _,
            profileEffectClassName: v,
            avatarDecorationClassName: O,
        } = e,
        { firstProfileEffect: C, firstAvatarDecoration: E } = (0, u.Rj)(t),
        y = (0, d.O1)(E),
        S = (0, s.ZP)(),
        x = (0, i.ap)(S);
    return (0, n.jsxs)("div", {
        className: a()(g.container, _),
        children: [
            null != C
                ? (0, n.jsx)("div", {
                      className: a()(g.profileEffectShopPreview, v),
                      children: (0, n.jsx)(c.Z, {
                          isHovering: l,
                          profileEffectId: C.id,
                          isPurchased: r,
                          forCollectedModal: h,
                          removeSetHeight: !0,
                      }),
                  })
                : null,
            null != y
                ? (0, n.jsx)("div", {
                      className: a()(g.avatarDecorationPreview, O),
                      children: (0, n.jsx)(p.R, {
                          item: y,
                          user: b,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: r,
                          isHighlighted: l,
                          avatarPlaceholderSrc: x ? m : f,
                      }),
                  })
                : null,
        ],
    });
};
