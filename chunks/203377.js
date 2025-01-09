n.d(t, {
    G7: function () {
        return a;
    },
    LG: function () {
        return d;
    },
    Pg: function () {
        return s;
    },
    ZI: function () {
        return r;
    },
    _0: function () {
        return o;
    }
});
var i,
    r,
    l = n(388032);
let s = 5,
    a = 10,
    o = 30;
((i = r || (r = {}))[(i.DISPLAY = 0)] = 'DISPLAY'), (i[(i.PERMISSIONS = 1)] = 'PERMISSIONS'), (i[(i.MEMBERS = 2)] = 'MEMBERS'), (i[(i.VERIFICATIONS = 3)] = 'VERIFICATIONS');
let c = {
    afk_channel_id: () => l.intl.string(l.t.KuYcnZ),
    public_updates_channel_id: () => l.intl.string(l.t.vAyDGR),
    safety_alerts_channel_id: () => l.intl.string(l.t.sMkYEx),
    system_channel_id: () => l.intl.string(l.t.NASFnp)
};
function d(e) {
    var t;
    if (0 === Object.keys(e).length) return null;
    let n = Object.keys(e)[0],
        i = null === (t = c[n]) || void 0 === t ? void 0 : t.call(c);
    return null != i ? '('.concat(i, ') ').concat(e[n]) : e[n];
}
