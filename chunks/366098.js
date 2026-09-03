n.d(t, { D3: () => s, G1: () => o, Gc: () => d, Iv: () => u, Xk: () => l, mT: () => c });
var i = n(17928),
    r = n(63995),
    a = n(518769);
function s(e) {
    return (0, i.bG)([r.A], () => (null != e ? r.A.getParticipantCount(e, a.ip.BLOCKED) : 0), [e]);
}
function l(e) {
    return (0, i.bG)([r.A], () => (null != e ? r.A.getParticipantCount(e, a.ip.IGNORED) : 0), [e]);
}
function o(e) {
    return r.A.getParticipantCount(e, a.ip.BLOCKED) ?? 0;
}
function d(e) {
    return r.A.getParticipantCount(e, a.ip.IGNORED) ?? 0;
}
function c(e) {
    return (0, i.bG)([r.A], () => r.A.getMutableParticipants(e, a.ip.BLOCKED), [e]);
}
function u(e) {
    return (0, i.bG)([r.A], () => r.A.getMutableParticipants(e, a.ip.IGNORED), [e]);
}
