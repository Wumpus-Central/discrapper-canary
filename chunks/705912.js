var r = s(855986),
    n = s(828488),
    a = s(945810),
    i = s(71393),
    c = s(652215);
let l = (0, a.mj)({
        kind: "user",
        name: "2026-09-mobile-nlp-search-user-flag",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, a.mj)({
        kind: "guild",
        name: "2026-09-mobile-nlp-search-guild-experiment",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function _(e, t) {
    return t.getGuild(e)?.features.has(c.GuildFeatures.DISCOVERABLE) ?? !1;
}
s.d(
    t,
    {},
    {
        Qc: function (e, t) {
            if (!_(e, i.A)) return !1;
            if ((0, n.PD)(e, t)) return !0;
            let s = l.getConfig({ location: t }).enabled,
                r = u.getConfig({ guildId: e, location: t }).enabled;
            return s && r;
        },
        fu: function (e, t) {
            let s = (0, r.bG)([i.A], () => null != e && _(e, i.A), [e]),
                a = (0, n.WU)(e, t),
                c = l.useConfig({ location: t }).enabled,
                h = u.useConfig({ guildId: e ?? "", location: t }).enabled;
            return s && (a || (c && h));
        },
    },
);
