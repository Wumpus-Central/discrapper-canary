"use strict";
n.d(t, { A: () => a });
var i = n(17928),
    r = n(495544),
    s = n(470710);
function a(e) {
    return (0, i.cf)([s.A, r.default], () => {
        let t = s.A.getCall(e),
            n = r.default.getId(),
            i = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: i, isOngoingCall: s.A.isCallActive(e) && !i };
    });
}
