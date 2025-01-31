n.d(t, {
    Qh: () => a,
    SO: () => s,
    Zw: () => o
});
var i = n(570140),
    r = n(19759);
function a(e) {
    i.Z.dispatch({
        type: 'DEV_TOOLS_SETTINGS_UPDATE',
        settings: e
    });
}
function s() {
    a({ displayTools: !r.Z.displayTools });
}
function o() {
    i.Z.dispatch({ type: 'ANALYTICS_LOG_CLEAR' });
}
