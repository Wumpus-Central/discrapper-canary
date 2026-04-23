"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(477782),
    s = n(688810),
    a = n(267102),
    o = n(183555),
    l = n(657331),
    u = n(652215),
    c = n(985018);
function d(e) {
    let { label: t, onAction: n, icon: d, ..._ } = e,
        { analyticsLocations: f } = (0, s.Ay)(),
        { context: p } = (0, o.NJ)(),
        h = (0, a.aL)(),
        E = (0, a.Us)();
    return (0, r.jsx)(i.Dr, {
        id: "user-profile",
        label: t ?? c.intl.string(c.t.LYju5J),
        action: () => {
            n?.(),
                (0, l.openUserProfileModal)({ sourceAnalyticsLocations: f, appContext: E, ...p, ..._ }),
                h.dispatch(u.jej.POPOUT_CLOSE);
        },
        icon: d,
        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
    });
}
