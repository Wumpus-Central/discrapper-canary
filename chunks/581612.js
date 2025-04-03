n.d(t, {
    Z: () => l,
    q: () => i
});
var r = n(570140),
    a = n(91311);
function l(e, t) {
    let n = 'boolean' == typeof t ? t : !a.Z.get(e);
    r.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: n
    });
}
function i() {
    for (let e in a.Z.all()) l(e, !1);
}
