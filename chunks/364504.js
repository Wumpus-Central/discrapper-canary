n.d(t, {
    A: () => h,
});
var a = n(627968),
    l = n(158954),
    i = n(793574),
    r = n(688810),
    s = n(687173),
    o = n(871123),
    c = n(44724),
    d = n(228053),
    u = n(985018),
    m = n(248710);

function p() {
    (0, c.default)({
        guildId: (0, o.zf)(),
    });
}

function h(e) {
    let { handleOpenUserProfileModal: t, markAsDismissed: n } = e,
        { analyticsLocations: o } = (0, r.Ay)([i.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return (0, a.jsxs)(s.A, {
        heading: u.intl.string(u.t["vy/61K"]),
        subheading: u.intl.string(u.t.tEee9t),
        markAsDismissed: n,
        className: m.Zj,
        contentClassName: m.hQ,
        height: 560,
        children: [
            (0, a.jsx)(d.A, {
                analyticsLocations: o,
                handleOpenUserProfileModal: t,
                numWishlistItemsToRecommend: 9,
            }),
            (0, a.jsx)("div", {
                className: m.UD,
                children: (0, a.jsx)(l.$nd, {
                    variant: "primary",
                    fullWidth: !0,
                    text: u.intl.string(u.t.rg9FQp),
                    onClick: p,
                }),
            }),
        ],
    });
}
