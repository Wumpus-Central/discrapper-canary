n.d(t, { A: () => l });
var s = n(17928),
    r = n(73153);
let o = new Map();
class i extends s.Ay.Store {
    getModelSettings(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(r.h, {
    CONJURE_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, tierSettings: s, tiers: r, choices: i } = e;
        o.set(t, { settings: n, tierSettings: s, tiers: r, choices: i });
    },
});
