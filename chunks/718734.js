n.d(t, { e: () => a, x: () => o });
var i = n(945810),
    l = n(652215);
let r = (0, i.mj)({
        kind: "guild",
        name: "2026-10-stage-unified-call",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        kind: "user",
        name: "2026-10-stage-unified-call-user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function a(e, t) {
    let n = e?.isGuildStageVoice() ?? !1,
        { enabled: i } = r.useConfig({ guildId: e?.guild_id ?? l.dJq, location: t }),
        { enabled: a } = s.useConfig({ location: t });
    return n && (i || a);
}
function o(e, t) {
    return (
        e?.guild_id != null &&
        !!e.isGuildStageVoice() &&
        (r.getConfig({ guildId: e.guild_id, location: t }).enabled || s.getConfig({ location: t }).enabled)
    );
}
