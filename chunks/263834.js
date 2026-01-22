n.d(t, {
    L: () => i,
});
var a = n(73153),
    l = n(865116);

function i(e, t) {
    let n = "boolean" == typeof t ? t : !l.Ay.get(e);
    a.h.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n,
    });
}
