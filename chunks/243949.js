c.d(s, { A: () => d });
var e = c(477900);
c(582128);
var n = c(477782),
    o = c(688810),
    r = c(267102),
    t = c(183555),
    a = c(402860),
    l = c(652215),
    p = c(375708);
function d(i) {
    let { label: s, onAction: c, icon: d, ...u } = i,
        { analyticsLocations: h } = (0, o.Ay)(),
        { context: j } = (0, t.NJ)(),
        k = (0, r.aL)(),
        y = (0, r.Us)();
    return (0, e.jsx)(n.Dr, {
        id: "user-profile",
        label: s ?? p.intl.string(p.t.LYju5J),
        action: () => {
            (c?.(),
                (0, a.openUserProfileModal)({ sourceAnalyticsLocations: h, appContext: y, ...j, ...u }),
                k.dispatch(l.jej.POPOUT_CLOSE));
        },
        icon: d,
        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
    });
}
