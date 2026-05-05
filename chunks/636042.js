i.d(_, {
    C5: () => L,
    E9: () => d,
    JY: () => N,
    Ts: () => T,
    Ul: () => I,
    Y_: () => p,
    ZH: () => h,
    n3: () => G,
    nK: () => a,
    pn: () => O,
    uc: () => s,
    yy: () => c,
});
var S = i(228366),
    E = i(66834),
    e = i(619006),
    n = i(625494),
    o = i(652215);
function c(t) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles: t });
}
function T() {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
}
function I(t, _, i) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id: t, flag: _, allow: i });
}
function p(t) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id: t });
}
function a(t, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id: t, name: _ });
}
function h(t, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: t, color: _ });
}
function s(t, _, i) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: t, colors: _, currentStyle: i });
}
function L(t, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: t, currentStyle: _ });
}
function d(t, _, i) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id: t, hoist: _, mentionable: i });
}
function G(t, _, i) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id: t, icon: _, unicodeEmoji: i });
}
function O(t, _) {
    S.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: t,
        roleConnectionConfigurations: _,
    });
}
async function N(t, _, i, c, T) {
    let I = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
    try {
        for (let S of (null != i && i.length > 0 && (await E.A.batchRoleUpdate(t, i)),
        null != _ ? [..._].sort((t, _) => Number("" !== t.name.trim()) - Number("" !== _.name.trim())) : []))
            await E.A.updateRole(t, S.id, {
                name: S.name,
                description: S.description ?? void 0,
                permissions: S.permissions,
                color: S.color,
                colors: S.colors ?? void 0,
                hoist: S.hoist,
                mentionable: S.mentionable,
                icon: S.icon,
                unicodeEmoji: S.unicodeEmoji,
            });
        if (null != T && null != c)
            for await (let _ of c) {
                let i = T.get(_);
                await (0, e.qK)(t, _, i ?? []);
            }
        S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
    } catch (t) {
        if (
            (S.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: t.body?.message ?? Object.values(t.body)[0]?.[0],
            }),
            n._.dispatch(o.jej.EMPHASIZE_NOTICE),
            I.throwErr)
        )
            throw t;
    }
}
