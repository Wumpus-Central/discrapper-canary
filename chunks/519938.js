n.d(t, {
    $Z: () => s,
    Ao: () => l,
    Cp: () => a,
    Cz: () => u,
    bA: () => i,
    d7: () => c,
    k3: () => d,
    xv: () => o
});
var r = n(570140);
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_OPEN',
        id: e,
        component: t,
        props: n
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_CLOSE',
        id: e
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_HIDE',
        id: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_SHOW',
        id: e
    });
}
function l(e, t) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_MOVE',
        id: e,
        position: t
    });
}
function c(e, t) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_RESIZE',
        width: e,
        pipType: t
    });
}
function u(e, t) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_RECT',
        id: e,
        rect: t
    });
}
function d(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW',
        id: e
    });
}
