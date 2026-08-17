"use strict";
n.d(t, { A: () => u });
var i = n(485845),
    r = n(179771),
    a = n(136722),
    s = n(531685),
    l = n(479975),
    o = n(280218),
    d = n(171936);
let c = [r.F.BOT, r.F.APPLICATIONS_COMMANDS],
    u = {
        openVibegrationsAppInstallModal: async function e(e) {
            let { applicationId: t, application: r, guildId: s, onClose: l } = e,
                o = r?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? r?.installParams,
                [{ openOAuth2Modal: d }, { fetchProfile: u }] = await Promise.all([
                    Promise.resolve().then(n.bind(n, 887909)),
                    Promise.resolve().then(n.bind(n, 803306)),
                ]);
            d(
                {
                    clientId: t,
                    guildId: s,
                    disableGuildSelect: !0,
                    integrationType: i.b.GUILD_INSTALL,
                    scopes: o?.scopes ?? c,
                    permissions: o?.permissions != null ? a.iu(o.permissions) : void 0,
                    callback: () => !0,
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
        relayPreviewCapture: async function (e, t, n) {
            if (!0 === n) return (0, d.EA)(e) ? "accepted" : "unavailable";
            let i = await (0, d.ZW)(e, 6e3);
            return null == i ? "unavailable" : (0, o.xl)(i, t);
        },
    };
