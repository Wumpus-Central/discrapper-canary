n.d(e, {
    N5: () => r,
    c4: () => a,
    lc: () => u,
    mJ: () => l
});
var i = n(570140);
function a(t) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: t
    });
}
function l(t) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: t
    });
}
function r(t) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: t
    });
}
function u(t) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: t
    });
}
