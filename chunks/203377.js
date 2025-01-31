n.d(t, {
    G7: () => s,
    LG: () => d,
    Pg: () => l,
    ZI: () => o,
    _0: () => a
});
var i,
    r = n(388032);
let l = 5,
    s = 10,
    a = 30;
var o = (((i = {})[(i.DISPLAY = 0)] = 'DISPLAY'), (i[(i.PERMISSIONS = 1)] = 'PERMISSIONS'), (i[(i.MEMBERS = 2)] = 'MEMBERS'), (i[(i.VERIFICATIONS = 3)] = 'VERIFICATIONS'), i);
let c = {
    afk_channel_id: () => r.intl.string(r.t.KuYcnZ),
    public_updates_channel_id: () => r.intl.string(r.t.vAyDGR),
    safety_alerts_channel_id: () => r.intl.string(r.t.sMkYEx),
    system_channel_id: () => r.intl.string(r.t.NASFnp)
};
function d(e) {
    var t;
    if (0 === Object.keys(e).length) return null;
    let n = Object.keys(e)[0],
        i = null === (t = c[n]) || void 0 === t ? void 0 : t.call(c);
    return null != i ? '('.concat(i, ') ').concat(e[n]) : e[n];
}
