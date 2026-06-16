n.d(t, { AL: () => E, C8: () => o, Jw: () => S, Ni: () => u, T0: () => r, gV: () => _, hu: () => a });
var T = n(636537),
    I = n(228366),
    i = n(721768),
    N = n(168186),
    l = n(652215);
function E() {
    I.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
}
function r(e, t, n) {
    I.h.dispatch({ applicationId: e, commandId: t, permissions: n, type: "INTEGRATION_PERMISSION_SETTINGS_EDIT" });
}
function S(e, t) {
    T.Bo.get({ url: l.Rsh.GUILD_COMMANDS_FOR_APPLICATION(e, t), rejectWithError: !0 }).then(
        (n) => {
            I.h.dispatch({
                type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                applicationId: t,
                commands: n.body.application_commands,
                guildId: e,
                permissions: n.body.permissions,
            });
        },
        () => {
            I.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE", applicationId: t });
        },
    );
}
async function _(e, t, n) {
    let i = [];
    try {
        let I = await T.Bo.get({ url: l.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n), rejectWithError: !1 });
        I.ok && (i = I.body.permissions);
    } catch (T) {
        if (404 !== T.status)
            return void I.h.dispatch({
                type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                applicationId: e,
                commandId: n,
                guildId: t,
            });
    }
    I.h.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
        applicationId: e,
        commandId: n,
        guildId: t,
        permissions: i,
    });
}
function a(e) {
    I.h.dispatch({ applicationId: e, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" });
}
function o(e) {
    I.h.dispatch({ commandId: e, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" });
}
async function u(e) {
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
                      let I = { [e]: n, [(0, N.Ap)(e)]: T };
                      return t.filter((e) => {
                          let t = I[e.id];
                          return null == t || e.permission !== t;
                      });
                  })(E, r, T, l)
                : r,
        _ = await i.yL(t, E, n, S);
    _.ok &&
        I.h.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: E,
            permissions: _.body.permissions,
        });
}
