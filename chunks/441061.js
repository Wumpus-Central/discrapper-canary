e.d(t, {
    Z: function () {
        return d;
    }
});
var r = e(200651);
e(192379);
var i = e(442837),
    u = e(481060),
    l = e(475179),
    a = e(358221),
    o = e(388032);
function d(n) {
    let t = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
    return (0, r.jsx)(u.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: o.intl.string(o.t.BL8ss7),
        checked: !t,
        action: () => l.Z.toggleVoiceParticipantsHidden(n, !t)
    });
}
