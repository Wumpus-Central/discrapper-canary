var r = n(855986),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getModelSettings(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(s.h, {
    CONJURE_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, tierSettings: r, tiers: s, choices: i } = e;
        o.set(t, { settings: n, tierSettings: r, tiers: s, choices: i });
    },
});
n.d(t, {}, { A: l });
