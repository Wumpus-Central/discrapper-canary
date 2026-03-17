"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(688810),
    a = n(474397),
    o = n(780964),
    l = n(840065),
    u = n(652215),
    c = n(985018);
function d(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return (0, r.jsx)(i.Drp, {
        id: "video-settings",
        label: c.intl.string(c.t.LKzQSF),
        action: () => {
            (0, l.openUserSettings)(o.X.CAMERA_CATEGORY, { analyticsLocations: t }), (0, a.A)(e, e === u.BRT.POPOUT);
        },
        icon: i.Zes,
        leadingAccessory: { type: "icon", icon: i.Zes },
    });
}
