n.d(t, {
    G7: () => l,
    LG: () => o,
    Pg: () => i,
    ZI: () => c,
    _0: () => a,
    mf: () => u,
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
let d = {
    afk_channel_id: () => s.intl.string(s.t.KuYcnZ),
    public_updates_channel_id: () => s.intl.string(s.t.vAyDGR),
    safety_alerts_channel_id: () => s.intl.string(s.t.sMkYEx),
    system_channel_id: () => s.intl.string(s.t.NASFnp),
};
function o(e) {
    var t;
    if (0 === Object.keys(e).length) return null;
    let n = Object.keys(e)[0],
        r = null == (t = d[n]) ? void 0 : t.call(d);
    return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n];
}
let u = "https://discord.gg";
