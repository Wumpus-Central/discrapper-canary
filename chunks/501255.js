"use strict";
n.d(t, { GP: () => u, Nd: () => f, Qz: () => d, Vc: () => _ });
var r = n(311907),
    i = n(71393),
    s = n(576705),
    a = n(472282),
    o = n(792197),
    l = n(652215);
function u(e, t) {
    return (
        null != e &&
        e.features.has(l.GuildFeatures.VERIFIED) &&
        a.A.getCurrentConfig({ guildId: e.id, location: t }).enabled
    );
}
function c(e, t) {
    let n = (0, r.bG)([i.A], () => (null != e ? i.A.getGuild(e) : null), [e]),
        { enabled: s } = a.A.useExperiment({ guildId: e ?? void 0, location: t });
    return null != n && n.features.has(l.GuildFeatures.VERIFIED) && s;
}
function d(e, t, n) {
    return u(e, n) && s.A.can(l.xBc.MANAGE_OFFICIAL_MESSAGES, t);
}
function _(e, t, n) {
    let i = c(e, n),
        a = (0, r.bG)([s.A], () => s.A.can(l.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]);
    return i && a;
}
function f(e, t, n) {
    let a = c(e, n),
        u = o.j.useConfig({ location: n }).enabled,
        d = (0, r.bG)([i.A, s.A], () => {
            let n = i.A.getGuild(e);
            return s.A.can(l.xBc.MANAGE_OFFICIAL_MESSAGES, t) || s.A.can(l.xBc.MANAGE_GUILD, n);
        }, [t, e]);
    return a && (d || u);
}
