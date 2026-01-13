n.d(t, { Z: () => h });
var a = n(54381),
    r = n(793030),
    i = n(100527),
    l = n(906732),
    s = n(371286),
    o = n(164670),
    c = n(705338),
    d = n(790773),
    u = n(388032),
    m = n(993874);
function p() {
    (0, c.default)({ guildId: (0, o.ac)() });
}
function h(e) {
    let { handleOpenUserProfileModal: t, markAsDismissed: n } = e,
        { analyticsLocations: o } = (0, l.ZP)([i.Z.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return (0, a.jsxs)(s.Z, {
        heading: u.intl.string(u.t["vy/61K"]),
        subheading: u.intl.string(u.t.tEee9t),
        markAsDismissed: n,
        className: m.upsellContainer,
        contentClassName: m.contentContainer,
        height: 560,
        children: [
            (0, a.jsx)(d.Z, {
                analyticsLocations: o,
                handleOpenUserProfileModal: t,
                numWishlistItemsToRecommend: 9,
            }),
            (0, a.jsx)("div", {
                className: m.buttonContainer,
                children: (0, a.jsx)(r.zxk, {
                    variant: "primary",
                    fullWidth: !0,
                    text: u.intl.string(u.t.rg9FQp),
                    onClick: p,
                }),
            }),
        ],
    });
}
