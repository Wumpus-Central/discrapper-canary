t.d(n, { Z: () => d });
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(475179),
    o = t(358221),
    u = t(388032);
function d(e) {
    let n = (0, l.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(a.S89, {
        id: 'no-video-hide',
        label: u.intl.string(u.t.BL8ss7),
        checked: !n,
        action: () => r.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
