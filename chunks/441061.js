t.d(n, { Z: () => s });
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    o = t(475179),
    a = t(358221),
    c = t(388032);
function s(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(l.S89, {
        id: 'no-video-hide',
        label: c.intl.string(c.t.BL8ss7),
        checked: !n,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
