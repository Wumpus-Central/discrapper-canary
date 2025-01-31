n.d(t, {
    $Z: () => o,
    Ao: () => l,
    Cp: () => s,
    Cz: () => c,
    bA: () => r,
    d7: () => u,
    k3: () => d,
    xv: () => a
});
var i = n(570140);
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_OPEN',
        id: e,
        component: t,
        props: n
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_CLOSE',
        id: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_HIDE',
        id: e
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_SHOW',
        id: e
    });
}
function l(e, t) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_MOVE',
        id: e,
        position: t
    });
}
function u(e, t) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_RESIZE',
        width: e,
        pipType: t
    });
}
function c(e, t) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_RECT',
        id: e,
        rect: t
    });
}
function d(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW',
        id: e
    });
}
