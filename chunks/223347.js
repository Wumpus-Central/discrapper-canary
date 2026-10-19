n.d(t, { X: () => l, p: () => o });
var r = n(73153),
    s = n(975189);
let o = {
    model_settings(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({
            type: "CONJURE_MODEL_SETTINGS_SET",
            projectId: n,
            settings: e.settings,
            tierSettings: e.tier_settings ?? null,
            tiers: e.tiers ?? null,
            choices: e.choices,
        });
    },
};
function l(e, t) {
    let n = (0, s.KY)(e);
    try {
        if (null == n) throw Error("Not connected");
        n.sendModelSettings(t);
    } catch (e) {
        console.error("[conjure] model settings send failed", e);
    }
}
