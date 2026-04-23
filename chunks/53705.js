n.d(t, { $: () => a, L: () => s });
var i = n(228366),
    l = n(154323);
function s(e, t) {
    let n = "boolean" == typeof t ? t : !l.A.get(e);
    i.h.dispatch({ type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET", toggle: e, value: n });
}
function a() {
    for (let e in l.A.enabled()) s(e, !1);
}
