n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(475179),
    o = n(358221),
    s = n(388032);
function c(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(l.S89, {
        id: "no-video-hide",
        label: s.intl.string(s.t.BL8ss7),
        checked: !t,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !t),
    });
}
