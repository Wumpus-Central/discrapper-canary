"use strict";
n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var r = n(477782),
    a = n(688810),
    s = n(267102),
    l = n(183555),
    o = n(975732),
    d = n(652215),
    c = n(375708);
function u(e) {
    let { label: t, onAction: n, icon: u, ..._ } = e,
        { analyticsLocations: E } = (0, a.Ay)(),
        { context: A } = (0, l.NJ)(),
        h = (0, s.aL)(),
        I = (0, s.Us)();
    return (0, i.jsx)(r.Dr, {
        id: "user-profile",
        label: t ?? c.intl.string(c.t.LYju5J),
        action: () => {
            n?.(),
                (0, o.openUserProfileModal)({ sourceAnalyticsLocations: E, appContext: I, ...A, ..._ }),
                h.dispatch(d.jej.POPOUT_CLOSE);
        },
        icon: u,
        leadingAccessory: null != u ? { type: "icon", icon: u } : void 0,
    });
}
