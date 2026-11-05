var i = n(945810);
n(652215);
let r = (0, i.mj)({
        kind: "guild",
        name: "2026-10-stage-unified-call",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
        kind: "user",
        name: "2026-10-stage-unified-call-user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
n.d(
    t,
    {},
    {
        e: function (e, t) {
            let n = e?.isGuildStageVoice() ?? !1,
                { enabled: i } = r.useConfig({ guildId: e?.guild_id ?? "", location: t }),
                { enabled: s } = l.useConfig({ location: t });
            return n && (i || s);
        },
        x: function (e, t) {
            return (
                e?.guild_id != null &&
                !!e.isGuildStageVoice() &&
                (r.getConfig({ guildId: e.guild_id, location: t }).enabled || l.getConfig({ location: t }).enabled)
            );
        },
    },
);
