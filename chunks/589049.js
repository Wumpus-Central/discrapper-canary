n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(906732),
    a = n(174609),
    o = n(728285),
    s = n(313789),
    c = n(518596),
    u = n(981631),
    d = n(388032);
function p() {
    let e = (0, o.bp)(),
        { analyticsLocations: t } = (0, l.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "voice-and-video-settings",
        label: d.intl.string(d.t.dsXapM),
        action: () => {
            (0, a.Z)(null, e === u.IlC.POPOUT),
                (0, c.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
                    section: u.oAB.VOICE,
                    analyticsLocations: t,
                });
        },
        icon: i.ewm,
    });
}
