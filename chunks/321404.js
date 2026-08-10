"use strict";
n.d(t, { O: () => s, c: () => l });
var i = n(17928),
    r = n(380335),
    a = n(157550);
function s(e) {
    return (0, i.bG)([r.A], () => r.A.isMessageRequest(e), [e]);
}
function l(e) {
    return (0, i.bG)([r.A, a.A], () => null != e && (r.A.isMessageRequest(e) || a.A.isSpam(e)));
}
