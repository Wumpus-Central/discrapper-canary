var T = n(620632),
    i = n(73153),
    I = n(721768),
    N = n(168186),
    l = n(652215);
n.d(
    t,
    {},
    {
        AL: function () {
            i.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
        },
        C8: function (e) {
            i.h.dispatch({ commandId: e, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" });
        },
        Jw: function (e, t) {
            T.Bo.get({ url: l.Rsh.GUILD_COMMANDS_FOR_APPLICATION(e, t), rejectWithError: !0 }).then(
                (n) => {
                    i.h.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions,
                    });
                },
                () => {
                    i.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE", applicationId: t });
                },
            );
        },
        Ni: async function (e) {
            let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: T,
                    defaultEverywhereValue: l,
                    guildId: E,
                    permissions: r,
                } = e,
                S =
                    n === t
                        ? (function (e, t, n, T) {
                              if (!n || !T) return t;
                              let i = { [e]: n, [(0, N.Ap)(e)]: T };
                              return t.filter((e) => {
                                  if (!(e.id in i)) return !0;
                                  let t = i[e.id];
                                  return e.permission !== t;
                              });
                          })(E, r, T, l)
                        : r,
                _ = await I.yL(t, E, n, S);
            i.h.dispatch({
                type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                applicationId: t,
                commandId: n,
                guildId: E,
                permissions: _.body.permissions,
            });
        },
        T0: function (e, t, n) {
            i.h.dispatch({
                applicationId: e,
                commandId: t,
                permissions: n,
                type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
            });
        },
        gV: async function (e, t, n) {
            let I = [];
            try {
                I = (
                    await T.Bo.get({
                        url: l.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
                        rejectWithError: (0, T.fT)(),
                    })
                ).body.permissions;
            } catch (T) {
                if (404 !== T.status)
                    return void i.h.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                        applicationId: e,
                        commandId: n,
                        guildId: t,
                    });
            }
            i.h.dispatch({
                type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                applicationId: e,
                commandId: n,
                guildId: t,
                permissions: I,
            });
        },
        hu: function (e) {
            i.h.dispatch({ applicationId: e, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" });
        },
    },
);
