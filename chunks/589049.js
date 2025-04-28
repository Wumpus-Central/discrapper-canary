n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(230711),
    l = n(906732),
    c = n(981631),
    a = n(388032);
function u() {
    let { analyticsLocations: e } = (0, l.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: 'voice-and-video-settings',
        label: a.intl.string(a.t.dsXapK),
        action: () => {
            o.Z.open(c.oAB.VOICE, null, { analyticsLocations: e });
        },
        icon: i.ewm
    });
}
