n.d(t, {
    Fd: () => c,
    Io: () => u,
    Rk: () => l,
    w8: () => s
}),
    n(47120);
var r = n(442837),
    i = n(136015),
    o = n(565799),
    a = n(501655);
function s(e, t) {
    let [n] = (0, r.e7)([o.Z], () => [o.Z.getMutableParticipants(e, t), o.Z.getParticipantsVersion(e)], [e, t], i.Q);
    return n;
}
function l(e, t) {
    return (0, r.e7)([o.Z], () => o.Z.getParticipantCount(e, t), [e, t]);
}
function c(e) {
    let [t] = (0, r.e7)([o.Z], () => [o.Z.getMutableRequestToSpeakParticipants(e), o.Z.getRequestToSpeakParticipantsVersion(e)], [e], i.Q);
    return t;
}
function u(e) {
    return (0, r.e7)([o.Z], () => o.Z.getMutableParticipants(e, a.pV.SPEAKER).filter((e) => e.type === a.Ui.VOICE).length, [e]);
}
