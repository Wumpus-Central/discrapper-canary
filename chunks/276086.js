i.d(t, { $: () => r, L: () => l });
var n = i(228366),
    s = i(154323);
function l(e, t) {
    let i = "boolean" == typeof t ? t : !s.A.get(e);
    n.h.dispatch({ type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET", toggle: e, value: i });
}
function r() {
    for (let e in s.A.enabled()) l(e, !1);
}
