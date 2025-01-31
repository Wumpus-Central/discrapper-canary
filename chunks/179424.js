n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(475179),
    r = n(871499),
    s = n(388032);
function o(e) {
    let { channelId: t, ...n } = e;
    return (0, i.jsx)(r.Z, {
        onClick: function () {
            a.Z.selectParticipant(t, null);
        },
        label: s.intl.string(s.t['tyhU+P']),
        iconComponent: l.rqr,
        tooltipPosition: 'bottom',
        ...n
    });
}
