"use strict";
n.d(t, { W: () => u, h: () => l });
var i = n(17928),
    r = n(71393),
    s = n(576705),
    a = n(709977),
    o = n(652215);
function l(e) {
    let t = r.A.getGuild(e);
    return (
        null != t &&
        t.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        s.A.can(o.xBc.KICK_MEMBERS, t)
    );
}
function u(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e));
    return (
        null != t &&
        t.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        s.A.can(o.xBc.KICK_MEMBERS, t) &&
        (0, a.Qd)(t)
    );
}
