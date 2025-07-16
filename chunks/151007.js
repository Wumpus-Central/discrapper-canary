n.d(t, { Z: () => o });
var i = n(665906),
    l = n(496675),
    r = n(190263),
    s = n(901461),
    a = n(981631);
function o(e, t) {
    let n = !t.isSystemDM() && !(0, s.Z)(e),
        o = r.D.getCurrentConfig({
            guildId: t.guild_id,
            location: 'pin util'
        }).enabled
            ? l.Z.can(a.Plq.MANAGE_MESSAGES, t) || l.Z.can(a.Plq.PIN_MESSAGES, t)
            : l.Z.can(a.Plq.MANAGE_MESSAGES, t);
    return n && (o || t.isPrivate()) && (0, i.RG)(t) && t.type !== a.d4z.GUILD_VOICE && t.type !== a.d4z.GUILD_STAGE_VOICE;
}
