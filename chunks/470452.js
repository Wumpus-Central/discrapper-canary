"use strict";
n.d(t, { Uq: () => _, tT: () => u, mN: () => d });
var i = n(17928),
    r = n(71393),
    a = n(576705);
let s = (0, n(600975).C)({
    kind: "guild",
    id: "2026-06_guild_spaces",
    label: "Guild Space",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Guild Space", config: { enabled: !0 } }],
});
var l = n(593673),
    o = n(652215);
function d(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(o.xBc.MANAGE_GUILD, e), [e]);
}
function c(e) {
    let t = e.guildSpaceSettings;
    return null != t && t.enabled && t.publish_status === l.B.PUBLISHED;
}
function u(e, t) {
    var n;
    return (
        null != e &&
        ((n = e.id), !!s.getCurrentConfig({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled) &&
        ((null != e && a.A.can(o.xBc.MANAGE_GUILD, e)) || c(e))
    );
}
function _(e, t) {
    var n;
    let a = ((n = e ?? void 0), s.useExperiment({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled),
        l = (0, i.bG)([r.A], () => r.A.getGuild(e), [e]),
        o = d(l);
    return null != l && !!a && (o || c(l));
}
