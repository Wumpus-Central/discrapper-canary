r.d(n, {
    Aj: function () {
        return l;
    },
    S1: function () {
        return c;
    },
    d$: function () {
        return u;
    },
    hw: function () {
        return d;
    },
    kU: function () {
        return f;
    },
    kY: function () {
        return s;
    }
});
var i = r(570140),
    a = r(156699),
    o = r(493683);
async function s(e, n, r, o) {
    let s = e.getGuildId();
    if (null != s && n === s && !(await (0, a.u)(e, o, r))) return !1;
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION',
        id: n,
        allow: r,
        deny: o
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION',
        id: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE',
        advancedMode: e
    });
}
function c() {
    i.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_INIT' });
}
function d(e, n, r) {
    return f(e, n, [], r);
}
function f(e, n, r, a) {
    return (
        i.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING' }),
        new Promise((i) => {
            let a = () => {
                if (0 === n.length && 0 === r.length) return i();
                if (n.length > 0) {
                    let r = n.pop();
                    if (null == r) return a();
                    o.Z.updatePermissionOverwrite(e, r).then(a, a);
                } else {
                    let n = r.pop();
                    if (null == n) return a();
                    o.Z.clearPermissionOverwrite(e, n).then(a, a);
                }
            };
            a();
        }).then(() => {
            i.Z.dispatch({
                type: 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS',
                silent: a
            });
        })
    );
}
