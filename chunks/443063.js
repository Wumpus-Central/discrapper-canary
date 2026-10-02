t.d(n, { GY: () => e, Gs: () => l, HV: () => d, yT: () => o });
var p = t(136722),
    u = t(587895),
    c = t(547683),
    r = t(615606),
    a = t(652215);
function o(i, n) {
    if (i.type === a.rbe.GUILD_APP && null != i.application_id) return n?.bot?.id ?? i.application_id;
}
function e(i) {
    return o(i, u.A.getApplication(i.application_id));
}
function d(i) {
    let n = (0, r.q)(i);
    return null != i ? o(i, n) : void 0;
}
function l(i, n, t) {
    return i === n && p.zy(c.yZ, t);
}
