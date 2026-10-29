n.d(t, { A: () => a });
var i = n(17928),
    l = n(280450),
    s = n(470710);
function a(e) {
    return (0, i.cf)([s.A, l.default], () => {
        let t = s.A.getCall(e),
            n = l.default.getId(),
            i = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: i, isOngoingCall: s.A.isCallActive(e) && !i };
    });
}
