"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(251913),
    a = n(825755),
    s = n(153084);
function o() {
    let e = (0, r.bG)([a.A], () => a.A.error),
        [t, n] = (0, r.yK)([s.A], () => [s.A.error, s.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? i.oc.PENDING : null != t ? i.oc.ERROR : i.oc.NONE,
    };
}
