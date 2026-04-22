t.d(n, { A: () => h });
var l = t(627968);
t(64700);
var i = t(477782),
    a = t(625903),
    s = t(688810),
    r = t(523527),
    o = t(267102),
    c = t(780964),
    u = t(858897),
    d = t(652215),
    A = t(985018);
function h() {
    let e = (0, o.Us)(),
        { analyticsLocations: n } = (0, s.Ay)();
    return (0, l.jsx)(i.Dr, {
        id: "voice-and-video-settings",
        label: A.intl.string(A.t.dsXapM),
        action: () => {
            (0, r.A)(null, e === d.BRT.POPOUT),
                (0, u.openUserSettings)(c.X.VOICE_AND_VIDEO_PANEL, { analyticsLocations: n });
        },
        icon: a.Z,
        leadingAccessory: { type: "icon", icon: a.Z },
    });
}
