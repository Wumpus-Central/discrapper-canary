n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(475179),
    l = n(112560),
    o = n(388032);
let a = n(576394);
function s(e) {
    let { width: t, className: n, channelId: s, noArt: c = !1 } = e;
    return (0, r.jsx)(l.Z, {
        artURL: a,
        noArt: c,
        size: (0, l.L)(t),
        className: n,
        callToAction: o.NW.string(o.t.kLQySE),
        header: o.NW.format(o.t.mAf1OD, {}),
        onCTAClick: () => i.Z.toggleVoiceParticipantsHidden(s, !1)
    });
}
