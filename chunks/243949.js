e.d(n, { A: () => o });
var i = e(627968);
e(64700);
var l = e(477782),
    r = e(688810),
    a = e(267102),
    u = e(183555),
    c = e(975732),
    d = e(652215),
    s = e(985018);
function o(t) {
    let { label: n, onAction: e, icon: o, ...p } = t,
        { analyticsLocations: A } = (0, r.Ay)(),
        { context: y } = (0, u.NJ)(),
        f = (0, a.aL)(),
        h = (0, a.Us)();
    return (0, i.jsx)(l.Dr, {
        id: "user-profile",
        label: n ?? s.intl.string(s.t.LYju5J),
        action: () => {
            e?.(),
                (0, c.openUserProfileModal)({ sourceAnalyticsLocations: A, appContext: h, ...y, ...p }),
                f.dispatch(d.jej.POPOUT_CLOSE);
        },
        icon: o,
        leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
    });
}
