"use strict";
n.d(t, { J0: () => o, Qh: () => a, ST: () => i, mZ: () => s, uA: () => l });
var r = n(73153);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
    r.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
}
function s(e, t) {
    r.h.dispatch({ type: "BROWSER_HANDOFF_END", handoffToken: e, fingerprint: t });
}
function a(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: i, timeout: s = 1e4 } = e;
    r.h.dispatch({ type: "BROWSER_HANDOFF_FROM_APP", handoffKey: t, handoffToken: n, handoffSource: i, timeout: s });
}
function o() {
    r.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
}
function l(e) {
    r.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
}
