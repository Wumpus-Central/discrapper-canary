n.d(t, { A: () => g });
var i = n(627968),
    s = n(311907),
    l = n(821609),
    a = n(793574),
    r = n(657331),
    o = n(961350),
    d = n(128450),
    u = n(518477),
    c = n(985018);
let g = () => {
    let e = (0, s.bG)([o.default], () => o.default.getId());
    return (0, i.jsx)(d.A, {
        title: c.intl.string(c.t.Jzj9q4),
        children: (0, i.jsx)(l.$, {
            text: c.intl.string(c.t.Geikwq),
            onClick: () => {
                (0, r.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [a.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: u.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
