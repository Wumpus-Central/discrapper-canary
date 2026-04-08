"use strict";
n.d(t, { GP: () => l, Qz: () => c, Vc: () => d });
var r = n(311907),
    i = n(71393),
    s = n(576705),
    a = n(472282),
    o = n(652215);
function l(e, t) {
    return (
        null != e &&
        e.features.has(o.GuildFeatures.VERIFIED) &&
        a.A.getCurrentConfig({ guildId: e.id, location: t }).enabled
    );
}
function u(e, t) {
    let n = (0, r.bG)([i.A], () => (null != e ? i.A.getGuild(e) : null), [e]),
        { enabled: s } = a.A.useExperiment({ guildId: e ?? void 0, location: t });
    return null != n && n.features.has(o.GuildFeatures.VERIFIED) && s;
}
function c(e, t, n) {
    return l(e, n) && s.A.can(o.xBc.MANAGE_OFFICIAL_MESSAGES, t);
}
function d(e, t, n) {
    let i = u(e, n),
        a = (0, r.bG)([s.A], () => s.A.can(o.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]);
    return i && a;
}
