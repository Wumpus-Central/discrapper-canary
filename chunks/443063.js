"use strict";
n.d(t, { GY: () => d, Gs: () => u, HV: () => c, yT: () => o });
var i = n(136722),
    r = n(587895),
    a = n(547683),
    s = n(615606),
    l = n(652215);
function o(e, t) {
    if (e.type === l.rbe.GUILD_APP && null != e.application_id) return t?.bot?.id ?? e.application_id;
}
function d(e) {
    return o(e, r.A.getApplication(e.application_id));
}
function c(e) {
    let t = (0, s.q)(e);
    return null != e ? o(e, t) : void 0;
}
function u(e, t, n) {
    return e === t && i.zy(a.yZ, n);
}
