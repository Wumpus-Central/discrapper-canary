"use strict";
n.d(t, { W: () => u, h: () => l });
var i = n(202384),
    r = n(513461),
    s = n(212455),
    a = n(976860),
    o = n(652215);
function l(e) {
    return (
        e.features?.includes(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
        e.features?.includes(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
    );
}
function u(e) {
    let t = s.A.getRequest(e);
    null != t && t.applicationStatus !== r.B5.STARTED ? (0, a.pX)(o.BVt.GUILD_MEMBER_VERIFICATION(e)) : (0, i.Ze)(e);
}
