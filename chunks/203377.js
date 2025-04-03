n.d(t, {
    G7: () => a,
    LG: () => d,
    Pg: () => s,
    ZI: () => o,
    _0: () => l
});
var r,
    i = n(388032);
let s = 5,
    a = 10,
    l = 30;
var o = (((r = {})[(r.DISPLAY = 0)] = 'DISPLAY'), (r[(r.PERMISSIONS = 1)] = 'PERMISSIONS'), (r[(r.MEMBERS = 2)] = 'MEMBERS'), (r[(r.VERIFICATIONS = 3)] = 'VERIFICATIONS'), r);
let c = {
    afk_channel_id: () => i.NW.string(i.t.KuYcnZ),
    public_updates_channel_id: () => i.NW.string(i.t.vAyDGR),
    safety_alerts_channel_id: () => i.NW.string(i.t.sMkYEx),
    system_channel_id: () => i.NW.string(i.t.NASFnp)
};
function d(e) {
    var t;
    if (0 === Object.keys(e).length) return null;
    let n = Object.keys(e)[0],
        r = null == (t = c[n]) ? void 0 : t.call(c);
    return null != r ? '('.concat(r, ') ').concat(e[n]) : e[n];
}
