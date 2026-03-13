"use strict";
n.d(t, { D3: () => _, DN: () => a, OV: () => s, TG: () => u, Xi: () => d, _Y: () => c, a0: () => f, hA: () => l }),
    n(469993);
var r = n(175650),
    i = n(652215);
function s(e) {
    return !0;
}
function a(e) {
    return r.rh.useExperiment({ guildId: e ?? i.dJq, location: "504714_7" });
}
let o = [
        i.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        i.GuildFeatures.CREATOR_MONETIZABLE,
        i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    l = (e) => null != e && o.some((t) => e.features.has(t));
function u(e) {
    let { enabled: t } = r.ok.getCurrentConfig(
        { guildId: e ?? i.dJq, location: "504714_9" },
        { autoTrackExposure: !1 },
    );
    return t;
}
function c(e) {
    let { enabled: t } = r.ok.useExperiment({ guildId: e ?? i.dJq, location: "504714_10" }, { autoTrackExposure: !1 });
    return t;
}
function d(e) {
    let { showCreatorPortalLink: t } = r.ok.useExperiment(
        { guildId: e ?? i.dJq, location: "504714_11" },
        { autoTrackExposure: !1 },
    );
    return t;
}
function _() {
    let { enabled: e } = r.LD.getCurrentConfig({ location: "504714_12" }, { autoTrackExposure: !1 });
    return e;
}
function f() {
    let { enabled: e } = r.LD.useExperiment({ location: "504714_13" }, { autoTrackExposure: !1 });
    return e;
}
