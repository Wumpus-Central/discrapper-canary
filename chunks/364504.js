n.d(t, { A: () => m });
var i = n(627968),
    s = n(821609),
    l = n(793574),
    a = n(688810),
    r = n(687173),
    o = n(770983),
    d = n(871123),
    c = n(44724),
    u = n(985018),
    p = n(501573);
function h() {
    (0, c.default)({ guildId: (0, d.zf)() });
}
function m(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: d } = e,
        { analyticsLocations: c } = (0, a.Ay)([l.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(r.A, {
              heading: u.intl.string(u.t["vy/61K"]),
              subheading: u.intl.string(u.t.tEee9t),
              markAsDismissed: d,
              className: p.Zj,
              contentClassName: p.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(o.A, {
                      userId: t,
                      analyticsLocations: c,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: p.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: p.UD,
                      children: (0, i.jsx)(s.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: u.intl.string(u.t.rg9FQp),
                          onClick: h,
                      }),
                  }),
              ],
          });
}
