"use strict";
n.d(t, { S: () => l });
var r = n(136722);
n(311907);
var i = n(717125),
    s = n(734057),
    a = n(488926),
    o = n(652215);
function l(e, t) {
    var n;
    let l =
        null != (n = s.A.getChannel(t)) && o.kvI.GUILD_VOCAL.has(n.type)
            ? r.kg(o.xBc.VIEW_CHANNEL, o.xBc.CONNECT)
            : o.xBc.VIEW_CHANNEL;
    return i.A.isChannelGated(e, t) || a.MJ(l, s.A.getChannel(t));
}
