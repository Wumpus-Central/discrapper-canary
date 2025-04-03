n.d(t, {
    N5: () => l,
    c4: () => r,
    lc: () => o,
    mJ: () => a
});
var i = n(570140);
function r(e) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
