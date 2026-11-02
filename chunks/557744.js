n.d(t, { A: () => l });
var r = n(17928),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getModelSettings(e) {
        return i.get(e) ?? null;
    }
}
let l = new o(s.h, {
    CONJURE_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, tierSettings: r, tiers: s, choices: o } = e;
        i.set(t, { settings: n, tierSettings: r, tiers: s, choices: o });
    },
});
