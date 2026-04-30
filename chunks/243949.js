"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(477782),
    s = n(688810),
    a = n(267102),
    o = n(183555),
    l = n(975732),
    u = n(652215),
    c = n(375708);
function d(e) {
    let { label: t, onAction: n, icon: d, ..._ } = e,
        { analyticsLocations: f } = (0, s.Ay)(),
        { context: h } = (0, o.NJ)(),
        p = (0, a.aL)(),
        E = (0, a.Us)();
    return (0, i.jsx)(r.Dr, {
        id: "user-profile",
        label: t ?? c.intl.string(c.t.LYju5J),
        action: () => {
            n?.(),
                (0, l.openUserProfileModal)({ sourceAnalyticsLocations: f, appContext: E, ...h, ..._ }),
                p.dispatch(u.jej.POPOUT_CLOSE);
        },
        icon: d,
        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
    });
}
