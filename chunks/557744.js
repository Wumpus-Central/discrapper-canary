n.d(t, { A: () => i });
var r = n(17928),
    s = n(73153);
let o = new Map();
class l extends r.Ay.Store {
    getModelSettings(e) {
        return o.get(e) ?? null;
    }
}
let i = new l(s.h, {
    CONJURE_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, tierSettings: r, tiers: s, choices: l } = e;
        o.set(t, { settings: n, tierSettings: r, tiers: s, choices: l });
    },
});
