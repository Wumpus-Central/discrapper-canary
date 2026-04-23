"use strict";
n.d(t, { D3: () => a, G1: () => l, Gc: () => d, Iv: () => u, Xk: () => o, mT: () => _ });
var i = n(17928),
    r = n(63995),
    s = n(69407);
function a(e) {
    return (0, i.bG)([r.A], () => (null != e ? r.A.getParticipantCount(e, s.ip.BLOCKED) : 0), [e]);
}
function o(e) {
    return (0, i.bG)([r.A], () => (null != e ? r.A.getParticipantCount(e, s.ip.IGNORED) : 0), [e]);
}
function l(e) {
    return r.A.getParticipantCount(e, s.ip.BLOCKED) ?? 0;
}
function d(e) {
    return r.A.getParticipantCount(e, s.ip.IGNORED) ?? 0;
}
function _(e) {
    return (0, i.bG)([r.A], () => r.A.getMutableParticipants(e, s.ip.BLOCKED), [e]);
}
function u(e) {
    return (0, i.bG)([r.A], () => r.A.getMutableParticipants(e, s.ip.IGNORED), [e]);
}
