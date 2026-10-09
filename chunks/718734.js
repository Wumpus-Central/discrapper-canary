n.d(t, { e: () => s, x: () => a });
var i = n(945810),
    l = n(652215);
let r = (0, i.mj)({
    kind: "guild",
    name: "2026-10-stage-unified-call",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e, t) {
    let n = e?.isGuildStageVoice() ?? !1,
        { enabled: i } = r.useConfig({ guildId: e?.guild_id ?? l.dJq, location: t });
    return n && i;
}
function a(e, t) {
    return e?.guild_id != null && !!e.isGuildStageVoice() && r.getConfig({ guildId: e.guild_id, location: t }).enabled;
}
