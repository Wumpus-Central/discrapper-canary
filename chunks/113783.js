n.d(t, { E5: () => _, J2: () => o, uy: () => E, zy: () => l });
var i = n(17928),
    r = n(996439),
    a = n(63995),
    s = n(69407);
function _(e, t) {
    let [n] = (0, i.bG)([a.A], () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)], [e, t], r.D);
    return n;
}
function l(e, t) {
    return (0, i.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t]);
}
function o(e) {
    let [t] = (0, i.bG)(
        [a.A],
        () => [a.A.getMutableRequestToSpeakParticipants(e), a.A.getRequestToSpeakParticipantsVersion(e)],
        [e],
        r.D,
    );
    return t;
}
function E(e) {
    return (0, i.bG)(
        [a.A],
        () => a.A.getMutableParticipants(e, s.ip.SPEAKER).filter((e) => e.type === s.wY.VOICE).length,
        [e],
    );
}
