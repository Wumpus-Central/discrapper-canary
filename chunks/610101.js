"use strict";
n.d(t, { W: () => d, h: () => o });
var i = n(202384),
    r = n(513461),
    a = n(212455),
    s = n(976860),
    l = n(652215);
function o(e) {
    return (
        e.features?.includes(l.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
        e.features?.includes(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
    );
}
function d(e) {
    let t = a.A.getRequest(e);
    null != t && t.applicationStatus !== r.B5.STARTED ? (0, s.pX)(l.BVt.GUILD_MEMBER_VERIFICATION(e)) : (0, i.Ze)(e);
}
