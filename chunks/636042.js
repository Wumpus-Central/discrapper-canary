n.d(t, {
    C5: () => g,
    E9: () => h,
    JY: () => p,
    Ts: () => a,
    Ul: () => o,
    Y_: () => d,
    ZH: () => u,
    n3: () => x,
    nK: () => c,
    pn: () => _,
    uc: () => m,
    yy: () => r,
});
var i = n(73153),
    l = n(686956),
    s = n(619006);
function r(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles: e });
}
function a() {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
}
function o(e, t, n) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id: e, flag: t, allow: n });
}
function d(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id: e });
}
function c(e, t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id: e, name: t });
}
function u(e, t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: e, color: t });
}
function m(e, t, n) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: e, colors: t, currentStyle: n });
}
function g(e, t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: e, currentStyle: t });
}
function h(e, t, n) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id: e, hoist: t, mentionable: n });
}
function x(e, t, n) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id: e, icon: t, unicodeEmoji: n });
}
function _(e, t) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: e,
        roleConnectionConfigurations: t,
    });
}
async function p(e, t, n, r, a) {
    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
    try {
        for (null != n && n.length > 0 && (await l.A.batchRoleUpdate(e, n)); null != t && t.length > 0; ) {
            let n = t.pop();
            null != n &&
                "" !== n.name &&
                (await l.A.updateRole(e, n.id, {
                    name: n.name,
                    description: n.description ?? void 0,
                    permissions: n.permissions,
                    color: n.color,
                    colors: n.colors ?? void 0,
                    hoist: n.hoist,
                    mentionable: n.mentionable,
                    icon: n.icon,
                    unicodeEmoji: n.unicodeEmoji,
                }));
        }
        if (null != a && null != r)
            for await (let t of r) {
                let n = a.get(t);
                await (0, s.qK)(e, t, n ?? []);
            }
        i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
    } catch (e) {
        if (
            (i.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: e.body?.message ?? Object.values(e.body)[0],
            }),
            o.throwErr)
        )
            throw e;
    }
}
