n.d(t, { A: () => r });
var l = n(311907),
    s = n(961350),
    a = n(470710);
function r(e) {
    return (0, l.cf)([a.A, s.default], () => {
        let t = a.A.getCall(e),
            n = s.default.getId(),
            l = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: l, isOngoingCall: a.A.isCallActive(e) && !l };
    });
}
