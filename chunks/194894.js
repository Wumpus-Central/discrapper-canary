n.d(t, {
    n9: () => l,
    pU: () => a,
    vt: () => i,
});
var r = n(73153);
function i(e, t) {
    r.h.dispatch({
        type: "LIBRARY_TABLE_SORT_UPDATE",
        key: e,
        direction: t,
    });
}
function l(e) {
    r.h.dispatch({
        type: "LIBRARY_APPLICATION_FILTER_UPDATE",
        query: e,
    });
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.h.dispatch({
        type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
        key: e,
        isKeyboardEvent: t,
    });
}
