n.d(t, { cO: () => o, ye: () => d });
var i = n(17928),
    l = n(228366);
let s = new Set();
class r extends i.Ay.PersistedStore {
    static displayName = "ServerOnboardingSetupProgressSkipStore";
    static persistKey = "ServerOnboardingSetupProgressSkippedGuildIds";
    initialize(e) {
        s = new Set(e?.skippedGuildIds ?? []);
    }
    getState() {
        return { skippedGuildIds: Array.from(s) };
    }
    isSkipped(e) {
        return s.has(e);
    }
}
let a = new r(l.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_SKIP: function (e) {
        let { guildId: t } = e;
        s = new Set(s).add(t);
    },
});
function o(e) {
    l.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId: e });
}
function d(e) {
    return (0, i.bG)([a], () => a.isSkipped(e), [e]);
}
