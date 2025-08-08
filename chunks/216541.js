n.d(t, { d: () => h });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(780384),
    o = n(481060),
    s = n(410030),
    c = n(876917),
    u = n(328456),
    d = n(619899),
    p = n(616066),
    g = n(912397),
    f = n(63243),
    b = n(244488);
let h = (e) => {
    let {
            product: t,
            isPurchased: n,
            isHighlighted: l,
            user: h,
            forCollectedModal: m,
            containerClassName: _,
            profileEffectClassName: v,
            avatarDecorationClassName: C,
        } = e,
        { firstProfileEffect: O, firstAvatarDecoration: E } = (0, u.Rj)(t),
        S = (0, d.O1)(E),
        y = (0, s.ZP)(),
        x = (0, i.ap)(y);
    return (0, r.jsxs)("div", {
        className: a()(g.container, _),
        children: [
            null != O
                ? (0, r.jsx)("div", {
                      className: a()(g.profileEffectShopPreview, v),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: l,
                          profileEffectId: O.id,
                          isPurchased: n,
                          forCollectedModal: m,
                          removeSetHeight: !0,
                      }),
                  })
                : null,
            null != S
                ? (0, r.jsx)("div", {
                      className: a()(g.avatarDecorationPreview, C),
                      children: (0, r.jsx)(p.R, {
                          item: S,
                          user: h,
                          avatarSize: o.EFr.SIZE_120,
                          isPurchased: n,
                          isHighlighted: l,
                          avatarPlaceholderSrc: x ? b : f,
                      }),
                  })
                : null,
        ],
    });
};
