n.d(t, { i: () => l });
var i = n(544891),
    r = n(570140),
    a = n(973616),
    s = n(598077),
    o = n(981631);
async function l(e) {
    let t = (
        await i.tn.get({
            url: o.ANM.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map((e) => ({
        ...e,
        application: 'application' in e && null != e.application ? a.ZN.createFromServer(e.application) : void 0,
        user: 'user' in e && null != e.user ? new s.Z(e.user) : void 0
    }));
    return (
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_LOADED_INTEGRATIONS',
            guildId: e,
            integrations: t
        }),
        t
    );
}
