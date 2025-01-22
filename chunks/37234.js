r.d(n, {
    Ou: function () {
        return s;
    },
    jN: function () {
        return a;
    },
    xf: function () {
        return o;
    }
});
var i = r(570140);
function a(e) {
    i.Z.dispatch({
        type: 'LAYER_PUSH',
        component: e
    });
}
function o() {
    i.Z.dispatch({ type: 'LAYER_POP' });
}
function s() {
    i.Z.dispatch({ type: 'LAYER_POP_ALL' });
}
