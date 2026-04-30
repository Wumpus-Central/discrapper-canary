n.d(t, { E5: () => l, J2: () => d, uy: () => c, zy: () => o });
var i = n(17928),
    a = n(996439),
    r = n(63995),
    s = n(69407);
function l(e, t) {
    let [n] = (0, i.bG)([r.A], () => [r.A.getMutableParticipants(e, t), r.A.getParticipantsVersion(e)], [e, t], a.D);
    return n;
}
function o(e, t) {
    return (0, i.bG)([r.A], () => r.A.getParticipantCount(e, t), [e, t]);
}
function d(e) {
    let [t] = (0, i.bG)(
        [r.A],
        () => [r.A.getMutableRequestToSpeakParticipants(e), r.A.getRequestToSpeakParticipantsVersion(e)],
        [e],
        a.D,
    );
    return t;
}
function c(e) {
    return (0, i.bG)(
        [r.A],
        () => r.A.getMutableParticipants(e, s.ip.SPEAKER).filter((e) => e.type === s.wY.VOICE).length,
        [e],
    );
}
