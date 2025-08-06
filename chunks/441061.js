n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(475179),
    s = n(358221),
    l = n(388032);
function c(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(o.S89, {
        id: "no-video-hide",
        label: l.intl.string(l.t.BL8ss7),
        checked: !t,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !t),
    });
}
