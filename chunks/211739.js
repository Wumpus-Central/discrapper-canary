n.d(t, {
    N5: () => a,
    c4: () => i,
    lc: () => l,
    mJ: () => o
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
