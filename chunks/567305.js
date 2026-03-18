"use strict";
n.d(t, { D3: () => d, OV: () => s, TG: () => l, Xi: () => c, _Y: () => u, a0: () => _, hA: () => o });
var r = n(175650),
    i = n(652215);
function s(e) {
    return !0;
}
let a = [
        i.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        i.GuildFeatures.CREATOR_MONETIZABLE,
        i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    o = (e) => null != e && a.some((t) => e.features.has(t));
function l(e) {
    let { enabled: t } = r.ok.getCurrentConfig(
        { guildId: e ?? i.dJq, location: "504714_9" },
        { autoTrackExposure: !1 },
    );
    return t;
}
function u(e) {
    let { enabled: t } = r.ok.useExperiment({ guildId: e ?? i.dJq, location: "504714_10" }, { autoTrackExposure: !1 });
    return t;
}
function c(e) {
    let { showCreatorPortalLink: t } = r.ok.useExperiment(
        { guildId: e ?? i.dJq, location: "504714_11" },
        { autoTrackExposure: !1 },
    );
    return t;
}
function d() {
    let { enabled: e } = r.LD.getCurrentConfig({ location: "504714_12" }, { autoTrackExposure: !1 });
    return e;
}
function _() {
    let { enabled: e } = r.LD.useExperiment({ location: "504714_13" }, { autoTrackExposure: !1 });
    return e;
}
