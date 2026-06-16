n.d(e, { A: () => s });
var i = n(627968);
n(64700);
var r = n(477782),
    l = n(688810),
    o = n(267102),
    a = n(183555),
    u = n(975732),
    c = n(652215),
    d = n(375708);
function s(t) {
    let { label: e, onAction: n, icon: s, ...A } = t,
        { analyticsLocations: p } = (0, l.Ay)(),
        { context: f } = (0, a.NJ)(),
        y = (0, o.aL)(),
        _ = (0, o.Us)();
    return (0, i.jsx)(r.Dr, {
        id: "user-profile",
        label: e ?? d.intl.string(d.t.LYju5J),
        action: () => {
            n?.(),
                (0, u.openUserProfileModal)({ sourceAnalyticsLocations: p, appContext: _, ...f, ...A }),
                y.dispatch(c.jej.POPOUT_CLOSE);
        },
        icon: s,
        leadingAccessory: null != s ? { type: "icon", icon: s } : void 0,
    });
}
