n.d(t, {
    CO: () => f,
    Rz: () => p,
    S1: () => _,
    T_: () => o,
    al: () => l,
    dx: () => c,
    gH: () => d
});
var i = n(392711),
    r = n(570140),
    a = n(228488),
    s = n(830917);
function o(e, t) {
    r.Z.dispatch({
        type: 'WINDOW_FOCUS',
        windowId: (0, s.ZY)(e),
        focused: t
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'WINDOW_HIDDEN',
        windowId: (0, s.ZY)(e)
    });
}
let u = (0, i.memoize)((e) =>
    (0, i.debounce)((t, n) => {
        r.Z.dispatch({
            type: 'WINDOW_RESIZED',
            windowId: e,
            width: t,
            height: n
        });
    }, 100)
);
function c(e) {
    u((0, s.ZY)(e))(e.innerWidth, e.innerHeight);
}
function d(e) {
    let t = (0, s.ZY)(e);
    r.Z.dispatch({
        type: 'WINDOW_FULLSCREEN_CHANGE',
        windowId: t,
        isElementFullscreen: (0, a.rB)(null, e.document)
    });
}
function f(e) {
    let t = (0, s.ZY)(e);
    r.Z.dispatch({
        type: 'WINDOW_VISIBILITY_CHANGE',
        windowId: t,
        visible: 'visible' === e.document.visibilityState
    });
}
function _(e) {
    let t = (0, s.ZY)(e),
        n = e.document;
    r.Z.dispatch({
        type: 'WINDOW_INIT',
        windowId: t,
        isElementFullscreen: (0, a.rB)(null, n),
        focused: n.hasFocus(),
        width: e.innerWidth,
        height: e.innerHeight,
        visible: 'visible' === n.visibilityState
    });
}
function p(e) {
    r.Z.dispatch({
        type: 'WINDOW_UNLOAD',
        windowId: (0, s.ZY)(e)
    });
}
