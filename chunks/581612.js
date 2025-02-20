n.d(t, {
    Z: () => i,
    q: () => l
});
var r = n(570140),
    a = n(91311);
function i(e, t) {
    let n = 'boolean' == typeof t ? t : !a.Z.get(e);
    r.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: n
    });
}
function l() {
    for (let e in a.Z.all()) i(e, !1);
}
