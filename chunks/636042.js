_.d(i, {
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
var S = _(228366),
    E = _(66834),
    o = _(619006),
    e = _(625494),
    n = _(652215);
function c(t) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles: t });
}
function T() {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
}
function I(t, i, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id: t, flag: i, allow: _ });
}
function p(t) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id: t });
}
function a(t, i) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id: t, name: i });
}
function h(t, i) {
    t.color !== i &&
        (i !== n.TGz || 0 !== t.color) &&
        S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: t.id, color: i === n.TGz ? 0 : i });
}
function s(t, i, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: t, colors: i, currentStyle: _ });
}
function L(t, i) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: t, currentStyle: i });
}
function d(t, i, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id: t, hoist: i, mentionable: _ });
}
function G(t, i, _) {
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id: t, icon: i, unicodeEmoji: _ });
}
function O(t, i) {
    S.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: t,
        roleConnectionConfigurations: i,
    });
}
async function N(t, i, _, c, T) {
    let I = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
    try {
        for (let S of (null != _ && _.length > 0 && (await E.A.batchRoleUpdate(t, _)),
        null != i ? [...i].sort((t, i) => Number("" !== t.name.trim()) - Number("" !== i.name.trim())) : []))
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
            for await (let i of c) {
                let _ = T.get(i);
                await (0, o.qK)(t, i, _ ?? []);
            }
        S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
    } catch (t) {
        if (
            (S.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: t.body?.message ?? Object.values(t.body)[0]?.[0],
            }),
            e._.dispatch(n.jej.EMPHASIZE_NOTICE),
            I.throwErr)
        )
            throw t;
    }
}
