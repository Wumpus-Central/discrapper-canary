"use strict";
n.d(t, { Fy: () => h, GP: () => m, Nd: () => I, Qz: () => g, Vc: () => A });
var r = n(310784),
    i = n.n(r),
    s = n(317097),
    a = n(311907),
    o = n(582754),
    l = n(71393),
    u = n(576705),
    c = n(998304),
    d = n(472282),
    _ = n(792197),
    f = n(381941),
    p = n(652215);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.cZ,
        a = (0, s.Hl)(e),
        l = i()(t),
        u = i()(a),
        d = i().mix(l, a, r, "rgb"),
        _ = i().contrast(u, d) < i().contrast(u, l) ? d : l;
    return (0, c.lZ)({ foreground: u, background: _, ratio: o.Tr.Text, saturationFactor: n }).hex();
}
function m(e, t) {
    return (
        null != e &&
        e.features.has(p.GuildFeatures.VERIFIED) &&
        d.A.getCurrentConfig({ guildId: e.id, location: t }).enabled
    );
}
function E(e, t) {
    let n = (0, a.bG)([l.A], () => (null != e ? l.A.getGuild(e) : null), [e]),
        { enabled: r } = d.A.useExperiment({ guildId: e ?? void 0, location: t });
    return null != n && n.features.has(p.GuildFeatures.VERIFIED) && r;
}
function g(e, t, n) {
    return m(e, n) && u.A.can(p.xBc.MANAGE_OFFICIAL_MESSAGES, t);
}
function A(e, t, n) {
    let r = E(e, n),
        i = (0, a.bG)([u.A], () => u.A.can(p.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]);
    return r && i;
}
function I(e, t, n) {
    let r = E(e, n),
        i = _.j.useConfig({ location: n }).enabled,
        s = (0, a.bG)([l.A, u.A], () => {
            let n = l.A.getGuild(e);
            return u.A.can(p.xBc.MANAGE_OFFICIAL_MESSAGES, t) || u.A.can(p.xBc.MANAGE_GUILD, n);
        }, [t, e]);
    return r && (s || i);
}
