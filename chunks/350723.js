n.d(t, { GP: () => A, R: () => o, Ts: () => u, XC: () => l, _c: () => _, t2: () => E, tV: () => c });
var i = n(735438),
    a = n(228366),
    r = n(475815),
    s = n(365971);
function l(e, t) {
    a.h.dispatch({ type: "WINDOW_FOCUS", windowId: (0, s.Q2)(e), focused: t });
}
function o(e) {
    a.h.dispatch({ type: "WINDOW_HIDDEN", windowId: (0, s.Q2)(e) });
}
let d = (0, i.memoize)((e) =>
    (0, i.debounce)((t, n) => {
        a.h.dispatch({ type: "WINDOW_RESIZED", windowId: e, width: t, height: n });
    }, 100),
);
function c(e) {
    d((0, s.Q2)(e))(e.innerWidth, e.innerHeight);
}
function _(e) {
    let t = (0, s.Q2)(e);
    a.h.dispatch({ type: "WINDOW_FULLSCREEN_CHANGE", windowId: t, isElementFullscreen: (0, r._U)(null, e.document) });
}
function E(e) {
    let t = (0, s.Q2)(e);
    a.h.dispatch({ type: "WINDOW_VISIBILITY_CHANGE", windowId: t, visible: "visible" === e.document.visibilityState });
}
function u(e) {
    let t = (0, s.Q2)(e),
        n = e.document;
    a.h.dispatch({
        type: "WINDOW_INIT",
        windowId: t,
        isElementFullscreen: (0, r._U)(null, n),
        focused: n.hasFocus(),
        width: e.innerWidth,
        height: e.innerHeight,
        visible: "visible" === n.visibilityState,
    });
}
function A(e) {
    a.h.dispatch({ type: "WINDOW_UNLOAD", windowId: (0, s.Q2)(e) });
}
