n.d(t, { Z: () => c });
var r = n(442837),
    i = n(780384),
    o = n(410030),
    a = n(358221),
    s = n(944486),
    l = n(981631);
function c(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        c = (0, r.e7)([a.Z], () => (null != n ? a.Z.getMode(n) : null)),
        u = (0, o.ZP)();
    return null != e ? e : c === l.WtW.VOICE && (0, i.ap)(u) ? (t ? 'activeLight' : 'primaryLight') : t ? 'white' : 'primaryDark';
}
