n.d(t, {
    Z: () => a,
    q: () => o,
});
var r = n(570140),
    i = n(91311);
function a(e, t) {
    let n = "boolean" == typeof t ? t : !i.Z.get(e);
    r.Z.dispatch({
        type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
        toggle: e,
        value: n,
    });
}
function o() {
    for (let e in i.Z.enabled()) a(e, !1);
}
