n.d(t, { p: () => o });
var i = n(485845),
    r = n(179771),
    l = n(136722),
    a = n(803306);
let s = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
function o(e) {
    let { applicationId: t, application: n, guildId: r } = e,
        o = n?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
        clientId: t,
        guildId: r,
        disableGuildSelect: !0,
        integrationType: i.b.GUILD_INSTALL,
        scopes: o?.scopes ?? s,
        permissions: o?.permissions != null ? l.iu(o.permissions) : void 0,
        callback: () => ((0, a.eO)(t, { withMutualGuilds: !0 }), !0),
    };
}
