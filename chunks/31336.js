n.d(t, {
    Qh: () => o,
    SO: () => a,
    Zw: () => s
});
var r = n(570140),
    i = n(19759);
function o(e) {
    r.Z.dispatch({
        type: 'DEV_TOOLS_SETTINGS_UPDATE',
        settings: e
    });
}
function a() {
    o({ displayTools: !i.Z.displayTools });
}
function s() {
    r.Z.dispatch({ type: 'ANALYTICS_LOG_CLEAR' });
}
