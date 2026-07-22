"use strict";
n.d(t, { t: () => l, U: () => o });
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
function l(e, t) {
    var n;
    return (
        null != e &&
        ((n = e.id),
        a.getCurrentConfig({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled &&
            r.A.can(s.xBc.MANAGE_GUILD, e))
    );
}
function o(e, t) {
    var n;
    let l = ((n = e?.id), a.useExperiment({ guildId: n, location: t }, { autoTrackExposure: !1 }).enabled),
        o = (0, i.bG)([r.A], () => null != e && r.A.can(s.xBc.MANAGE_GUILD, e), [e]);
    return null != e && l && o;
}
