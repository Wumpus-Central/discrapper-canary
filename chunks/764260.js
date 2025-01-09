n.d(t, {
    Gf: function () {
        return x;
    },
    OW: function () {
        return u;
    },
    S1: function () {
        return a;
    },
    TY: function () {
        return c;
    },
    Uv: function () {
        return d;
    },
    _l: function () {
        return h;
    },
    d_: function () {
        return g;
    },
    lO: function () {
        return o;
    },
    sI: function () {
        return s;
    },
    we: function () {
        return m;
    }
}),
    n(47120);
var i = n(570140),
    r = n(749210),
    l = n(228643);
function s(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function a() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_INIT' });
}
function o(e, t, n) {
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
function u(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_COLOR',
        id: e,
        color: t
    });
}
function m(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
        id: e,
        hoist: t,
        mentionable: n
    });
}
function h(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
        id: e,
        icon: t,
        unicodeEmoji: n
    });
}
function g(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
        roleId: e,
        roleConnectionConfigurations: t
    });
}
async function x(e, t, n, s, a) {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        let i = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || '' === n.name) return i();
            await r.Z.updateRole(e, n.id, {
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
        if ((null != n && n.length > 0 ? await r.Z.batchRoleUpdate(e, n).then(i, i) : await i(), null != a && null != s))
            for await (let t of s) {
                let n = a.get(t);
                await (0, l.L_)(e, t, null != n ? n : []);
            }
    } catch (e) {
        var o, c;
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null !== (c = null === (o = e.body) || void 0 === o ? void 0 : o.message) && void 0 !== c ? c : Object.values(e.body)[0]
        });
        return;
    }
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
}
