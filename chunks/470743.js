"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(688810),
    r = n(523527),
    a = n(267102),
    o = n(780964),
    c = n(840065),
    d = n(652215),
    u = n(985018);
function h() {
    let e = (0, a.Us)(),
        { analyticsLocations: t } = (0, l.Ay)();
    return (0, i.jsx)(s.Drp, {
        id: "voice-and-video-settings",
        label: u.intl.string(u.t.dsXapM),
        action: () => {
            (0, r.A)(null, e === d.BRT.POPOUT),
                (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, { analyticsLocations: t });
        },
        icon: s.Zes,
        leadingAccessory: { type: "icon", icon: s.Zes },
    });
}
