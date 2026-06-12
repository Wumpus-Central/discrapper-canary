s.d(n, { A: () => A });
var t = s(627968);
s(64700);
var e = s(477782),
    c = s(625903),
    a = s(688810),
    o = s(523527),
    r = s(267102),
    d = s(780964),
    p = s(766075),
    l = s(652215),
    u = s(375708);
function A() {
    let i = (0, r.Us)(),
        { analyticsLocations: n } = (0, a.Ay)();
    return (0, t.jsx)(e.Dr, {
        id: "voice-and-video-settings",
        label: u.intl.string(u.t.dsXapM),
        action: () => {
            (0, o.A)(null, i === l.BRT.POPOUT),
                (0, p.openUserSettings)(d.X.VOICE_AND_VIDEO_PANEL, { analyticsLocations: n });
        },
        icon: c.Z,
        leadingAccessory: { type: "icon", icon: c.Z },
    });
}
