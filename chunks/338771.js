"use strict";
n.d(t, { A: () => o });
var i = n(827343),
    r = n(401843),
    s = n(495544),
    a = n(652896);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == e) return;
    let { streamType: o, guildId: l, channelId: u, ownerId: c } = e,
        d = (0, a._z)({ streamType: o, guildId: l, channelId: u, ownerId: c });
    c === s.default.getId() && i.A.setGoLiveSource(null), r.vN(d, t, n);
}
