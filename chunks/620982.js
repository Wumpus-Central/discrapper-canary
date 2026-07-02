n.d(t, { A: () => a });
var i = n(17928),
    s = n(495544),
    l = n(470710);
function a(e) {
    return (0, i.cf)([l.A, s.default], () => {
        let t = l.A.getCall(e),
            n = s.default.getId(),
            i = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: i, isOngoingCall: l.A.isCallActive(e) && !i };
    });
}
