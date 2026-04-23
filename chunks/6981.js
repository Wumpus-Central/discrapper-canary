n.d(t, { J0: () => s, Qh: () => l, ST: () => r, mZ: () => a, uA: () => o });
var i = n(228366);
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
    i.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
}
function a(e, t) {
    i.h.dispatch({ type: "BROWSER_HANDOFF_END", handoffToken: e, fingerprint: t });
}
function l(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: r, timeout: a = 1e4 } = e;
    i.h.dispatch({ type: "BROWSER_HANDOFF_FROM_APP", handoffKey: t, handoffToken: n, handoffSource: r, timeout: a });
}
function s() {
    i.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
}
function o(e) {
    i.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
}
