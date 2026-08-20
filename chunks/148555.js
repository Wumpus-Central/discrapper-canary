"use strict";
n.d(t, { A: () => h });
var i = n(485845),
    r = n(179771),
    a = n(136722),
    s = n(264686),
    l = n(976860),
    o = n(803224),
    d = n(531685),
    c = n(479975),
    u = n(120426),
    _ = n(171936),
    E = n(652215);
let A = [r.F.BOT, r.F.APPLICATIONS_COMMANDS],
    h = {
        openVibegrationsAppInstallModal: async function e(e) {
            let { applicationId: t, application: r, guildId: s, onClose: l } = e,
                o = r?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? r?.installParams,
                [{ openOAuth2Modal: d }, { fetchProfile: c }] = await Promise.all([
                    Promise.resolve().then(n.bind(n, 887909)),
                    Promise.resolve().then(n.bind(n, 803306)),
                ]);
            d(
                {
                    clientId: t,
                    guildId: s,
                    disableGuildSelect: !0,
                    integrationType: i.b.GUILD_INSTALL,
                    scopes: o?.scopes ?? A,
                    permissions: o?.permissions != null ? a.iu(o.permissions) : void 0,
                    callback: () => !0,
                },
                () => {
                    l?.(), c(t, { withMutualGuilds: !0 });
                },
            );
        },
        isWindowFocused: function () {
            return d.A.isFocused();
        },
        areTurnNotificationsDisabled: function () {
            return o.A.getDesktopType() === E.nRU.NEVER;
        },
        presentTurnNotification: function (e) {
            let { projectId: t, title: i, body: r, route: a, sound: o, volume: d } = e;
            s.default.showNotification(
                n(608598),
                i,
                r,
                { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
                {
                    tag: `vibegrations-${t}`,
                    sound: o,
                    volume: d,
                    fallbackDeepLink: null == a ? void 0 : (0, c.I)(a),
                    onClick: null == a ? void 0 : () => (0, l.pX)(a),
                    isUserAvatar: !1,
                },
            );
        },
        relayPreviewCapture: async function (e, t, n) {
            if (!0 === n) return (0, _.EA)(e) ? "accepted" : "unavailable";
            let i = await (0, _.ZW)(e, 6e3);
            return null == i ? "unavailable" : (0, u.xl)(i, t);
        },
    };
