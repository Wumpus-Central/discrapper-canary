n.d(t, { Z: () => o });
var i = n(110259),
    l = n(665906),
    s = n(496675),
    r = n(901461),
    a = n(981631);
function o(e, t) {
    let n = !t.isSystemDM() && !(0, r.Z)(e),
        { enabled: o } = i.Z.getCurrentConfig({
            guildId: t.guild_id,
            location: "isMessagePinnable",
        }),
        u =
            ((s.Z.can(a.Plq.MANAGE_MESSAGES, t) && !o) || s.Z.can(a.Plq.PIN_MESSAGES, t)) &&
            s.Z.can(a.Plq.READ_MESSAGE_HISTORY, t);
    return (
        n && (u || t.isPrivate()) && (0, l.RG)(t) && t.type !== a.d4z.GUILD_VOICE && t.type !== a.d4z.GUILD_STAGE_VOICE
    );
}
