n.d(t, { A: () => m });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(793574),
    r = n(657331),
    o = n(961350),
    d = n(128450),
    c = n(518477),
    u = n(985018);
let m = () => {
    let e = (0, s.bG)([o.default], () => o.default.getId());
    return (0, i.jsx)(d.A, {
        title: u.intl.string(u.t.Jzj9q4),
        children: (0, i.jsx)(l.Button, {
            text: u.intl.string(u.t.Geikwq),
            onClick: () => {
                (0, r.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [a.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: c.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
