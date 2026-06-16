"use strict";
n.d(t, { S: () => l });
var i = n(136722);
n(17928);
var r = n(717125),
    s = n(734057),
    a = n(488926),
    o = n(652215);
function l(e, t) {
    var n;
    let l =
        null != (n = s.A.getChannel(t)) && o.kvI.GUILD_VOCAL.has(n.type)
            ? i.kg(o.xBc.VIEW_CHANNEL, o.xBc.CONNECT)
            : o.xBc.VIEW_CHANNEL;
    return r.A.isChannelGated(e, t) || a.MJ(l, s.A.getChannel(t));
}
