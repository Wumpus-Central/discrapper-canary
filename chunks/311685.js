"use strict";
n.d(t, { Q: () => l, V: () => u });
var r = n(311907),
    i = n(71393),
    s = n(576705),
    a = n(472282),
    o = n(652215);
function l(e, t, n) {
    return (
        null != e &&
        e.features.has(o.GuildFeatures.VERIFIED) &&
        a.A.getCurrentConfig({ guildId: e.id, location: n }).enabled &&
        s.A.can(o.xBc.MANAGE_OFFICIAL_MESSAGES, t)
    );
}
function u(e, t, n) {
    let l = (0, r.bG)([i.A], () => (null != e ? i.A.getGuild(e) : null), [e]),
        u = (0, r.bG)([s.A], () => s.A.can(o.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]),
        { enabled: c } = a.A.useExperiment({ guildId: e ?? void 0, location: n });
    return null != l && l.features.has(o.GuildFeatures.VERIFIED) && c && u;
}
