"use strict";
n.d(t, { Fy: () => h, GP: () => p, Qz: () => m, Vc: () => g, bW: () => E });
var i = n(310784),
    r = n.n(i),
    s = n(317097),
    a = n(17928),
    o = n(458217),
    l = n(71393),
    u = n(576705),
    c = n(998304),
    d = n(472282),
    _ = n(381941),
    f = n(652215);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.cZ,
        a = (0, s.Hl)(e),
        l = r()(t),
        u = r()(a),
        d = r().mix(l, a, i, "rgb"),
        f = r().contrast(u, d) < r().contrast(u, l) ? d : l;
    return (0, c.lZ)({ foreground: u, background: f, ratio: o.Tr.Text, saturationFactor: n });
}
function p(e, t) {
    return (
        null != e &&
        e.features.has(f.GuildFeatures.VERIFIED) &&
        d.A.getCurrentConfig({ guildId: e.id, location: t }).enabled
    );
}
function E(e, t) {
    let n = (0, a.bG)([l.A], () => (null != e ? l.A.getGuild(e) : null), [e]),
        { enabled: i } = d.A.useExperiment({ guildId: e ?? void 0, location: t });
    return null != n && n.features.has(f.GuildFeatures.VERIFIED) && i;
}
function m(e, t, n) {
    return p(e, n) && u.A.can(f.xBc.MANAGE_OFFICIAL_MESSAGES, t);
}
function g(e, t, n) {
    let i = E(e, n),
        r = (0, a.bG)([u.A], () => u.A.can(f.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]);
    return i && r;
}
