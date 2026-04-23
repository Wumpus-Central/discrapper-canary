"use strict";
n.d(t, { A: () => l });
var r = n(478437),
    i = n(961350),
    s = n(734057),
    a = n(309010),
    o = n(977997);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        l = t.getChannel(e),
        u = n.getVoiceChannelId();
    return (
        null != l &&
        (l.type === r.r.GUILD_VOICE ||
            (!!l.isPrivate() && (l.id === u || null != o.A.getVoiceStatesForChannel(l.id)[i.default.getId()])))
    );
}
