n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(906732),
    o = n(887413),
    s = n(313789),
    l = n(518596),
    c = n(981631),
    u = n(526761),
    d = n(388032);
function f(e) {
    let { analyticsLocations: t } = (0, a.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "video-settings",
        label: d.intl.string(d.t.LKzQSF),
        action: () => {
            (0, l.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
                section: c.oAB.VOICE,
                subsection: u.gP,
                analyticsLocations: t,
            }),
                (0, o.i)(e);
        },
        icon: i.ewm,
    });
}
