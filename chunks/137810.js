n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(906732),
    o = n(887413),
    s = n(313789),
    l = n(526665),
    c = n(518596),
    u = n(981631),
    d = n(526761),
    f = n(388032);
function p(e) {
    let { analyticsLocations: t } = (0, a.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "video-settings",
        label: f.intl.string(f.t.LKzQSF),
        action: () => {
            let n = (0, l.Ml)("useVideoSettingsItem") ? s.n.CAMERA_CATEGORY : s.n.VOICE_AND_VIDEO_PANEL;
            (0, c.openUserSettings)(n, {
                section: u.oAB.VOICE,
                subsection: d.gP,
                analyticsLocations: t,
            }),
                (0, o.i)(e, e === u.IlC.POPOUT);
        },
        icon: i.ewm,
    });
}
