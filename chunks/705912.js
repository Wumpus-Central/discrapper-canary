var r = s(855986),
    a = s(828488),
    n = s(945810),
    i = s(71393),
    c = s(652215);
let l = (0, n.mj)({
        kind: "user",
        name: "2026-09-mobile-nlp-search-user-flag",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    _ = (0, n.mj)({
        kind: "guild",
        name: "2026-09-mobile-nlp-search-guild-experiment",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function u(e, t) {
    return t.getGuild(e)?.features.has(c.GuildFeatures.DISCOVERABLE) ?? !1;
}
s.d(
    t,
    {},
    {
        Qc: function (e, t) {
            if (!u(e, i.A)) return !1;
            if ((0, a.PD)(e, t)) return !0;
            let s = l.getConfig({ location: t }).enabled,
                r = _.getConfig({ guildId: e, location: t }).enabled;
            return s && r;
        },
        fu: function (e, t) {
            let s = (0, r.bG)([i.A], () => null != e && u(e, i.A), [e]),
                n = (0, a.WU)(e, t),
                c = l.useConfig({ location: t }).enabled,
                d = _.useConfig({ guildId: e ?? "", location: t }).enabled;
            return s && (n || (c && d));
        },
    },
);
