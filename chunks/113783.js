n.d(t, {
    E5: () => o,
    J2: () => c,
    uy: () => u,
    zy: () => l,
}),
    n(896048);
var r = n(311907),
    i = n(996439),
    a = n(63995),
    s = n(69407);

function o(e, t) {
    let [n] = (0, r.bG)([a.A], () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)], [e, t], i.D);
    return n;
}

function l(e, t) {
    return (0, r.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t]);
}

function c(e) {
    let [t] = (0, r.bG)(
        [a.A],
        () => [a.A.getMutableRequestToSpeakParticipants(e), a.A.getRequestToSpeakParticipantsVersion(e)],
        [e],
        i.D,
    );
    return t;
}

function u(e) {
    return (0, r.bG)(
        [a.A],
        () => a.A.getMutableParticipants(e, s.ip.SPEAKER).filter((e) => e.type === s.wY.VOICE).length,
        [e],
    );
}
