n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(475179),
    s = n(358221),
    l = n(388032);
function c(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(a.S89, {
        id: 'no-video-hide',
        label: l.intl.string(l.t.BL8ss7),
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
