n.d(t, {
    D4: () => o,
    LD: () => d,
    pS: () => c,
});
var l = n(417597),
    i = n(600975),
    s = n(71393),
    r = n(735547),
    a = n(652215);
let o = r.Ay.INVITE_OPTIONS_7_DAYS.value,
    u = (0, i.C)({
        kind: "guild",
        id: "2025-08_default_invite_expiration_guild",
        label: "Default Invite Expiration Guild",
        defaultConfig: { defaultMaxAge: 604800 },
        treatments: [
            {
                id: 1,
                label: "14 days",
                config: { defaultMaxAge: 1209600 },
            },
            {
                id: 2,
                label: "30 days",
                config: { defaultMaxAge: 2592000 },
            },
            {
                id: 3,
                label: "60 days",
                config: { defaultMaxAge: 5184000 },
            },
        ],
    });
function d(e) {
    let { guildId: t, location: n } = e,
        i = u.useExperiment({
            guildId: null != t ? t : a.dJq,
            location: n,
        }),
        d = (0, l.bG)([s.A], () => s.A.getGuild(t));
    return null == t
        ? null
        : (function (e) {
              var t;
              let { guild: n, experimentConfig: l } = e;
              if (null == n ? void 0 : n.features.has(a.GuildFeatures.HUB)) return r.Ay.INVITE_OPTIONS_FOREVER.value;
              let { defaultMaxAge: i } =
                  null != l
                      ? l
                      : u.getCurrentConfig({
                            guildId: null != (t = null == n ? void 0 : n.id) ? t : a.dJq,
                            location: "getDefaultInviteExpiration",
                        });
              return null != i ? i : o;
          })({
              guild: d,
              experimentConfig: i,
          });
}
function c(e) {
    let { guildId: t, location: n } = e,
        l = u.useExperiment({
            guildId: null != t ? t : a.dJq,
            location: n,
        });
    return r.Ay.getMaxAgeOptions({ includeExperimentalValues: [null == l ? void 0 : l.defaultMaxAge] });
}
