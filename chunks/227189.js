n.d(t, { p: () => u });
var r = n(485845),
    i = n(179771),
    l = n(136722),
    o = n(803306);
let s = [i.F.BOT, i.F.APPLICATIONS_COMMANDS];
function u(e) {
    let { applicationId: t, application: n, guildId: i } = e,
        u = n?.integrationTypesConfig?.[r.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
        clientId: t,
        guildId: i,
        disableGuildSelect: !0,
        integrationType: r.b.GUILD_INSTALL,
        scopes: u?.scopes ?? s,
        permissions: u?.permissions != null ? l.iu(u.permissions) : void 0,
        callback: () => ((0, o.eO)(t, { withMutualGuilds: !0 }), !0),
    };
}
