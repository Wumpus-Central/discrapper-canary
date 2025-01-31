n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(475179),
    a = n(112560),
    r = n(388032);
let s = n(576394);
function o(e) {
    let { width: t, className: n, channelId: o, noArt: c = !1 } = e;
    return (0, i.jsx)(a.Z, {
        artURL: s,
        noArt: c,
        size: (0, a.L)(t),
        className: n,
        callToAction: r.intl.string(r.t.kLQySE),
        header: r.intl.format(r.t.mAf1OD, {}),
        onCTAClick: () => l.Z.toggleVoiceParticipantsHidden(o, !1)
    });
}
