n.d(t, { i: () => o });
var i = n(485845),
    r = n(179771),
    a = n(136722),
    s = n(803306);
let l = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
function o(e) {
    let { applicationId: t, application: n, guildId: r } = e,
        o = n?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
        clientId: t,
        guildId: r,
        disableGuildSelect: !0,
        integrationType: i.b.GUILD_INSTALL,
        scopes: o?.scopes ?? l,
        permissions: o?.permissions != null ? a.iu(o.permissions) : void 0,
        callback: () => ((0, s.eO)(t, { withMutualGuilds: !0 }), !0),
    };
}
