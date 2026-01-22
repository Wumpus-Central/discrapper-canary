n.d(t, {
    A: () => o,
});
var i = n(937161),
    l = n(406704),
    r = n(576705),
    s = n(143413),
    a = n(652215);

function o(e, t) {
    let n = !t.isSystemDM() && !(0, s.A)(e),
        { enabled: o } = i.A.getCurrentConfig({
            guildId: t.guild_id,
            location: "isMessagePinnable",
        }),
        u =
            ((r.A.can(a.xBc.MANAGE_MESSAGES, t) && !o) || r.A.can(a.xBc.PIN_MESSAGES, t)) &&
            r.A.can(a.xBc.READ_MESSAGE_HISTORY, t);
    return (
        n && (u || t.isPrivate()) && (0, l.jr)(t) && t.type !== a.rbe.GUILD_VOICE && t.type !== a.rbe.GUILD_STAGE_VOICE
    );
}
