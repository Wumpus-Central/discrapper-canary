n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(688810),
    s = n(523527),
    a = n(267102),
    o = n(780964),
    c = n(840065),
    u = n(652215),
    d = n(985018);

function p() {
    let e = (0, a.Us)(),
        { analyticsLocations: t } = (0, i.Ay)();
    return (0, r.jsx)(l.Drp, {
        id: "voice-and-video-settings",
        label: d.intl.string(d.t.dsXapM),
        action: () => {
            (0, s.A)(null, e === u.BRT.POPOUT),
                (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
                    section: u.nc_.VOICE,
                    analyticsLocations: t,
                });
        },
        icon: l.Zes,
        leadingAccessory: {
            type: "icon",
            icon: l.Zes,
        },
    });
}
