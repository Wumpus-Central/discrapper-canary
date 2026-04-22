n.d(t, { AL: () => E, C8: () => u, Jw: () => a, Ni: () => c, T0: () => o, gV: () => s, hu: () => N });
var i = n(562465),
    r = n(73153),
    l = n(721768),
    T = n(168186),
    I = n(652215);
function E() {
    r.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
}
function o(e, t, n) {
    r.h.dispatch({ applicationId: e, commandId: t, permissions: n, type: "INTEGRATION_PERMISSION_SETTINGS_EDIT" });
}
function a(e, t) {
    i.Bo.get({ url: I.Rsh.GUILD_COMMANDS_FOR_APPLICATION(e, t), rejectWithError: !0 }).then(
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
}
async function s(e, t, n) {
    let l = [];
    try {
        let r = await i.Bo.get({ url: I.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n), rejectWithError: !1 });
        r.ok && (l = r.body.permissions);
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
        permissions: l,
    });
}
function N(e) {
    r.h.dispatch({ applicationId: e, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" });
}
function u(e) {
    r.h.dispatch({ commandId: e, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" });
}
async function c(e) {
    let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: i,
            defaultEverywhereValue: I,
            guildId: E,
            permissions: o,
        } = e,
        a =
            n === t
                ? (function (e, t, n, i) {
                      if (!n || !i) return t;
                      let r = { [e]: n, [(0, T.Ap)(e)]: i };
                      return t.filter((e) => {
                          let t = r[e.id];
                          return null == t || e.permission !== t;
                      });
                  })(E, o, i, I)
                : o,
        s = await l.yL(t, E, n, a);
    s.ok &&
        r.h.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: E,
            permissions: s.body.permissions,
        });
}
