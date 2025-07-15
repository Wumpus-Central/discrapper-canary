n.d(t, {
    G7: () => s,
    LG: () => c,
    Pg: () => a,
    ZI: () => d,
    _0: () => l,
    mf: () => u
});
var r,
    i = n(388032);
let a = 5,
    s = 10,
    l = 30;
var d = (((r = {})[(r.DISPLAY = 0)] = 'DISPLAY'), (r[(r.PERMISSIONS = 1)] = 'PERMISSIONS'), (r[(r.MEMBERS = 2)] = 'MEMBERS'), (r[(r.VERIFICATIONS = 3)] = 'VERIFICATIONS'), r);
let o = {
    afk_channel_id: () => i.intl.string(i.t.KuYcnZ),
    public_updates_channel_id: () => i.intl.string(i.t.vAyDGR),
    safety_alerts_channel_id: () => i.intl.string(i.t.sMkYEx),
    system_channel_id: () => i.intl.string(i.t.NASFnp)
};
function c(e) {
    var t;
    if (0 === Object.keys(e).length) return null;
    let n = Object.keys(e)[0],
        r = null == (t = o[n]) ? void 0 : t.call(o);
    return null != r ? '('.concat(r, ') ').concat(e[n]) : e[n];
}
let u = 'https://discord.gg';
