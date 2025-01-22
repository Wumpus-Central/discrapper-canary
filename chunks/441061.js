n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(475179),
    s = n(358221),
    o = n(388032);
function c(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(r.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: o.intl.string(o.t.BL8ss7),
        checked: !t,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
