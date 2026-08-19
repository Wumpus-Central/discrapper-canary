"use strict";
n.d(t, { Fy: () => I, GP: () => f, Zv: () => g, bW: () => p, kn: () => m });
var i = n(310784),
    r = n.n(i),
    a = n(317097),
    s = n(17928),
    l = n(498596),
    o = n(406704),
    d = n(71393),
    c = n(576705),
    u = n(998304),
    _ = n(472282),
    E = n(143413),
    A = n(381941),
    h = n(652215);
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.cZ,
        s = (0, a.Hl)(e),
        o = r()(t),
        d = r()(s),
        c = r().mix(o, s, i, "rgb"),
        _ = r().contrast(d, c) < r().contrast(d, o) ? c : o;
    return (0, u.lZ)({ foreground: d, background: _, ratio: l.Tr.Text, saturationFactor: n });
}
function f(e, t) {
    return (
        null != e &&
        e.features.has(h.GuildFeatures.VERIFIED) &&
        _.A.getCurrentConfig({ guildId: e.id, location: t }).enabled
    );
}
function p(e, t) {
    let n = (0, s.bG)([d.A], () => (null != e ? d.A.getGuild(e) : null), [e]),
        { enabled: i } = _.A.useExperiment({ guildId: e ?? void 0, location: t });
    return null != n && n.features.has(h.GuildFeatures.VERIFIED) && i;
}
function T(e) {
    return (
        null != e &&
        !e.isPrivate() &&
        (0, o.jr)(e) &&
        e.type !== h.rbe.GUILD_VOICE &&
        e.type !== h.rbe.GUILD_STAGE_VOICE
    );
}
function m(e, t, n) {
    var i;
    let r, a;
    return (
        (i = t.guild_id ?? void 0),
        (r = p(i, n)),
        (a = (0, s.bG)([c.A], () => c.A.can(h.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t])),
        !(!r || !a || (0, E.A)(e)) && (e.hasFlag(h.pr7.IS_GUILD_OFFICIAL) ? (0, o.jr)(t) : T(t))
    );
}
function g(e, t, n) {
    return f(e, n) && c.A.can(h.xBc.MANAGE_OFFICIAL_MESSAGES, t) && T(t);
}
