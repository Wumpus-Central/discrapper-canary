n.d(t, {
    PK: () => l,
    tu: () => f,
    xJ: () => u
});
var r = n(442837),
    i = n(430824),
    o = n(979651),
    a = n(565799),
    s = n(501655);
function l(e) {
    let t = c(e);
    return (0, r.e7)([o.Z], () => o.Z.hasVideo(e), [e]) || t;
}
function c(e) {
    return (0, r.e7)([a.Z], () => null != a.Z.getMutableParticipants(e, s.pV.SPEAKER).find((e) => e.type === s.Ui.STREAM), [e]);
}
function u(e) {
    return d(e) || o.Z.hasVideo(e);
}
function d(e) {
    return null != a.Z.getMutableParticipants(e, s.pV.SPEAKER).find((e) => e.type === s.Ui.STREAM);
}
function f(e) {
    var t;
    let n = i.Z.getGuild(e);
    return null != n && (null != (t = null == n ? void 0 : n.maxStageVideoChannelUsers) ? t : 0) > 0;
}
