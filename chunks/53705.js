n.d(t, {
    $: () => s,
    L: () => a,
});
var r = n(73153),
    i = n(154323);

function a(e, t) {
    let n = "boolean" == typeof t ? t : !i.A.get(e);
    r.h.dispatch({
        type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
        toggle: e,
        value: n,
    });
}

function s() {
    for (let e in i.A.enabled()) a(e, !1);
}
