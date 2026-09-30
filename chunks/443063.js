n.d(t, { GY: () => o, Gs: () => l, HV: () => d, yT: () => e });
var p = n(136722),
    a = n(587895),
    r = n(547683),
    u = n(615606),
    c = n(652215);
function e(i, t) {
    if (i.type === c.rbe.GUILD_APP && null != i.application_id) return t?.bot?.id ?? i.application_id;
}
function o(i) {
    return e(i, a.A.getApplication(i.application_id));
}
function d(i) {
    let t = (0, u.q)(i);
    return null != i ? e(i, t) : void 0;
}
function l(i, t, n) {
    return i === t && p.zy(r.yZ, n);
}
