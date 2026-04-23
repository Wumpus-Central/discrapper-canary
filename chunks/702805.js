n.d(t, { E: () => o, G9: () => a, LA: () => s, R$: () => c, Ts: () => u, lS: () => d });
var r = n(73153),
    i = n(60868),
    l = n(308528);
async function s(e, t, n, l) {
    let s = e.getGuildId();
    if (null != s && t === s && !(await (0, i.n)(e, l, n))) return !1;
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION", id: t, allow: n, deny: l });
}
function a(e) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id: e });
}
function o(e) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode: e });
}
function u() {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
}
function c(e, t, n) {
    return d(e, t, [], n);
}
function d(e, t, n, i) {
    return (
        r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" }),
        new Promise((r) => {
            let i = () => {
                if (0 === t.length && 0 === n.length) return r();
                if (t.length > 0) {
                    let n = t.pop();
                    if (null == n) return i();
                    l.A.updatePermissionOverwrite(e, n).then(i, i);
                } else {
                    let t = n.pop();
                    if (null == t) return i();
                    l.A.clearPermissionOverwrite(e, t).then(i, i);
                }
            };
            i();
        }).then(() => {
            r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: i });
        })
    );
}
