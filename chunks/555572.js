"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(474397),
    o = n(780964),
    l = n(840065),
    u = n(652215),
    c = n(355097),
    d = n(985018);
function _(e) {
    let { analyticsLocations: t } = (0, a.Ay)();
    return (0, r.jsx)(i.Drp, {
        id: "video-settings",
        label: d.intl.string(d.t.LKzQSF),
        action: () => {
            (0, l.openUserSettings)(o.X.CAMERA_CATEGORY, {
                section: u.nc_.VOICE,
                subsection: c.Ss,
                analyticsLocations: t,
            }),
                (0, s.A)(e, e === u.BRT.POPOUT);
        },
        icon: i.Zes,
        leadingAccessory: { type: "icon", icon: i.Zes },
    });
}
