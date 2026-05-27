n.d(e, { A: () => d });
var i = n(627968);
n(64700);
var r = n(477782),
    l = n(688810),
    o = n(267102),
    u = n(183555),
    a = n(975732),
    c = n(652215),
    s = n(375708);
function d(t) {
    let { label: e, onAction: n, icon: d, ...A } = t,
        { analyticsLocations: p } = (0, l.Ay)(),
        { context: f } = (0, u.NJ)(),
        _ = (0, o.aL)(),
        y = (0, o.Us)();
    return (0, i.jsx)(r.Dr, {
        id: "user-profile",
        label: e ?? s.intl.string(s.t.LYju5J),
        action: () => {
            n?.(),
                (0, a.openUserProfileModal)({ sourceAnalyticsLocations: p, appContext: y, ...f, ...A }),
                _.dispatch(c.jej.POPOUT_CLOSE);
        },
        icon: d,
        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
    });
}
