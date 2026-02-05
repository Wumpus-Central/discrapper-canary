n.d(t, { D4: () => o, LD: () => u, pS: () => c });
var i = n(417597),
    l = n(600975),
    s = n(71393),
    a = n(735547),
    r = n(652215);
let o = a.Ay.INVITE_OPTIONS_7_DAYS.value,
    d = (0, l.C)({
        kind: "guild",
        id: "2025-08_default_invite_expiration_guild",
        label: "Default Invite Expiration Guild",
        defaultConfig: { defaultMaxAge: 604800 },
        treatments: [
            { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
            { id: 2, label: "30 days", config: { defaultMaxAge: 2592e3 } },
            { id: 3, label: "60 days", config: { defaultMaxAge: 5184e3 } },
        ],
    });
function u(e) {
    let { guildId: t, location: n } = e,
        l = d.useExperiment({ guildId: t ?? r.dJq, location: n }),
        u = (0, i.bG)([s.A], () => s.A.getGuild(t));
    return null == t
        ? null
        : (function (e) {
              let { guild: t, experimentConfig: n } = e;
              if (t?.features.has(r.GuildFeatures.HUB)) return a.Ay.INVITE_OPTIONS_FOREVER.value;
              let { defaultMaxAge: i } =
                  n ?? d.getCurrentConfig({ guildId: t?.id ?? r.dJq, location: "getDefaultInviteExpiration" });
              return i ?? o;
          })({ guild: u, experimentConfig: l });
}
function c(e) {
    let { guildId: t, location: n } = e,
        i = d.useExperiment({ guildId: t ?? r.dJq, location: n });
    return a.Ay.getMaxAgeOptions({ includeExperimentalValues: [i?.defaultMaxAge] });
}
