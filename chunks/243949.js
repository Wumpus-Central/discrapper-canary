i.d(e, { A: () => u });
var l = i(627968);
i(64700);
var a = i(477782),
    n = i(688810),
    r = i(267102),
    s = i(183555),
    o = i(657331),
    c = i(652215),
    d = i(985018);
function u(t) {
    let { label: e, onAction: i, icon: u, ..._ } = t,
        { analyticsLocations: p } = (0, n.Ay)(),
        { context: f } = (0, s.NJ)(),
        A = (0, r.aL)(),
        h = (0, r.Us)();
    return (0, l.jsx)(a.Dr, {
        id: "user-profile",
        label: e ?? d.intl.string(d.t.LYju5J),
        action: () => {
            i?.(),
                (0, o.openUserProfileModal)({ sourceAnalyticsLocations: p, appContext: h, ...f, ..._ }),
                A.dispatch(c.jej.POPOUT_CLOSE);
        },
        icon: u,
        leadingAccessory: null != u ? { type: "icon", icon: u } : void 0,
    });
}
