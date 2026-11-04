let l = (0, n(945810).mj)({
    kind: "guild",
    name: "2026-09-soundboard-echo",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        W: function (e, t) {
            return l.useConfig({ guildId: e, location: t });
        },
        j: function (e, t) {
            return l.getConfig({ guildId: e, location: t });
        },
    },
);
