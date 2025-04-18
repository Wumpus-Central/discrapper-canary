n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(475179),
    u = n(358221),
    a = n(388032);
function c(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(i.S89, {
        id: 'no-video-hide',
        label: a.NW.string(a.t.BL8ss7),
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
