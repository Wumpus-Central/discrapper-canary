n.d(t, {
    JZ: () => l,
    fS: () => i,
    wX: () => a
});
var r = n(570140);
function i(e, t) {
    r.Z.dispatch({
        type: 'LIBRARY_TABLE_SORT_UPDATE',
        key: e,
        direction: t
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'LIBRARY_APPLICATION_FILTER_UPDATE',
        query: e
    });
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.Z.dispatch({
        type: 'LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE',
        key: e,
        isKeyboardEvent: t
    });
}
