n.d(t, { A: () => x });
var a = n(627968),
    i = n(158954),
    s = n(793574),
    l = n(688810),
    r = n(687173),
    o = n(871123),
    d = n(44724),
    c = n(228053),
    u = n(985018),
    m = n(642892);
function h() {
    (0, d.default)({ guildId: (0, o.zf)() });
}
function x(e) {
    let { handleOpenUserProfileModal: t, markAsDismissed: n } = e,
        { analyticsLocations: o } = (0, l.Ay)([s.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return (0, a.jsxs)(r.A, {
        heading: u.intl.string(u.t["vy/61K"]),
        subheading: u.intl.string(u.t.tEee9t),
        markAsDismissed: n,
        className: m.Zj,
        contentClassName: m.hQ,
        height: 560,
        children: [
            (0, a.jsx)(c.A, {
                analyticsLocations: o,
                handleOpenUserProfileModal: t,
                numWishlistItemsToRecommend: 9,
                className: m.KN,
            }),
            (0, a.jsx)("div", {
                className: m.UD,
                children: (0, a.jsx)(i.$nd, {
                    variant: "primary",
                    fullWidth: !0,
                    text: u.intl.string(u.t.rg9FQp),
                    onClick: h,
                }),
            }),
        ],
    });
}
