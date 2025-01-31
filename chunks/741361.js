n.d(t, {
    Aj: () => o,
    S1: () => u,
    d$: () => l,
    hw: () => c,
    kU: () => d,
    kY: () => s
});
var i = n(570140),
    r = n(156699),
    a = n(493683);
async function s(e, t, n, a) {
    let s = e.getGuildId();
    if (null != s && t === s && !(await (0, r.u)(e, a, n))) return !1;
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION',
        id: t,
        allow: n,
        deny: a
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION',
        id: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE',
        advancedMode: e
    });
}
function u() {
    i.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_INIT' });
}
function c(e, t, n) {
    return d(e, t, [], n);
}
function d(e, t, n, r) {
    return (
        i.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING' }),
        new Promise((i) => {
            let r = () => {
                if (0 === t.length && 0 === n.length) return i();
                if (t.length > 0) {
                    let n = t.pop();
                    if (null == n) return r();
                    a.Z.updatePermissionOverwrite(e, n).then(r, r);
                } else {
                    let t = n.pop();
                    if (null == t) return r();
                    a.Z.clearPermissionOverwrite(e, t).then(r, r);
                }
            };
            r();
        }).then(() => {
            i.Z.dispatch({
                type: 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS',
                silent: r
            });
        })
    );
}
