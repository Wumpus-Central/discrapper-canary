n.d(t, { cO: () => o, ye: () => d });
var l = n(17928),
    i = n(228366);
let s = new Set();
class r extends l.Ay.PersistedStore {
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
let a = new r(i.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_SKIP: function (e) {
        let { guildId: t } = e;
        s = new Set(s).add(t);
    },
});
function o(e) {
    i.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId: e });
}
function d(e) {
    return (0, l.bG)([a], () => a.isSkipped(e), [e]);
}
