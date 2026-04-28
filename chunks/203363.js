s.d(n, { Z: () => E });
var i = s(20015),
    t = s(652215);
function E(e) {
    let n = (function (e) {
            if (null == e) return;
            let n = { flags: e };
            return {
                guildPresences: (0, i.n)(n, t.gfo.GATEWAY_PRESENCE),
                guildMembers: (0, i.n)(n, t.gfo.GATEWAY_GUILD_MEMBERS),
                messageContent: (0, i.n)(n, t.gfo.GATEWAY_MESSAGE_CONTENT),
                guildPresencesLimited: (0, i.n)(n, t.gfo.GATEWAY_PRESENCE_LIMITED),
                guildMembersLimited: (0, i.n)(n, t.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
                messageContentLimited: (0, i.n)(n, t.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED),
            };
        })((0, i.K)(e)),
        s = null != n && (n?.messageContent || n?.messageContentLimited),
        E = null != n && (n?.guildPresences || n?.guildPresencesLimited),
        u = null != n && (n?.guildMembers || n?.guildMembersLimited);
    return { hasMessageContent: s, hasGuildPresences: E, hasGuildMembers: u, hasIntents: s || E || u };
}
