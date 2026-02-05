n.d(t, { A: () => h });
var i = n(627968),
    s = n(311907),
    r = n(554146),
    a = n(397927),
    l = n(793574),
    o = n(379848),
    c = n(657331),
    d = n(961350),
    u = n(128450),
    _ = n(212168),
    m = n(49999),
    A = n(518477),
    g = n(985018),
    E = n(133788);
let h = () => {
    let [e, t] = (0, o.kn)([r.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]),
        n = e === r.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        h = (0, s.bG)([d.default], () => d.default.getId());
    return (0, i.jsx)(u.A, {
        title: g.intl.string(g.t.Jzj9q4),
        description: g.intl.string(g.t.lfF1Sp),
        titleIcon: n ? (0, i.jsx)(a.LpS, { className: E.A, text: g.intl.string(g.t.y2b7CA) }) : null,
        borderType: _.i.LIMITED,
        showBorder: n,
        hasBackground: n,
        children: (0, i.jsx)(a.Button, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                n && t(m.i.TAKE_ACTION),
                    (0, c.openUserProfileModal)({
                        userId: h,
                        sourceAnalyticsLocations: [l.A.USER_SETTINGS_USER_PROFILE],
                        hideRestrictedProfile: !0,
                        tabSection: A.RP.WIDGETS,
                    });
            },
            size: "sm",
        }),
    });
};
