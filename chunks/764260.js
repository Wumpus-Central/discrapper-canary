n.d(t, {
    Gf: () => f,
    OW: () => u,
    S1: () => l,
    TW: () => m,
    TY: () => c,
    Uv: () => d,
    _l: () => p,
    d_: () => h,
    lO: () => o,
    sI: () => a,
    we: () => g
}),
    n(953529),
    n(388685);
var r = n(570140),
    i = n(749210),
    s = n(228643);
function a(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function l() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_INIT' });
}
function o(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS',
        id: e,
        flag: t,
        allow: n
    });
}
function c(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS',
        id: e
    });
}
function d(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_NAME',
        id: e,
        name: t
    });
}
function u(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_COLOR',
        id: e,
        color: t
    });
}
function m(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_COLORS',
        id: e,
        colors: t
    });
}
function g(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
        id: e,
        hoist: t,
        mentionable: n
    });
}
function p(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
        id: e,
        icon: t,
        unicodeEmoji: n
    });
}
function h(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
        roleId: e,
        roleConnectionConfigurations: t
    });
}
async function f(e, t, n, a, l) {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        let r = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || '' === n.name) return r();
            await i.Z.updateRole(e, n.id, {
                name: n.name,
                description: n.description,
                permissions: n.permissions,
                color: n.color,
                colors: n.colors,
                hoist: n.hoist,
                mentionable: n.mentionable,
                icon: n.icon,
                unicodeEmoji: n.unicodeEmoji
            }).then(r, r);
        };
        if ((null != n && n.length > 0 ? await i.Z.batchRoleUpdate(e, n).then(r, r) : await r(), null != l && null != a))
            for await (let t of a) {
                let n = l.get(t);
                await (0, s.L_)(e, t, null != n ? n : []);
            }
    } catch (e) {
        var o, c;
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null != (c = null == (o = e.body) ? void 0 : o.message) ? c : Object.values(e.body)[0]
        });
        return;
    }
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
}
