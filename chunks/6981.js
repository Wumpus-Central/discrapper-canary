"use strict";
n.d(t, { J0: () => o, Qh: () => s, ST: () => i, mZ: () => a, uA: () => l });
var r = n(73153);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
    r.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
}
function a(e, t) {
    r.h.dispatch({ type: "BROWSER_HANDOFF_END", handoffToken: e, fingerprint: t });
}
function s(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: i, timeout: a = 1e4 } = e;
    r.h.dispatch({ type: "BROWSER_HANDOFF_FROM_APP", handoffKey: t, handoffToken: n, handoffSource: i, timeout: a });
}
function o() {
    r.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
}
function l(e) {
    r.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
}
