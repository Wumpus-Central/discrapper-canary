var i = n(435558),
    T = n.n(i),
    I = n(620632),
    r = n(73153),
    N = n(721768),
    l = n(392054),
    E = n(168186),
    S = n(200662),
    _ = n(652215);
async function a(e) {
    let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: i,
            defaultEverywhereValue: T,
            guildId: I,
            permissions: l,
        } = e,
        S =
            n === t
                ? (function (e, t, n, i) {
                      if (!n || !i) return t;
                      let T = { [e]: n, [(0, E.Ap)(e)]: i };
                      return t.filter((e) => {
                          if (!(e.id in T)) return !0;
                          let t = T[e.id];
                          return e.permission !== t;
                      });
                  })(I, l, i, T)
                : l,
        _ = await N.yL(t, I, n, S);
    r.h.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
        applicationId: t,
        commandId: n,
        guildId: I,
        permissions: _.body.permissions,
    });
}
n.d(
    t,
    {},
    {
        AL: function () {
            r.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
        },
        B3: function (e) {
            let {
                    applicationId: t,
                    command: n,
                    editedPermissions: i,
                    guildId: I,
                    originalApplicationPermissions: r,
                } = e,
                N = T().difference(Object.keys(n.permissions ?? {}), Object.keys(i)),
                _ = T().omit({ ...i }, N),
                o = (0, S.Eu)(I, l.RA.ROLE),
                u = (0, S.Eu)((0, E.Ap)(I), l.RA.CHANNEL);
            return a({
                defaultEveryoneValue: r[o]?.permission ?? !0,
                defaultEverywhereValue: r[u]?.permission ?? !0,
                applicationId: t,
                commandId: n.id,
                guildId: I,
                permissions: Object.values(_).map((e) => ({ id: e.id, permission: e.permission, type: e.type })),
            });
        },
        C8: function (e) {
            r.h.dispatch({ commandId: e, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" });
        },
        G$: function (e, t, n) {
            return a({
                applicationId: e,
                commandId: e,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: t,
                permissions: n,
            });
        },
        Jw: function (e, t) {
            I.Bo.get({ url: _.Rsh.GUILD_COMMANDS_FOR_APPLICATION(e, t), rejectWithError: !0 }).then(
                (n) => {
                    r.h.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions,
                    });
                },
                () => {
                    r.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE", applicationId: t });
                },
            );
        },
        T0: function (e, t, n) {
            r.h.dispatch({
                applicationId: e,
                commandId: t,
                permissions: n,
                type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
            });
        },
        gV: async function (e, t, n) {
            let i = [];
            try {
                i = (
                    await I.Bo.get({
                        url: _.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
                        rejectWithError: (0, I.fT)(),
                    })
                ).body.permissions;
            } catch (i) {
                if (404 !== i.status)
                    return void r.h.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                        applicationId: e,
                        commandId: n,
                        guildId: t,
                    });
            }
            r.h.dispatch({
                type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                applicationId: e,
                commandId: n,
                guildId: t,
                permissions: i,
            });
        },
        hu: function (e) {
            r.h.dispatch({ applicationId: e, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" });
        },
    },
);
