n.d(t, {
    CO: () => f,
    Rz: () => p,
    S1: () => _,
    T_: () => s,
    al: () => l,
    dx: () => u,
    gH: () => d
});
var r = n(392711),
    i = n(570140),
    o = n(228488),
    a = n(830917);
function s(e, t) {
    i.Z.dispatch({
        type: 'WINDOW_FOCUS',
        windowId: (0, a.ZY)(e),
        focused: t
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'WINDOW_HIDDEN',
        windowId: (0, a.ZY)(e)
    });
}
let c = (0, r.memoize)((e) =>
    (0, r.debounce)((t, n) => {
        i.Z.dispatch({
            type: 'WINDOW_RESIZED',
            windowId: e,
            width: t,
            height: n
        });
    }, 100)
);
function u(e) {
    c((0, a.ZY)(e))(e.innerWidth, e.innerHeight);
}
function d(e) {
    let t = (0, a.ZY)(e);
    i.Z.dispatch({
        type: 'WINDOW_FULLSCREEN_CHANGE',
        windowId: t,
        isElementFullscreen: (0, o.rB)(null, e.document)
    });
}
function f(e) {
    let t = (0, a.ZY)(e);
    i.Z.dispatch({
        type: 'WINDOW_VISIBILITY_CHANGE',
        windowId: t,
        visible: 'visible' === e.document.visibilityState
    });
}
function _(e) {
    let t = (0, a.ZY)(e),
        n = e.document;
    i.Z.dispatch({
        type: 'WINDOW_INIT',
        windowId: t,
        isElementFullscreen: (0, o.rB)(null, n),
        focused: n.hasFocus(),
        width: e.innerWidth,
        height: e.innerHeight,
        visible: 'visible' === n.visibilityState
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'WINDOW_UNLOAD',
        windowId: (0, a.ZY)(e)
    });
}
