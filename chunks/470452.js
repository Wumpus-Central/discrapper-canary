"use strict";
n.d(t, { Uq: () => d, tT: () => o, mN: () => l });
var i = n(17928),
    r = n(576705);
let a = (0, n(600975).C)({
    kind: "guild",
    id: "2026-06_guild_spaces",
    label: "Guild Space",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Guild Space", config: { enabled: !0 } }],
});
var s = n(652215);
function l(e) {
    return (0, i.bG)([r.A], () => null != e && r.A.can(s.xBc.MANAGE_GUILD, e), [e]);
}
function o(e, t) {
    var n, i;
    return (
        null != e &&
        ((n = e.id),
        a.getCurrentConfig({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled &&
            null != (i = e) &&
            r.A.can(s.xBc.MANAGE_GUILD, i))
    );
}
function d(e, t) {
    var n;
    let i = ((n = e?.id), a.useExperiment({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled),
        r = l(e);
    return null != e && i && r;
}
