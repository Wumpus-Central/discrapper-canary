n.d(t, {
    Gf: () => N,
    OW: () => u,
    S1: () => r,
    TY: () => c,
    Uv: () => d,
    _l: () => p,
    d_: () => f,
    lO: () => l,
    sI: () => s,
    we: () => _
}),
    n(266796),
    n(47120);
var a = n(570140),
    i = n(749210),
    o = n(228643);
function s(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function r() {
    a.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_INIT' });
}
function l(e, t, n) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS',
        id: e,
        flag: t,
        allow: n
    });
}
function c(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS',
        id: e
    });
}
function d(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_NAME',
        id: e,
        name: t
    });
}
function u(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_COLOR',
        id: e,
        color: t
    });
}
function _(e, t, n) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
        id: e,
        hoist: t,
        mentionable: n
    });
}
function p(e, t, n) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
        id: e,
        icon: t,
        unicodeEmoji: n
    });
}
function f(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
        roleId: e,
        roleConnectionConfigurations: t
    });
}
async function N(e, t, n, s, r) {
    a.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        let a = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || '' === n.name) return a();
            await i.Z.updateRole(e, n.id, {
                name: n.name,
                description: n.description,
                permissions: n.permissions,
                color: n.color,
                hoist: n.hoist,
                mentionable: n.mentionable,
                icon: n.icon,
                unicodeEmoji: n.unicodeEmoji
            }).then(a, a);
        };
        if ((null != n && n.length > 0 ? await i.Z.batchRoleUpdate(e, n).then(a, a) : await a(), null != r && null != s))
            for await (let t of s) {
                let n = r.get(t);
                await (0, o.L_)(e, t, null != n ? n : []);
            }
    } catch (e) {
        var l, c;
        a.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null != (c = null == (l = e.body) ? void 0 : l.message) ? c : Object.values(e.body)[0]
        });
        return;
    }
    a.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
}
