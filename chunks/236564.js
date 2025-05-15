n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(475179),
    l = n(112560),
    a = n(388032);
let o = n(576394);
function s(e) {
    let { width: t, className: n, channelId: s, noArt: c = !1 } = e;
    return (0, r.jsx)(l.Z, {
        artURL: o,
        noArt: c,
        size: (0, l.L)(t),
        className: n,
        callToAction: a.intl.string(a.t.kLQySE),
        header: a.intl.format(a.t.mAf1OD, {}),
        onCTAClick: () => i.Z.toggleVoiceParticipantsHidden(s, !1)
    });
}
