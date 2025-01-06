n.d(t, {
    Gf: function () {
        return I;
    },
    OW: function () {
        return u;
    },
    S1: function () {
        return r;
    },
    TY: function () {
        return c;
    },
    Uv: function () {
        return d;
    },
    _l: function () {
        return m;
    },
    d_: function () {
        return p;
    },
    lO: function () {
        return s;
    },
    sI: function () {
        return l;
    },
    we: function () {
        return _;
    }
}),
    n(47120);
var i = n(570140),
    o = n(749210),
    a = n(228643);
function l(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
        roles: e
    });
}
function r() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_INIT' });
}
function s(e, t, n) {
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
function _(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
        id: e,
        hoist: t,
        mentionable: n
    });
}
function m(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
        id: e,
        icon: t,
        unicodeEmoji: n
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
        roleId: e,
        roleConnectionConfigurations: t
    });
}
async function I(e, t, n, l, r) {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SUBMITTING' });
    try {
        let i = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || '' === n.name) return i();
            await o.Z.updateRole(e, n.id, {
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
        if ((null != n && n.length > 0 ? await o.Z.batchRoleUpdate(e, n).then(i, i) : await i(), null != r && null != l))
            for await (let t of l) {
                let n = r.get(t);
                await (0, a.L_)(e, t, null != n ? n : []);
            }
    } catch (e) {
        var s, c;
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
            message: null !== (c = null === (s = e.body) || void 0 === s ? void 0 : s.message) && void 0 !== c ? c : Object.values(e.body)[0]
        });
        return;
    }
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS' });
}
