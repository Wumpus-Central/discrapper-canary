t.d(n, { Z: () => d });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(475179),
    u = t(358221),
    o = t(388032);
function d(e) {
    let n = (0, i.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
    return (0, l.jsx)(r.S89, {
        id: 'no-video-hide',
        label: o.intl.string(o.t.BL8ss7),
        checked: !n,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
