"use strict";
n.d(t, { W: () => u, h: () => l });
var r = n(311907),
    i = n(71393),
    s = n(576705),
    a = n(709977),
    o = n(652215);
function l(e) {
    let t = i.A.getGuild(e);
    return (
        null != t &&
        t.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        s.A.can(o.xBc.KICK_MEMBERS, t)
    );
}
function u(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        n = s.A.can(o.xBc.KICK_MEMBERS, t) || s.A.can(o.xBc.MANAGE_GUILD, t);
    return null != t && t.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, a.Qd)(t);
}
