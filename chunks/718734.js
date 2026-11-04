var i = n(945810);
n(652215);
let l = (0, i.mj)({
        kind: "guild",
        name: "2026-10-stage-unified-call",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    r = (0, i.mj)({
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
                { enabled: i } = l.useConfig({ guildId: e?.guild_id ?? "", location: t }),
                { enabled: s } = r.useConfig({ location: t });
            return n && (i || s);
        },
        x: function (e, t) {
            return (
                e?.guild_id != null &&
                !!e.isGuildStageVoice() &&
                (l.getConfig({ guildId: e.guild_id, location: t }).enabled || r.getConfig({ location: t }).enabled)
            );
        },
    },
);
