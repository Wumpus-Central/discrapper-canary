"use strict";
n.d(t, { AL: () => l, C8: () => f, Jw: () => c, Ni: () => p, T0: () => u, gV: () => d, hu: () => _ });
var r = n(562465),
    i = n(73153),
    a = n(721768),
    s = n(168186),
    o = n(652215);
function l() {
    i.h.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
}
function u(e, t, n) {
    i.h.dispatch({ applicationId: e, commandId: t, permissions: n, type: "INTEGRATION_PERMISSION_SETTINGS_EDIT" });
}
function c(e, t) {
    r.Bo.get({ url: o.Rsh.GUILD_COMMANDS_FOR_APPLICATION(e, t), rejectWithError: !0 }).then(
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
}
async function d(e, t, n) {
    let a = [];
    try {
        let i = await r.Bo.get({ url: o.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n), rejectWithError: !1 });
        i.ok && (a = i.body.permissions);
    } catch (r) {
        if (404 !== r.status)
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
        permissions: a,
    });
}
function _(e) {
    i.h.dispatch({ applicationId: e, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" });
}
function f(e) {
    i.h.dispatch({ commandId: e, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" });
}
async function p(e) {
    let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: r,
            defaultEverywhereValue: s,
            guildId: o,
            permissions: l,
        } = e,
        u = n === t ? h(o, l, r, s) : l,
        c = await a.yL(t, o, n, u);
    c.ok &&
        i.h.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: o,
            permissions: c.body.permissions,
        });
}
function h(e, t, n, r) {
    if (!n || !r) return t;
    let i = { [e]: n, [(0, s.Ap)(e)]: r };
    return t.filter((e) => {
        let t = i[e.id];
        return null == t || e.permission !== t;
    });
}
