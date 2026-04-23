n.d(t, { D4: () => o, LD: () => c, pS: () => g });
var l = n(417597),
    i = n(600975),
    a = n(71393),
    s = n(735547),
    r = n(652215);
let o = s.Ay.INVITE_OPTIONS_7_DAYS.value,
    d = (0, i.C)({
        kind: "guild",
        id: "2025-08_default_invite_expiration_guild",
        label: "Default Invite Expiration Guild",
        defaultConfig: { defaultMaxAge: 604800 },
        treatments: [
            { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
            { id: 2, label: "30 days", config: { defaultMaxAge: 2592e3 } },
            { id: 3, label: "60 days", config: { defaultMaxAge: 5184e3 } },
        ],
    }),
    u = (0, i.C)({
        kind: "guild",
        id: "2026-05_default_invite_expiration_guild_web",
        label: "Default Invite Expiration Guild Web",
        defaultConfig: { defaultMaxAge: 604800 },
        treatments: [
            { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
            { id: 2, label: "30 days", config: { defaultMaxAge: 2592e3 } },
            { id: 3, label: "60 days", config: { defaultMaxAge: 5184e3 } },
        ],
    });
function c(e) {
    let { guildId: t, location: n } = e,
        i = t ?? r.dJq,
        c = d.useExperiment({ guildId: i, location: n }),
        g = u.useExperiment({ guildId: i, location: n }),
        h = c?.defaultMaxAge !== o ? c : g,
        A = (0, l.bG)([a.A], () => a.A.getGuild(t));
    return null == t
        ? null
        : (function (e) {
              let { guild: t, experimentConfig: n } = e;
              if (t?.features.has(r.GuildFeatures.HUB)) return s.Ay.INVITE_OPTIONS_FOREVER.value;
              if (null != n) return n.defaultMaxAge ?? o;
              let l = t?.id ?? r.dJq,
                  i = d.getCurrentConfig({ guildId: l, location: "getDefaultInviteExpiration" });
              return i.defaultMaxAge !== o
                  ? i.defaultMaxAge
                  : (u.getCurrentConfig({ guildId: l, location: "getDefaultInviteExpiration" }).defaultMaxAge ?? o);
          })({ guild: A, experimentConfig: h });
}
function g(e) {
    let { guildId: t, location: n } = e,
        l = t ?? r.dJq,
        i = d.useExperiment({ guildId: l, location: n }),
        a = u.useExperiment({ guildId: l, location: n }),
        c = i?.defaultMaxAge !== o ? i : a;
    return s.Ay.getMaxAgeOptions({ includeExperimentalValues: [c?.defaultMaxAge] });
}
