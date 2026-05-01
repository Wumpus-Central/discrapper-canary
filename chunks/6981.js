"use strict";
n.d(t, { J0: () => o, Qh: () => a, ST: () => r, mZ: () => s, uA: () => l });
var i = n(228366);
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
    i.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
}
function s(e, t) {
    i.h.dispatch({ type: "BROWSER_HANDOFF_END", handoffToken: e, fingerprint: t });
}
function a(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: r, timeout: s = 1e4 } = e;
    i.h.dispatch({ type: "BROWSER_HANDOFF_FROM_APP", handoffKey: t, handoffToken: n, handoffSource: r, timeout: s });
}
function o() {
    i.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
}
function l(e) {
    i.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
}
