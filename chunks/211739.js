n.d(t, {
    N5: () => i,
    c4: () => r,
    lc: () => o,
    mJ: () => l
});
var a = n(570140);
function r(e) {
    a.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function l(e) {
    a.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function i(e) {
    a.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function o(e) {
    a.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
