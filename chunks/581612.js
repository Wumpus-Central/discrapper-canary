a.d(t, {
    Z: () => l,
    q: () => i
});
var n = a(570140),
    r = a(91311);
function l(e, t) {
    let a = 'boolean' == typeof t ? t : !r.Z.get(e);
    n.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: a
    });
}
function i() {
    for (let e in r.Z.enabled()) l(e, !1);
}
