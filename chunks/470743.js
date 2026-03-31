n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(688810),
    a = n(523527),
    r = n(267102),
    o = n(780964),
    c = n(840065),
    d = n(652215),
    u = n(985018);
function h() {
    let e = (0, r.Us)(),
        { analyticsLocations: t } = (0, s.Ay)();
    return (0, i.jsx)(l.Drp, {
        id: "voice-and-video-settings",
        label: u.intl.string(u.t.dsXapM),
        action: () => {
            (0, a.A)(null, e === d.BRT.POPOUT),
                (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, { analyticsLocations: t });
        },
        icon: l.Zes,
        leadingAccessory: { type: "icon", icon: l.Zes },
    });
}
