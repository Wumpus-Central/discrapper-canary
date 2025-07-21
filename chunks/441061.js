n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    o = n(475179),
    a = n(358221),
    u = n(388032);
function c(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(i.S89, {
        id: 'no-video-hide',
        label: u.intl.string(u.t.BL8ss7),
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
