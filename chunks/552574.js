"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(251913),
    s = n(825755),
    a = n(153084);
function o() {
    let e = (0, r.bG)([s.A], () => s.A.error),
        [t, n] = (0, r.yK)([a.A], () => [a.A.error, a.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? i.oc.PENDING : null != t ? i.oc.ERROR : i.oc.NONE,
    };
}
