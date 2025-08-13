n.d(t, {
    G7: () => l,
    LG: () => d,
    Pg: () => i,
    ZI: () => c,
    _0: () => a,
    mf: () => o,
});
var r,
    s = n(388032);
let i = 5,
    l = 10,
    a = 30;
var c =
    (((r = {})[(r.DISPLAY = 0)] = "DISPLAY"),
    (r[(r.PERMISSIONS = 1)] = "PERMISSIONS"),
    (r[(r.MEMBERS = 2)] = "MEMBERS"),
    (r[(r.VERIFICATIONS = 3)] = "VERIFICATIONS"),
    r);
let u = {
    afk_channel_id: () => s.intl.string(s.t.KuYcnZ),
    public_updates_channel_id: () => s.intl.string(s.t.vAyDGR),
    safety_alerts_channel_id: () => s.intl.string(s.t.sMkYEx),
    system_channel_id: () => s.intl.string(s.t.NASFnp),
};
function d(e) {
    var t;
    if (0 === Object.keys(e).length) return null;
    let n = Object.keys(e)[0],
        r = null == (t = u[n]) ? void 0 : t.call(u);
    return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n];
}
let o = "https://discord.gg";
