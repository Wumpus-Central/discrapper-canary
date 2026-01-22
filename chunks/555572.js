n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(474397),
    o = n(780964),
    l = n(358776),
    c = n(840065),
    u = n(652215),
    d = n(355097),
    f = n(985018);
function p(e) {
    let { analyticsLocations: t } = (0, a.Ay)();
    return (0, r.jsx)(i.Drp, {
        id: "video-settings",
        label: f.intl.string(f.t.LKzQSF),
        action: () => {
            let n = (0, l.qz)("useVideoSettingsItem") ? o.X.CAMERA_CATEGORY : o.X.VOICE_AND_VIDEO_PANEL;
            (0, c.openUserSettings)(n, {
                section: u.nc_.VOICE,
                subsection: d.Ss,
                analyticsLocations: t,
            }),
                (0, s.A)(e, e === u.BRT.POPOUT);
        },
        icon: i.Zes,
    });
}
