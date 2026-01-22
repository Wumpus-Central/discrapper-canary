n.d(t, {
    D3: () => p,
    DN: () => o,
    HT: () => a,
    OV: () => s,
    TG: () => u,
    Xi: () => f,
    _Y: () => d,
    a0: () => _,
    hA: () => c,
}),
    n(469993);
var r = n(175650),
    i = n(652215);
function a(e) {
    return !0;
}
function s(e) {
    return !0;
}
function o(e) {
    return r.rh.useExperiment({
        guildId: null != e ? e : i.dJq,
        location: "504714_7",
    });
}
let l = [
        i.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        i.GuildFeatures.CREATOR_MONETIZABLE,
        i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    c = (e) => null != e && l.some((t) => e.features.has(t));
function u(e) {
    let { enabled: t } = r.ok.getCurrentConfig(
        {
            guildId: null != e ? e : i.dJq,
            location: "504714_9",
        },
        { autoTrackExposure: !1 },
    );
    return t;
}
function d(e) {
    let { enabled: t } = r.ok.useExperiment(
        {
            guildId: null != e ? e : i.dJq,
            location: "504714_10",
        },
        { autoTrackExposure: !1 },
    );
    return t;
}
function f(e) {
    let { showCreatorPortalLink: t } = r.ok.useExperiment(
        {
            guildId: null != e ? e : i.dJq,
            location: "504714_11",
        },
        { autoTrackExposure: !1 },
    );
    return t;
}
function p() {
    let { enabled: e } = r.LD.getCurrentConfig({ location: "504714_12" }, { autoTrackExposure: !1 });
    return e;
}
function _() {
    let { enabled: e } = r.LD.useExperiment({ location: "504714_13" }, { autoTrackExposure: !1 });
    return e;
}
