"use strict";
n.d(t, { D3: () => a, G1: () => l, Gc: () => u, Iv: () => d, Xk: () => o, mT: () => c });
var i = n(17928),
    r = n(63995),
    s = n(518769);
function a(e) {
    return (0, i.bG)([r.A], () => (null != e ? r.A.getParticipantCount(e, s.ip.BLOCKED) : 0), [e]);
}
function o(e) {
    return (0, i.bG)([r.A], () => (null != e ? r.A.getParticipantCount(e, s.ip.IGNORED) : 0), [e]);
}
function l(e) {
    return r.A.getParticipantCount(e, s.ip.BLOCKED) ?? 0;
}
function u(e) {
    return r.A.getParticipantCount(e, s.ip.IGNORED) ?? 0;
}
function c(e) {
    return (0, i.bG)([r.A], () => r.A.getMutableParticipants(e, s.ip.BLOCKED), [e]);
}
function d(e) {
    return (0, i.bG)([r.A], () => r.A.getMutableParticipants(e, s.ip.IGNORED), [e]);
}
