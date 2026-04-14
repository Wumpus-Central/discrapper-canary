"use strict";
n.d(t, { Ay: () => c });
var r = n(311907),
    i = n(576705),
    s = n(488926),
    a = n(818348);
let o = [a.xB.SET_VOICE_CHANNEL_STATUS, a.xB.CONNECT, a.xB.VIEW_CHANNEL],
    l = [a.xB.SET_VOICE_CHANNEL_STATUS];
function u(e, t, n, r) {
    return (n ? l : o).every((n) => (null == r ? t.can(n, e) : s.$3({ permission: n, user: r, context: e })));
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, r.bG)([i.A], () => u(e, i.A, t, n), [e, t, n]);
}
