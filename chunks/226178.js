n.d(t, { i: () => u });
var i = n(485845),
    r = n(179771),
    l = n(136722),
    a = n(803306);
let o = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
function u(e) {
    let { applicationId: t, application: n, guildId: r } = e,
        u = n?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
        clientId: t,
        guildId: r,
        disableGuildSelect: !0,
        integrationType: i.b.GUILD_INSTALL,
        scopes: u?.scopes ?? o,
        permissions: u?.permissions != null ? l.iu(u.permissions) : void 0,
        callback: () => ((0, a.eO)(t, { withMutualGuilds: !0 }), !0),
    };
}
