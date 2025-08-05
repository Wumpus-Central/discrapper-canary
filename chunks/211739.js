a.d(t, {
    N5: () => i,
    c4: () => r,
    lc: () => s,
    mJ: () => l
});
var n = a(570140);
function r(e) {
    n.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function l(e) {
    n.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function i(e) {
    n.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function s(e) {
    n.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
