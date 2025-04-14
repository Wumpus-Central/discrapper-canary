t.d(n, { Z: () => c });
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    o = t(475179),
    a = t(358221),
    s = t(388032);
function c(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(l.S89, {
        id: 'no-video-hide',
        label: s.NW.string(s.t.BL8ss7),
        checked: !n,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
