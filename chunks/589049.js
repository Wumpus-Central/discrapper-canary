n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(230711),
    a = n(906732),
    o = n(981631),
    s = n(388032);
function c() {
    let { analyticsLocations: e } = (0, a.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: 'voice-and-video-settings',
        label: s.intl.string(s.t.dsXapK),
        action: () => {
            l.Z.open(o.oAB.VOICE, null, { analyticsLocations: e });
        },
        icon: i.ewm
    });
}
