n.d(t, { $: () => a, L: () => l });
var i = n(73153),
    s = n(154323);
function l(e, t) {
    let n = "boolean" == typeof t ? t : !s.A.get(e);
    i.h.dispatch({ type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET", toggle: e, value: n });
}
function a() {
    for (let e in s.A.enabled()) l(e, !1);
}
