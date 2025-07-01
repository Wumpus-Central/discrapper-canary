(n.d(t, {
    Gf: () => x,
    Jf: () => g,
    OW: () => u,
    S1: () => a,
    TW: () => m,
    TY: () => c,
    Uv: () => d,
    _l: () => f,
    d_: () => h,
    lO: () => o,
    sI: () => s,
    we: () => p
}),
    n(953529),
    n(388685));
var r = n(570140),
    i = n(749210),
    l = n(228643);
function s(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function a() {
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
function f(e, t, n) {
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
async function x(e, t, n, s, a) {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        for (null != n && n.length > 0 && (await i.Z.batchRoleUpdate(e, n)); null != t && t.length > 0; ) {
            let n = t.pop();
            null != n &&
                '' !== n.name &&
                (await i.Z.updateRole(e, n.id, {
                    name: n.name,
                    description: n.description,
                    permissions: n.permissions,
                    color: n.color,
                    colors: n.colors,
                    hoist: n.hoist,
                    mentionable: n.mentionable,
                    icon: n.icon,
                    unicodeEmoji: n.unicodeEmoji
                }));
        }
        if (null != a && null != s)
            for await (let t of s) {
                let n = a.get(t);
                await (0, l.L_)(e, t, null != n ? n : []);
            }
        r.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
    } catch (e) {
        var o, c;
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null != (c = null == (o = e.body) ? void 0 : o.message) ? c : Object.values(e.body)[0]
        });
    }
}
