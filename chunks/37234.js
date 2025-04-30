n.d(t, {
    Ou: () => o,
    jN: () => i,
    xf: () => a
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'LAYER_PUSH',
        component: e
    });
}
function a() {
    r.Z.dispatch({ type: 'LAYER_POP' });
}
function o() {
    r.Z.dispatch({ type: 'LAYER_POP_ALL' });
}
