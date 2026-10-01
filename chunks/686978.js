a.d(t, { cO: () => r, ye: () => o });
var n = a(17928),
    i = a(73153);
let l = new Set();
class s extends n.Ay.PersistedStore {
    static displayName = "ServerOnboardingSetupProgressSkipStore";
    static persistKey = "ServerOnboardingSetupProgressSkippedGuildIds";
    initialize(e) {
        l = new Set(e?.skippedGuildIds ?? []);
    }
    getState() {
        return { skippedGuildIds: Array.from(l) };
    }
    isSkipped(e) {
        return l.has(e);
    }
}
let d = new s(i.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_SKIP: function (e) {
        let { guildId: t } = e;
        l = new Set(l).add(t);
    },
});
function r(e) {
    i.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId: e });
}
function o(e) {
    return (0, n.bG)([d], () => d.isSkipped(e), [e]);
}
