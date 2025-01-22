r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(442837),
    a = r(780384),
    o = r(410030),
    s = r(358221),
    l = r(944486),
    u = r(981631);
function c(e, n) {
    let r = (0, i.e7)([l.Z], () => l.Z.getVoiceChannelId()),
        c = (0, i.e7)([s.Z], () => (null != r ? s.Z.getMode(r) : null)),
        d = (0, o.ZP)();
    return null != e ? e : c === u.WtW.VOICE && (0, a.ap)(d) ? (n ? 'activeLight' : 'primaryLight') : n ? 'white' : 'primaryDark';
}
