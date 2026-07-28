"use strict";
n.d(t, { A: () => d });
var i = n(485845),
    r = n(179771),
    a = n(136722),
    s = n(531685),
    l = n(479975);
let o = [r.F.BOT, r.F.APPLICATIONS_COMMANDS],
    d = {
        openVibegrationsAppInstallModal: async function e(e) {
            let { applicationId: t, application: r, guildId: s, onClose: l } = e,
                d = r?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? r?.installParams,
                [{ openOAuth2Modal: c }, { fetchProfile: u }] = await Promise.all([
                    Promise.resolve().then(n.bind(n, 887909)),
                    Promise.resolve().then(n.bind(n, 803306)),
                ]);
            c(
                {
                    clientId: t,
                    guildId: s,
                    disableGuildSelect: !0,
                    integrationType: i.b.GUILD_INSTALL,
                    scopes: d?.scopes ?? o,
                    permissions: d?.permissions != null ? a.iu(d.permissions) : void 0,
                },
                () => {
                    l?.(), u(t, { withMutualGuilds: !0 });
                },
            );
        },
        isWindowFocused: function () {
            return s.A.isFocused();
        },
        createNotificationDeepLink: function (e) {
            return (0, l.I)(e);
        },
    };
