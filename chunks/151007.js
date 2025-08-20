n.d(t, { Z: () => o });
var i = n(665906),
    l = n(496675),
    s = n(190263),
    r = n(901461),
    a = n(981631);
function o(e, t) {
    let n = !t.isSystemDM() && !(0, r.Z)(e),
        o = s.D.getCurrentConfig({
            guildId: t.guild_id,
            location: "pin util",
        }).enabled
            ? l.Z.can(a.Plq.MANAGE_MESSAGES, t) || l.Z.can(a.Plq.PIN_MESSAGES, t)
            : l.Z.can(a.Plq.MANAGE_MESSAGES, t);
    return (
        n && (o || t.isPrivate()) && (0, i.RG)(t) && t.type !== a.d4z.GUILD_VOICE && t.type !== a.d4z.GUILD_STAGE_VOICE
    );
}
