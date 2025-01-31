n.d(t, { Z: () => u });
var i = n(442837),
    r = n(780384),
    a = n(410030),
    s = n(358221),
    o = n(944486),
    l = n(981631);
function u(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getVoiceChannelId()),
        u = (0, i.e7)([s.Z], () => (null != n ? s.Z.getMode(n) : null)),
        c = (0, a.ZP)();
    return null != e ? e : u === l.WtW.VOICE && (0, r.ap)(c) ? (t ? 'activeLight' : 'primaryLight') : t ? 'white' : 'primaryDark';
}
