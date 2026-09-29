n.d(t, { p: () => u });
var i = n(485845),
    r = n(179771),
    l = n(136722),
    o = n(803306);
let s = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
function u(e) {
    let { applicationId: t, application: n, guildId: r } = e,
        u = n?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
        clientId: t,
        guildId: r,
        disableGuildSelect: !0,
        integrationType: i.b.GUILD_INSTALL,
        scopes: u?.scopes ?? s,
        permissions: u?.permissions != null ? l.iu(u.permissions) : void 0,
        callback: () => ((0, o.eO)(t, { withMutualGuilds: !0 }), !0),
    };
}
