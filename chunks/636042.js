S.d(_, {
    C5: () => a,
    E9: () => s,
    JY: () => G,
    Ts: () => o,
    Ul: () => c,
    Y_: () => T,
    ZH: () => h,
    n3: () => L,
    nK: () => p,
    pn: () => d,
    uc: () => I,
    yy: () => e,
});
var i = S(228366),
    E = S(66834),
    n = S(619006);
function e(t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles: t });
}
function o() {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
}
function c(t, _, S) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id: t, flag: _, allow: S });
}
function T(t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id: t });
}
function p(t, _) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id: t, name: _ });
}
function h(t, _) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: t, color: _ });
}
function I(t, _, S) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: t, colors: _, currentStyle: S });
}
function a(t, _) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: t, currentStyle: _ });
}
function s(t, _, S) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id: t, hoist: _, mentionable: S });
}
function L(t, _, S) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id: t, icon: _, unicodeEmoji: S });
}
function d(t, _) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: t,
        roleConnectionConfigurations: _,
    });
}
async function G(t, _, S, e, o) {
    let c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
    try {
        for (null != S && S.length > 0 && (await E.A.batchRoleUpdate(t, S)); null != _ && _.length > 0; ) {
            let S = _.pop();
            null != S &&
                "" !== S.name &&
                (await E.A.updateRole(t, S.id, {
                    name: S.name,
                    description: S.description ?? void 0,
                    permissions: S.permissions,
                    color: S.color,
                    colors: S.colors ?? void 0,
                    hoist: S.hoist,
                    mentionable: S.mentionable,
                    icon: S.icon,
                    unicodeEmoji: S.unicodeEmoji,
                }));
        }
        if (null != o && null != e)
            for await (let _ of e) {
                let S = o.get(_);
                await (0, n.qK)(t, _, S ?? []);
            }
        i.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
    } catch (t) {
        if (
            (i.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: t.body?.message ?? Object.values(t.body)[0],
            }),
            c.throwErr)
        )
            throw t;
    }
}
