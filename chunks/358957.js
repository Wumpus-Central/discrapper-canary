"use strict";
n.d(t, { e: () => o });
var r = n(734057),
    i = n(977997),
    a = n(140547);
let s = [null, null];
function o(e, t) {
    if (null == t) return s;
    let n = r.A.getChannel(i.A.getVoiceStateForUser(e)?.channelId)?.guild_id,
        { defaultStatusVariant: o } = (0, a.ko)({ guildId: n, location: "parseHangStatus" }),
        l = t.split(":");
    return l.length > 1 && l[1] !== o ? [l[0], o] : l;
}
