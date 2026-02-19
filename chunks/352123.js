"use strict";
n.d(t, { A: () => o, b: () => c });
var i = n(311907),
    s = n(734057),
    l = n(71393),
    r = n(576705),
    a = n(652215);
function o(e) {
    let t = (0, i.bG)([l.A], () => l.A.getGuild(e.guildId)),
        n = (0, i.bG)([s.A], () => s.A.getChannel(e.channelId)),
        o = (0, i.bG)([r.A], () => r.A.can(a.xBc.ADMINISTRATOR, t)),
        c = (0, i.bG)([r.A], () => r.A.can(a.xBc.MANAGE_MESSAGES, n));
    return { isEntryAdmin: o, canEdit: o || c, canRemove: o || c };
}
function c(e) {
    return (0, i.bG)([r.A], () => r.A.can(a.xBc.SEND_MESSAGES, e));
}
