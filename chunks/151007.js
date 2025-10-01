n.d(t, { Z: () => a });
var i = n(665906),
    l = n(496675),
    s = n(901461),
    r = n(981631);
function a(e, t) {
    let n = !t.isSystemDM() && !(0, s.Z)(e),
        a = l.Z.can(r.Plq.MANAGE_MESSAGES, t) || l.Z.can(r.Plq.PIN_MESSAGES, t);
    return (
        n && (a || t.isPrivate()) && (0, i.RG)(t) && t.type !== r.d4z.GUILD_VOICE && t.type !== r.d4z.GUILD_STAGE_VOICE
    );
}
