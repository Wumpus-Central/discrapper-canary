n.d(t, {
    Z: () => l,
    q: () => i
});
var a = n(570140),
    r = n(91311);
function l(e, t) {
    let n = 'boolean' == typeof t ? t : !r.Z.get(e);
    a.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: n
    });
}
function i() {
    for (let e in r.Z.all()) l(e, !1);
}
