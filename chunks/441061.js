t.d(e, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(475179),
    o = t(358221),
    d = t(388032);
function u(n) {
    let e = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(n));
    return (0, i.jsx)(l.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: d.intl.string(d.t.BL8ss7),
        checked: !e,
        action: () => a.Z.toggleVoiceParticipantsHidden(n, !e)
    });
}
