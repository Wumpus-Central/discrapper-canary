n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var l = n(442837),
    i = n(481060),
    o = n(475179),
    c = n(358221),
    a = n(388032);
function s(e) {
    let t = (0, l.e7)([c.Z], () => c.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(i.S89, {
        id: "no-video-hide",
        label: a.intl.string(a.t.BL8ss7),
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t),
    });
}
