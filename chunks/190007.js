n.d(t, {
    HE: () => u,
    HZ: () => m,
    Pk: () => f,
    e$: () => h,
    l_: () => p,
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
function m(e, t) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE",
        index: e,
        updates: t,
    });
}
function p(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER",
        connections: e,
    });
}
function f() {
    r.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET" });
}
async function h(e) {
    var t, n, u;
    let g = s.Z.getEditedConnections(),
        m = [];
    if (
        (g.forEach((e) => {
            let t = (0, c.t9)(e);
            m.push(...t);
        }),
        m.length > 0)
    )
        throw (
            (b(m),
            i.Z.show({
                title: d.intl.string(d.t.ISppXw),
                body: m.join("\n"),
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
            (b([n]),
            i.Z.show({
                title: d.intl.string(d.t.iLdiqY),
                body: n,
            }),
            r)
        );
    }
}
function b(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED",
        errors: e,
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || s.Z.hasChanges() ? h(e) : Promise.resolve();
}
