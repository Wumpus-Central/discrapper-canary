n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(475179),
    o = n(358221),
    u = n(388032);
function d(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(l.S89, {
        id: 'no-video-hide',
        label: u.NW.string(u.t.BL8ss7),
        checked: !t,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
