n.d(t, { $: () => r, L: () => l });
var i = n(228366),
    s = n(154323);
function l(e, t) {
    let n = "boolean" == typeof t ? t : !s.A.get(e);
    i.h.dispatch({ type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET", toggle: e, value: n });
}
function r() {
    for (let e in s.A.enabled()) l(e, !1);
}
