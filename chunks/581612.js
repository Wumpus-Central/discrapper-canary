n.d(t, {
    Z: () => r,
    q: () => i
});
var a = n(570140),
    l = n(91311);
function r(e, t) {
    let n = 'boolean' == typeof t ? t : !l.Z.get(e);
    a.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: n
    });
}
function i() {
    for (let e in l.Z.all()) r(e, !1);
}
