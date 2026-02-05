"use strict";
n.d(t, { A: () => o });
var r = n(827343),
    i = n(401843),
    a = n(961350),
    s = n(652896);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == e) return;
    let { streamType: o, guildId: l, channelId: u, ownerId: c } = e,
        d = (0, s._z)({ streamType: o, guildId: l, channelId: u, ownerId: c });
    c === a.default.getId() && r.A.setGoLiveSource(null), i.vN(d, t, n);
}
