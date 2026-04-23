a.d(t, { a: () => i });
var n = a(20015),
    l = a(652215);
function i(e) {
    if (null == e) return;
    let t = { flags: e };
    return {
        guildPresences: (0, n.n)(t, l.gfo.GATEWAY_PRESENCE),
        guildMembers: (0, n.n)(t, l.gfo.GATEWAY_GUILD_MEMBERS),
        messageContent: (0, n.n)(t, l.gfo.GATEWAY_MESSAGE_CONTENT),
        guildPresencesLimited: (0, n.n)(t, l.gfo.GATEWAY_PRESENCE_LIMITED),
        guildMembersLimited: (0, n.n)(t, l.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
        messageContentLimited: (0, n.n)(t, l.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED),
    };
}
