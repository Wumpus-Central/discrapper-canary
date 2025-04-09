n.d(t, {
    N5: () => i,
    c4: () => a,
    lc: () => o,
    mJ: () => l
});
var r = n(570140);
function a(e) {
    r.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function i(e) {
    r.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
