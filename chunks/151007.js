n.d(t, { Z: () => l });
var r = n(665906),
    i = n(496675),
    a = n(190263),
    o = n(901461),
    s = n(981631);
function l(e, t) {
    let n = !t.isSystemDM() && !(0, o.Z)(e),
        l = a.D.getCurrentConfig({
            guildId: t.guild_id,
            location: 'pin util'
        }).enabled
            ? i.Z.can(s.Plq.MANAGE_MESSAGES, t) || i.Z.can(s.Plq.PIN_MESSAGES, t)
            : i.Z.can(s.Plq.MANAGE_MESSAGES, t);
    return n && (l || t.isPrivate()) && (0, r.RG)(t) && t.type !== s.d4z.GUILD_VOICE && t.type !== s.d4z.GUILD_STAGE_VOICE;
}
