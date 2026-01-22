n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(688810),
    a = n(523527),
    s = n(267102),
    o = n(780964),
    c = n(840065),
    u = n(652215),
    d = n(985018);

function f() {
    let e = (0, s.Us)(),
        { analyticsLocations: t } = (0, i.Ay)();
    return (0, r.jsx)(l.Drp, {
        id: "voice-and-video-settings",
        label: d.intl.string(d.t.dsXapM),
        action: () => {
            (0, a.A)(null, e === u.BRT.POPOUT),
                (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
                    section: u.nc_.VOICE,
                    analyticsLocations: t,
                });
        },
        icon: l.Zes,
    });
}
