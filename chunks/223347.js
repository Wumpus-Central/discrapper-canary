n.d(t, { X: () => i, p: () => o });
var s = n(73153),
    r = n(975189);
let o = {
    model_settings(e, t) {
        let { projectId: n } = t;
        s.h.dispatch({
            type: "CONJURE_MODEL_SETTINGS_SET",
            projectId: n,
            settings: e.settings,
            tierSettings: e.tier_settings ?? null,
            tiers: e.tiers ?? null,
            choices: e.choices,
        });
    },
};
function i(e, t) {
    let n = (0, r.KY)(e);
    try {
        if (null == n) throw Error("Not connected");
        n.sendModelSettings(t);
    } catch (e) {
        console.error("[conjure] model settings send failed", e);
    }
}
