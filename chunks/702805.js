n.d(e, { E: () => a, G9: () => s, LA: () => u, R$: () => d, Ts: () => o, lS: () => T });
var r = n(228366),
    i = n(60868),
    l = n(308528);
async function u(t, e, n, l) {
    let u = t.getGuildId();
    if (null != u && e === u && !(await (0, i.n)(t, l, n))) return !1;
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION", id: e, allow: n, deny: l });
}
function s(t) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id: t });
}
function a(t) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode: t });
}
function o() {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
}
function d(t, e, n) {
    return T(t, e, [], n);
}
function T(t, e, n, i) {
    return (
        r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" }),
        new Promise((r) => {
            let i = () => {
                if (0 === e.length && 0 === n.length) return r();
                if (e.length > 0) {
                    let n = e.pop();
                    if (null == n) return i();
                    l.A.updatePermissionOverwrite(t, n).then(i, i);
                } else {
                    let e = n.pop();
                    if (null == e) return i();
                    l.A.clearPermissionOverwrite(t, e).then(i, i);
                }
            };
            i();
        }).then(() => {
            r.h.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: i });
        })
    );
}
