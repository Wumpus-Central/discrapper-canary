n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    o = n(475179),
    a = n(358221),
    c = n(388032);
function s(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(i.S89, {
        id: "no-video-hide",
        label: c.intl.string(c.t.BL8ss6),
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t),
    });
}
