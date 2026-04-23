n.d(t, { GP: () => I, R: () => l, Ts: () => u, XC: () => _, _c: () => d, t2: () => c, tV: () => E });
var i = n(735438),
    r = n(228366),
    a = n(475815),
    s = n(365971);
function _(e, t) {
    r.h.dispatch({ type: "WINDOW_FOCUS", windowId: (0, s.Q2)(e), focused: t });
}
function l(e) {
    r.h.dispatch({ type: "WINDOW_HIDDEN", windowId: (0, s.Q2)(e) });
}
let o = (0, i.memoize)((e) =>
    (0, i.debounce)((t, n) => {
        r.h.dispatch({ type: "WINDOW_RESIZED", windowId: e, width: t, height: n });
    }, 100),
);
function E(e) {
    o((0, s.Q2)(e))(e.innerWidth, e.innerHeight);
}
function d(e) {
    let t = (0, s.Q2)(e);
    r.h.dispatch({ type: "WINDOW_FULLSCREEN_CHANGE", windowId: t, isElementFullscreen: (0, a._U)(null, e.document) });
}
function c(e) {
    let t = (0, s.Q2)(e);
    r.h.dispatch({ type: "WINDOW_VISIBILITY_CHANGE", windowId: t, visible: "visible" === e.document.visibilityState });
}
function u(e) {
    let t = (0, s.Q2)(e),
        n = e.document;
    r.h.dispatch({
        type: "WINDOW_INIT",
        windowId: t,
        isElementFullscreen: (0, a._U)(null, n),
        focused: n.hasFocus(),
        width: e.innerWidth,
        height: e.innerHeight,
        visible: "visible" === n.visibilityState,
    });
}
function I(e) {
    r.h.dispatch({ type: "WINDOW_UNLOAD", windowId: (0, s.Q2)(e) });
}
