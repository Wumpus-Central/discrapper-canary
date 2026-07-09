"use strict";
n.d(t, { A: () => s });
var i = n(17928),
    r = n(280450),
    a = n(470710);
function s(e) {
    return (0, i.cf)([a.A, r.default], () => {
        let t = a.A.getCall(e),
            n = r.default.getId(),
            i = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: i, isOngoingCall: a.A.isCallActive(e) && !i };
    });
}
