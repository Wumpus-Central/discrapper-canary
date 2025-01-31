n.d(t, {
    Ou: () => s,
    jN: () => r,
    xf: () => a
});
var i = n(570140);
function r(e) {
    i.Z.dispatch({
        type: 'LAYER_PUSH',
        component: e
    });
}
function a() {
    i.Z.dispatch({ type: 'LAYER_POP' });
}
function s() {
    i.Z.dispatch({ type: 'LAYER_POP_ALL' });
}
