"use strict";
n.d(t, { O: () => a, c: () => o });
var i = n(17928),
    r = n(380335),
    s = n(157550);
function a(e) {
    return (0, i.bG)([r.A], () => r.A.isMessageRequest(e), [e]);
}
function o(e) {
    return (0, i.bG)([r.A, s.A], () => null != e && (r.A.isMessageRequest(e) || s.A.isSpam(e)));
}
