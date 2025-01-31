t.d(n, { Z: () => u });
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(475179),
    d = t(358221),
    o = t(388032);
function u(e) {
    let n = (0, l.e7)([d.Z], () => d.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(a.S89, {
        id: 'no-video-hide',
        label: o.intl.string(o.t.BL8ss7),
        checked: !n,
        action: () => r.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
