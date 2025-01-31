n.d(t, {
    Fd: () => u,
    Io: () => c,
    Rk: () => l,
    w8: () => o
}),
    n(47120);
var i = n(442837),
    r = n(136015),
    a = n(565799),
    s = n(501655);
function o(e, t) {
    let [n] = (0, i.e7)([a.Z], () => [a.Z.getMutableParticipants(e, t), a.Z.getParticipantsVersion(e)], [e, t], r.Q);
    return n;
}
function l(e, t) {
    return (0, i.e7)([a.Z], () => a.Z.getParticipantCount(e, t), [e, t]);
}
function u(e) {
    let [t] = (0, i.e7)([a.Z], () => [a.Z.getMutableRequestToSpeakParticipants(e), a.Z.getRequestToSpeakParticipantsVersion(e)], [e], r.Q);
    return t;
}
function c(e) {
    return (0, i.e7)([a.Z], () => a.Z.getMutableParticipants(e, s.pV.SPEAKER).filter((e) => e.type === s.Ui.VOICE).length, [e]);
}
