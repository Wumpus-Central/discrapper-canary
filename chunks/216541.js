r.d(t, { d: () => h });
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
    g = r(881937),
    f = r(63243),
    b = r(244488);
let h = (e) => {
    let {
            product: t,
            isPurchased: r,
            isHighlighted: l,
            user: h,
            forCollectedModal: m,
            containerClassName: _,
            profileEffectClassName: v,
            avatarDecorationClassName: O,
        } = e,
        { firstProfileEffect: C, firstAvatarDecoration: E } = (0, u.Rj)(t),
        S = (0, d.O1)(E),
        y = (0, s.ZP)(),
        x = (0, i.ap)(y);
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
                          forCollectedModal: m,
                          removeSetHeight: !0,
                      }),
                  })
                : null,
            null != S
                ? (0, n.jsx)("div", {
                      className: a()(g.avatarDecorationPreview, O),
                      children: (0, n.jsx)(p.R, {
                          item: S,
                          user: h,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: r,
                          isHighlighted: l,
                          avatarPlaceholderSrc: x ? b : f,
                      }),
                  })
                : null,
        ],
    });
};
