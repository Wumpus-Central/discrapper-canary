n.d(t, {
    PK: () => l,
    tu: () => f,
    xJ: () => c
});
var i = n(442837),
    r = n(430824),
    a = n(979651),
    s = n(565799),
    o = n(501655);
function l(e) {
    let t = u(e);
    return (0, i.e7)([a.Z], () => a.Z.hasVideo(e), [e]) || t;
}
function u(e) {
    return (0, i.e7)([s.Z], () => null != s.Z.getMutableParticipants(e, o.pV.SPEAKER).find((e) => e.type === o.Ui.STREAM), [e]);
}
function c(e) {
    return d(e) || a.Z.hasVideo(e);
}
function d(e) {
    return null != s.Z.getMutableParticipants(e, o.pV.SPEAKER).find((e) => e.type === o.Ui.STREAM);
}
function f(e) {
    var t;
    let n = r.Z.getGuild(e);
    return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0;
}
