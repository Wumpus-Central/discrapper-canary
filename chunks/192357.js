n.d(t, { p: () => s });
var i = n(485845),
    r = n(179771),
    l = n(136722),
    a = n(803306);
let o = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
function s(e) {
    let { applicationId: t, application: n, guildId: r } = e,
        s = n?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
        clientId: t,
        guildId: r,
        disableGuildSelect: !0,
        integrationType: i.b.GUILD_INSTALL,
        scopes: s?.scopes ?? o,
        permissions: s?.permissions != null ? l.iu(s.permissions) : void 0,
        callback: () => ((0, a.eO)(t, { withMutualGuilds: !0 }), !0),
    };
}
