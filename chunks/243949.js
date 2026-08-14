i.d(n, { A: () => s });
var e = i(477900);
i(582128);
var l = i(477782),
    r = i(688810),
    a = i(267102),
    o = i(183555),
    u = i(975732),
    c = i(652215),
    d = i(375708);
function s(t) {
    let { label: n, onAction: i, icon: s, ...p } = t,
        { analyticsLocations: A } = (0, r.Ay)(),
        { context: y } = (0, o.NJ)(),
        _ = (0, a.aL)(),
        f = (0, a.Us)();
    return (0, e.jsx)(l.Dr, {
        id: "user-profile",
        label: n ?? d.intl.string(d.t.LYju5J),
        action: () => {
            i?.(),
                (0, u.openUserProfileModal)({ sourceAnalyticsLocations: A, appContext: f, ...y, ...p }),
                _.dispatch(c.jej.POPOUT_CLOSE);
        },
        icon: s,
        leadingAccessory: null != s ? { type: "icon", icon: s } : void 0,
    });
}
