n.d(t, {
    Z: () => s,
    q: () => a
});
var i = n(570140),
    r = n(91311);
function s(e, t) {
    let n = 'boolean' == typeof t ? t : !r.Z.get(e);
    i.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: n
    });
}
function a() {
    for (let e in r.Z.enabled()) s(e, !1);
}
