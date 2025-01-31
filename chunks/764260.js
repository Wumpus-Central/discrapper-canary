n.d(t, {
    Gf: () => f,
    OW: () => _,
    S1: () => o,
    TY: () => c,
    Uv: () => d,
    _l: () => p,
    d_: () => m,
    lO: () => r,
    sI: () => l,
    we: () => u
}),
    n(47120);
var i = n(570140),
    a = n(749210),
    s = n(228643);
function l(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function o() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_INIT' });
}
function r(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS',
        id: e,
        flag: t,
        allow: n
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS',
        id: e
    });
}
function d(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_NAME',
        id: e,
        name: t
    });
}
function _(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_COLOR',
        id: e,
        color: t
    });
}
function u(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
        id: e,
        hoist: t,
        mentionable: n
    });
}
function p(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
        id: e,
        icon: t,
        unicodeEmoji: n
    });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
        roleId: e,
        roleConnectionConfigurations: t
    });
}
async function f(e, t, n, l, o) {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        let i = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || '' === n.name) return i();
            await a.Z.updateRole(e, n.id, {
                name: n.name,
                description: n.description,
                permissions: n.permissions,
                color: n.color,
                hoist: n.hoist,
                mentionable: n.mentionable,
                icon: n.icon,
                unicodeEmoji: n.unicodeEmoji
            }).then(i, i);
        };
        if ((null != n && n.length > 0 ? await a.Z.batchRoleUpdate(e, n).then(i, i) : await i(), null != o && null != l))
            for await (let t of l) {
                let n = o.get(t);
                await (0, s.L_)(e, t, null != n ? n : []);
            }
    } catch (e) {
        var r, c;
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null !== (c = null === (r = e.body) || void 0 === r ? void 0 : r.message) && void 0 !== c ? c : Object.values(e.body)[0]
        });
        return;
    }
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
}
