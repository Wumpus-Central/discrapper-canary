n.d(t, {
    C5: () => g,
    E9: () => b,
    JY: () => x,
    Ts: () => a,
    Ul: () => c,
    Y_: () => o,
    ZH: () => u,
    n3: () => m,
    nK: () => d,
    pn: () => p,
    uc: () => f,
    yy: () => s,
}),
    n(228524),
    n(896048);
var r = n(73153),
    i = n(686956),
    l = n(619006);

function s(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
        roles: e,
    });
}

function a() {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_INIT",
    });
}

function c(e, t, n) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
        id: e,
        flag: t,
        allow: n,
    });
}

function o(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
        id: e,
    });
}

function d(e, t) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
        id: e,
        name: t,
    });
}

function u(e, t) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
        id: e,
        color: t,
    });
}

function f(e, t, n) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
        id: e,
        colors: t,
        currentStyle: n,
    });
}

function g(e, t) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
        id: e,
        currentStyle: t,
    });
}

function b(e, t, n) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
        id: e,
        hoist: t,
        mentionable: n,
    });
}

function m(e, t, n) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
        id: e,
        icon: t,
        unicodeEmoji: n,
    });
}

function p(e, t) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: e,
        roleConnectionConfigurations: t,
    });
}
async function x(e, t, n, s, a) {
    var c, o, d, u;
    let f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    r.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SUBMITTING",
    });
    try {
        for (null != n && n.length > 0 && (await i.A.batchRoleUpdate(e, n)); null != t && t.length > 0; ) {
            let n = t.pop();
            null != n &&
                "" !== n.name &&
                (await i.A.updateRole(e, n.id, {
                    name: n.name,
                    description: null != (c = n.description) ? c : void 0,
                    permissions: n.permissions,
                    color: n.color,
                    colors: null != (o = n.colors) ? o : void 0,
                    hoist: n.hoist,
                    mentionable: n.mentionable,
                    icon: n.icon,
                    unicodeEmoji: n.unicodeEmoji,
                }));
        }
        if (null != a && null != s)
            for await (let t of s) {
                let n = a.get(t);
                await (0, l.qK)(e, t, null != n ? n : []);
            }
        r.h.dispatch({
            type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS",
        });
    } catch (e) {
        if (
            (r.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: null != (d = null == (u = e.body) ? void 0 : u.message) ? d : Object.values(e.body)[0],
            }),
            f.throwErr)
        )
            throw e;
    }
}
