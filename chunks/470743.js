t.d(i, { A: () => g });
var s = t(477900);
t(582128);
var e = t(477782),
    c = t(625903),
    o = t(688810),
    a = t(523527),
    r = t(267102),
    d = t(780964),
    p = t(766075),
    u = t(652215),
    l = t(375708);
function g() {
    let n = (0, r.Us)(),
        { analyticsLocations: i } = (0, o.Ay)();
    return (0, s.jsx)(e.Dr, {
        id: "voice-and-video-settings",
        label: l.intl.string(l.t.dsXapM),
        action: function () {
            (0, a.A)(null, n === u.BRT.POPOUT),
                (0, p.openUserSettings)(d.X.VOICE_AND_VIDEO_PANEL, { analyticsLocations: i });
        },
        icon: c.SettingsIcon,
        leadingAccessory: { type: "icon", icon: c.SettingsIcon },
    });
}
