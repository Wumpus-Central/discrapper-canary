n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(311907),
    a = n(554146),
    s = n(397927),
    o = n(793574),
    l = n(379848),
    c = n(657331),
    u = n(961350),
    d = n(128450),
    f = n(212168),
    p = n(49999),
    _ = n(518477),
    h = n(985018),
    m = n(133788);
let g = () => {
    let [e, t] = (0, l.kn)([a.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]),
        n = e === a.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        g = (0, i.bG)([u.default], () => u.default.getId());
    return (0, r.jsx)(d.A, {
        title: h.intl.string(h.t.Jzj9q4),
        description: h.intl.string(h.t.lfF1Sp),
        titleIcon: n
            ? (0, r.jsx)(s.LpS, {
                  className: m.A,
                  text: h.intl.string(h.t.y2b7CA),
              })
            : null,
        borderType: f.i.LIMITED,
        showBorder: n,
        hasBackground: n,
        children: (0, r.jsx)(s.Button, {
            text: h.intl.string(h.t.Geikwq),
            onClick: () => {
                n && t(p.i.TAKE_ACTION),
                    (0, c.openUserProfileModal)({
                        userId: g,
                        sourceAnalyticsLocations: [o.A.USER_SETTINGS_USER_PROFILE],
                        hideRestrictedProfile: !0,
                        tabSection: _.RP.WIDGETS,
                    });
            },
            size: "sm",
        }),
    });
};
