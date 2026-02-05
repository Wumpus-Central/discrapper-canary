"use strict";
n.d(t, { Ay: () => d, qC: () => c });
var r = n(311907),
    i = n(576705),
    a = n(488926),
    s = n(818348);
let o = [s.xB.SET_VOICE_CHANNEL_STATUS, s.xB.CONNECT, s.xB.VIEW_CHANNEL],
    l = [s.xB.SET_VOICE_CHANNEL_STATUS];
function u(e, t, n, r) {
    return (n ? l : o).every((n) => (null == r ? t.can(n, e) : a.$3({ permission: n, user: r, context: e })));
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return u(e, i.A, t, n);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, r.bG)([i.A], () => u(e, i.A, t, n), [e, t, n]);
}
