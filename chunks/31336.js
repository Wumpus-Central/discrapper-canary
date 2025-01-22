r.d(n, {
    Qh: function () {
        return o;
    },
    SO: function () {
        return s;
    },
    Zw: function () {
        return l;
    }
});
var i = r(570140),
    a = r(19759);
function o(e) {
    i.Z.dispatch({
        type: 'DEV_TOOLS_SETTINGS_UPDATE',
        settings: e
    });
}
function s() {
    o({ displayTools: !a.Z.displayTools });
}
function l() {
    i.Z.dispatch({ type: 'ANALYTICS_LOG_CLEAR' });
}
