var S = _(73153),
    E = _(778858),
    o = _(619006),
    e = _(188567),
    n = _(652215);
_.d(
    i,
    {},
    {
        C5: function (t, i) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: t, currentStyle: i });
        },
        E9: function (t, i, _) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id: t, hoist: i, mentionable: _ });
        },
        JY: async function (t, i, _, c, T) {
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
        },
        Ts: function () {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
        },
        Ul: function (t, i, _) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id: t, flag: i, allow: _ });
        },
        Y_: function (t) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id: t });
        },
        ZH: function (t, i) {
            t.color !== i &&
                (i !== n.TGz || 0 !== t.color) &&
                S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: t.id, color: i === n.TGz ? 0 : i });
        },
        n3: function (t, i, _) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id: t, icon: i, unicodeEmoji: _ });
        },
        nK: function (t, i) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id: t, name: i });
        },
        pn: function (t, i) {
            S.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                roleId: t,
                roleConnectionConfigurations: i,
            });
        },
        uc: function (t, i, _) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: t, colors: i, currentStyle: _ });
        },
        yy: function (t) {
            S.h.dispatch({ type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles: t });
        },
    },
);
