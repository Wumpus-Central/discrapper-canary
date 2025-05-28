n.d(t, {
    Fd: () => c,
    Io: () => u,
    Rk: () => l,
    w8: () => s
}),
    n(388685);
var r = n(442837),
    i = n(136015),
    a = n(565799),
    o = n(501655);
function s(e, t) {
    let [n] = (0, r.e7)([a.Z], () => [a.Z.getMutableParticipants(e, t), a.Z.getParticipantsVersion(e)], [e, t], i.Q);
    return n;
}
function l(e, t) {
    return (0, r.e7)([a.Z], () => a.Z.getParticipantCount(e, t), [e, t]);
}
function c(e) {
    let [t] = (0, r.e7)([a.Z], () => [a.Z.getMutableRequestToSpeakParticipants(e), a.Z.getRequestToSpeakParticipantsVersion(e)], [e], i.Q);
    return t;
}
function u(e) {
    return (0, r.e7)([a.Z], () => a.Z.getMutableParticipants(e, o.pV.SPEAKER).filter((e) => e.type === o.Ui.VOICE).length, [e]);
}
