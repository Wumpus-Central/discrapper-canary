a.d(t, { a: () => s });
var n = a(665260),
    i = a(652215);
function s(e) {
    if (null != e)
        return {
            guildPresences: (0, n.Lt)(e, i.gfo.GATEWAY_PRESENCE),
            guildMembers: (0, n.Lt)(e, i.gfo.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, n.Lt)(e, i.gfo.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, n.Lt)(e, i.gfo.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, n.Lt)(e, i.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, n.Lt)(e, i.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED),
        };
}
