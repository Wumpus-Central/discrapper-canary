"use strict";
n.d(t, { GP: () => h, R: () => l, Ts: () => f, XC: () => o, _c: () => d, t2: () => _, tV: () => c });
var i = n(735438),
    r = n(228366),
    s = n(475815),
    a = n(365971);
function o(e, t) {
    r.h.dispatch({ type: "WINDOW_FOCUS", windowId: (0, a.Q2)(e), focused: t });
}
function l(e) {
    r.h.dispatch({ type: "WINDOW_HIDDEN", windowId: (0, a.Q2)(e) });
}
let u = (0, i.memoize)((e) =>
    (0, i.debounce)((t, n) => {
        r.h.dispatch({ type: "WINDOW_RESIZED", windowId: e, width: t, height: n });
    }, 100),
);
function c(e) {
    u((0, a.Q2)(e))(e.innerWidth, e.innerHeight);
}
function d(e) {
    let t = (0, a.Q2)(e);
    r.h.dispatch({ type: "WINDOW_FULLSCREEN_CHANGE", windowId: t, isElementFullscreen: (0, s._U)(null, e.document) });
}
function _(e) {
    let t = (0, a.Q2)(e);
    r.h.dispatch({ type: "WINDOW_VISIBILITY_CHANGE", windowId: t, visible: "visible" === e.document.visibilityState });
}
function f(e) {
    let t = (0, a.Q2)(e),
        n = e.document;
    r.h.dispatch({
        type: "WINDOW_INIT",
        windowId: t,
        isElementFullscreen: (0, s._U)(null, n),
        focused: n.hasFocus(),
        width: e.innerWidth,
        height: e.innerHeight,
        visible: "visible" === n.visibilityState,
    });
}
function h(e) {
    r.h.dispatch({ type: "WINDOW_UNLOAD", windowId: (0, a.Q2)(e) });
}
