t.d(r, {
    G7: () => s,
    LG: () => c,
    Pg: () => i,
    ZI: () => o,
    _0: () => l,
    mf: () => u
});
var n,
    a = t(388032);
let i = 5,
    s = 10,
    l = 30;
var o = (((n = {})[(n.DISPLAY = 0)] = 'DISPLAY'), (n[(n.PERMISSIONS = 1)] = 'PERMISSIONS'), (n[(n.MEMBERS = 2)] = 'MEMBERS'), (n[(n.VERIFICATIONS = 3)] = 'VERIFICATIONS'), n);
let d = {
    afk_channel_id: () => a.intl.string(a.t.KuYcnZ),
    public_updates_channel_id: () => a.intl.string(a.t.vAyDGR),
    safety_alerts_channel_id: () => a.intl.string(a.t.sMkYEx),
    system_channel_id: () => a.intl.string(a.t.NASFnp)
};
function c(e) {
    var r;
    if (0 === Object.keys(e).length) return null;
    let t = Object.keys(e)[0],
        n = null == (r = d[t]) ? void 0 : r.call(d);
    return null != n ? '('.concat(n, ') ').concat(e[t]) : e[t];
}
let u = 'https://discord.gg';
