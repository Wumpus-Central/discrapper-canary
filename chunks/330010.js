r.d(n, {
    i: function () {
        return u;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(973616),
    s = r(598077),
    l = r(981631);
async function u(e) {
    let n = (
        await i.tn.get({
            url: l.ANM.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map((e) => ({
        ...e,
        application: 'application' in e && null != e.application ? o.ZN.createFromServer(e.application) : void 0,
        user: 'user' in e && null != e.user ? new s.Z(e.user) : void 0
    }));
    return (
        a.Z.dispatch({
            type: 'GUILD_SETTINGS_LOADED_INTEGRATIONS',
            guildId: e,
            integrations: n
        }),
        n
    );
}
