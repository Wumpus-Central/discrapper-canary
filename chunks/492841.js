n.d(t, { A: () => c });
var i = n(937161),
    l = n(406704),
    s = n(576705),
    r = n(143413),
    a = n(652215);
function c(e, t) {
    let n = !t.isSystemDM() && !(0, r.A)(e),
        { enabled: c } = i.A.getCurrentConfig({ guildId: t.guild_id, location: "isMessagePinnable" }),
        o =
            ((s.A.can(a.xBc.MANAGE_MESSAGES, t) && !c) || s.A.can(a.xBc.PIN_MESSAGES, t)) &&
            s.A.can(a.xBc.READ_MESSAGE_HISTORY, t);
    return (
        n && (o || t.isPrivate()) && (0, l.jr)(t) && t.type !== a.rbe.GUILD_VOICE && t.type !== a.rbe.GUILD_STAGE_VOICE
    );
}
