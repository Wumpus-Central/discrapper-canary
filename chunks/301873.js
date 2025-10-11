n.d(t, {
    WV: () => d,
    xU: () => c,
    zv: () => o,
});
var l = n(399606),
    i = n(818083),
    a = n(430824),
    r = n(971130),
    s = n(981631);
let o = r.ZP.INVITE_OPTIONS_7_DAYS.value,
    u = (0, i.B)({
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
function c(e) {
    let { guildId: t, location: n } = e,
        i = u.useExperiment({
            guildId: null != t ? t : s.lds,
            location: n,
        }),
        c = (0, l.e7)([a.Z], () => a.Z.getGuild(t));
    return null == t
        ? null
        : (function (e) {
              var t;
              let { guild: n, experimentConfig: l } = e;
              if (null == n ? void 0 : n.features.has(s.oNc.HUB)) return r.ZP.INVITE_OPTIONS_FOREVER.value;
              let { defaultMaxAge: i } =
                  null != l
                      ? l
                      : u.getCurrentConfig({
                            guildId: null != (t = null == n ? void 0 : n.id) ? t : s.lds,
                            location: "getDefaultInviteExpiration",
                        });
              return null != i ? i : o;
          })({
              guild: c,
              experimentConfig: i,
          });
}
function d(e) {
    let { guildId: t, location: n } = e,
        l = u.useExperiment({
            guildId: null != t ? t : s.lds,
            location: n,
        });
    return r.ZP.getMaxAgeOptions({ includeExperimentalValues: [null == l ? void 0 : l.defaultMaxAge] });
}
