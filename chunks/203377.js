t.d(r, {
    G7: () => s,
    LG: () => d,
    Pg: () => a,
    ZI: () => o,
    _0: () => l,
    mf: () => u
});
var n,
    i = t(388032);
let a = 5,
    s = 10,
    l = 30;
var o = (((n = {})[(n.DISPLAY = 0)] = 'DISPLAY'), (n[(n.PERMISSIONS = 1)] = 'PERMISSIONS'), (n[(n.MEMBERS = 2)] = 'MEMBERS'), (n[(n.VERIFICATIONS = 3)] = 'VERIFICATIONS'), n);
let c = {
    afk_channel_id: () => i.intl.string(i.t.KuYcnZ),
    public_updates_channel_id: () => i.intl.string(i.t.vAyDGR),
    safety_alerts_channel_id: () => i.intl.string(i.t.sMkYEx),
    system_channel_id: () => i.intl.string(i.t.NASFnp)
};
function d(e) {
    var r;
    if (0 === Object.keys(e).length) return null;
    let t = Object.keys(e)[0],
        n = null == (r = c[t]) ? void 0 : r.call(c);
    return null != n ? '('.concat(n, ') ').concat(e[t]) : e[t];
}
let u = 'https://discord.gg';
