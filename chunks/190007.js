n.d(t, {
    HE: () => u,
    HZ: () => f,
    Pk: () => b,
    e$: () => p,
    l_: () => m,
    ss: () => x,
    xI: () => g,
}),
    n(539854),
    n(388685),
    n(415506);
var r = n(570140),
    i = n(668781),
    l = n(881052),
    a = n(823379),
    s = n(926958),
    o = n(570961),
    c = n(290511),
    d = n(388032);
function u(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD",
        connection: e,
    });
}
function g(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE",
        index: e,
    });
}
function f(e, t) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE",
        index: e,
        updates: t,
    });
}
function m(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER",
        connections: e,
    });
}
function b() {
    r.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET" });
}
async function p(e) {
    var t, n, u;
    let g = s.Z.getEditedConnections(),
        f = [];
    if (
        (g.forEach((e) => {
            let t = (0, c.t9)(e);
            f.push(...t);
        }),
        f.length > 0)
    )
        throw (
            (h(f),
            i.Z.show({
                title: d.intl.string(d.t.ISppXw),
                body: f.join("\n"),
            }),
            Error("failed to validate connections"))
        );
    r.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT" });
    try {
        await (0, o.n_)(e, { connections: g }),
            (t = e),
            (n = g),
            r.Z.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS",
                guildId: t,
                connections: n,
            });
    } catch (r) {
        let { fieldName: e, error: t } = null != (u = new l.Hx(r).getAnyErrorMessageAndField()) ? u : {},
            n = [e, t].filter(a.lm).join(": ");
        throw (
            (h([n]),
            i.Z.show({
                title: d.intl.string(d.t.iLdiqY),
                body: n,
            }),
            r)
        );
    }
}
function h(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED",
        errors: e,
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || s.Z.hasChanges() ? p(e) : Promise.resolve();
}
