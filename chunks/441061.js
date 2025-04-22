n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(475179),
    o = n(358221),
    u = n(388032);
function d(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(l.S89, {
        id: 'no-video-hide',
        label: u.intl.string(u.t.BL8ss7),
        checked: !t,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
