n.d(t, {
    Aj: () => a,
    S1: () => s,
    d$: () => o,
    hw: () => c,
    kU: () => d,
    kY: () => u
});
var r = n(570140),
    i = n(156699),
    l = n(493683);
async function u(e, t, n, l) {
    let u = e.getGuildId();
    if (null != u && t === u && !(await (0, i.u)(e, l, n))) return !1;
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION',
        id: t,
        allow: n,
        deny: l
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION',
        id: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE',
        advancedMode: e
    });
}
function s() {
    r.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_INIT' });
}
function c(e, t, n) {
    return d(e, t, [], n);
}
function d(e, t, n, i) {
    return (
        r.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING' }),
        new Promise((r) => {
            let i = () => {
                if (0 === t.length && 0 === n.length) return r();
                if (t.length > 0) {
                    let n = t.pop();
                    if (null == n) return i();
                    l.Z.updatePermissionOverwrite(e, n).then(i, i);
                } else {
                    let t = n.pop();
                    if (null == t) return i();
                    l.Z.clearPermissionOverwrite(e, t).then(i, i);
                }
            };
            i();
        }).then(() => {
            r.Z.dispatch({
                type: 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS',
                silent: i
            });
        })
    );
}
