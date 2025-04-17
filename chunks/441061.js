n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(475179),
    a = n(358221),
    u = n(388032);
function c(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(l.S89, {
        id: 'no-video-hide',
        label: u.NW.string(u.t.BL8ss7),
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
