"use strict";
n.d(t, { Uq: () => u, tT: () => c, mN: () => o });
var i = n(17928),
    r = n(576705);
let a = (0, n(600975).C)({
    kind: "guild",
    id: "2026-06_guild_spaces",
    label: "Guild Space",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Guild Space", config: { enabled: !0 } }],
});
var s = n(593673),
    l = n(652215);
function o(e) {
    return (0, i.bG)([r.A], () => null != e && r.A.can(l.xBc.MANAGE_GUILD, e), [e]);
}
function d(e) {
    let t = e.guildSpaceSettings;
    return null != t && t.enabled && t.publish_status === s.B.PUBLISHED;
}
function c(e, t) {
    var n;
    return (
        null != e &&
        ((n = e.id), !!a.getCurrentConfig({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled) &&
        ((null != e && r.A.can(l.xBc.MANAGE_GUILD, e)) || d(e))
    );
}
function u(e, t) {
    var n;
    let i = ((n = e?.id), a.useExperiment({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled),
        r = o(e);
    return null != e && !!i && (r || d(e));
}
