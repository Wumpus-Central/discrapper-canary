"use strict";
n.d(t, { x: () => d });
var i = n(284009),
    s = n.n(i),
    l = n(827343),
    r = n(956793),
    a = n(430452),
    o = n(108713),
    c = n(350701);
function d(e, t) {
    let n = e.sessionId ?? "";
    (0, o.Fc)(n), (0, o.ZG)();
    let i = t ?? e.channelId;
    s()(null != i, "attempted to transfer to unknown channel"),
        e.selfMute !== a.Ay.isSelfMute() && l.A.toggleSelfMute(),
        e.selfDeaf !== a.Ay.isSelfDeaf() && l.A.toggleSelfDeaf(),
        (0, c.A)(i, "discord_client", n),
        r.default.selectVoiceChannel(i, !1);
}
