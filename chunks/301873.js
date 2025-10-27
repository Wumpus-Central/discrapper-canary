n.d(t, {
    WV: () => c,
    xU: () => u,
    zv: () => o,
});
var i = n(399606),
    l = n(818083),
    s = n(430824),
    r = n(971130),
    a = n(981631);
let o = r.ZP.INVITE_OPTIONS_7_DAYS.value,
    d = (0, l.B)({
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
function u(e) {
    let { guildId: t, location: n } = e,
        l = d.useExperiment({
            guildId: null != t ? t : a.lds,
            location: n,
        }),
        u = (0, i.e7)([s.Z], () => s.Z.getGuild(t));
    return null == t
        ? null
        : (function (e) {
              var t;
              let { guild: n, experimentConfig: i } = e;
              if (null == n ? void 0 : n.features.has(a.GuildFeatures.HUB)) return r.ZP.INVITE_OPTIONS_FOREVER.value;
              let { defaultMaxAge: l } =
                  null != i
                      ? i
                      : d.getCurrentConfig({
                            guildId: null != (t = null == n ? void 0 : n.id) ? t : a.lds,
                            location: "getDefaultInviteExpiration",
                        });
              return null != l ? l : o;
          })({
              guild: u,
              experimentConfig: l,
          });
}
function c(e) {
    let { guildId: t, location: n } = e,
        i = d.useExperiment({
            guildId: null != t ? t : a.lds,
            location: n,
        });
    return r.ZP.getMaxAgeOptions({ includeExperimentalValues: [null == i ? void 0 : i.defaultMaxAge] });
}
