(n.d(t, {
    Gf: () => x,
    Jf: () => g,
    OW: () => u,
    S1: () => s,
    TW: () => m,
    TY: () => c,
    Uv: () => d,
    _l: () => h,
    d_: () => f,
    lO: () => o,
    sI: () => a,
    we: () => p
}),
    n(953529),
    n(388685));
var r = n(570140),
    i = n(749210),
    l = n(228643);
function a(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function s() {
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
function m(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_COLORS',
        id: e,
        colors: t,
        currentStyle: n
    });
}
function g(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE',
        id: e,
        currentStyle: t
    });
}
function p(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
        id: e,
        hoist: t,
        mentionable: n
    });
}
function h(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
        id: e,
        icon: t,
        unicodeEmoji: n
    });
}
function f(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
        roleId: e,
        roleConnectionConfigurations: t
    });
}
async function x(e, t, n, a, s) {
    var o, c, d, u;
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        for (null != n && n.length > 0 && (await i.Z.batchRoleUpdate(e, n)); null != t && t.length > 0; ) {
            let n = t.pop();
            null != n &&
                '' !== n.name &&
                (await i.Z.updateRole(e, n.id, {
                    name: n.name,
                    description: null != (o = n.description) ? o : void 0,
                    permissions: n.permissions,
                    color: n.color,
                    colors: null != (c = n.colors) ? c : void 0,
                    hoist: n.hoist,
                    mentionable: n.mentionable,
                    icon: n.icon,
                    unicodeEmoji: n.unicodeEmoji
                }));
        }
        if (null != s && null != a)
            for await (let t of a) {
                let n = s.get(t);
                await (0, l.L_)(e, t, null != n ? n : []);
            }
        r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
    } catch (e) {
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null != (u = null == (d = e.body) ? void 0 : d.message) ? u : Object.values(e.body)[0]
        });
    }
}
