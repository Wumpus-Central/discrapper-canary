"use strict";
n.d(t, { Z: () => s });
var i = n(20015),
    a = n(652215);
function s(e) {
    let t = (function (e) {
            if (null == e) return;
            let t = { flags: e };
            return {
                guildPresences: (0, i.n)(t, a.gfo.GATEWAY_PRESENCE),
                guildMembers: (0, i.n)(t, a.gfo.GATEWAY_GUILD_MEMBERS),
                messageContent: (0, i.n)(t, a.gfo.GATEWAY_MESSAGE_CONTENT),
                guildPresencesLimited: (0, i.n)(t, a.gfo.GATEWAY_PRESENCE_LIMITED),
                guildMembersLimited: (0, i.n)(t, a.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
                messageContentLimited: (0, i.n)(t, a.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED),
            };
        })((0, i.K)(e)),
        n = null != t && (t?.messageContent || t?.messageContentLimited),
        s = null != t && (t?.guildPresences || t?.guildPresencesLimited),
        l = null != t && (t?.guildMembers || t?.guildMembersLimited);
    return { hasMessageContent: n, hasGuildPresences: s, hasGuildMembers: l, hasIntents: n || s || l };
}
