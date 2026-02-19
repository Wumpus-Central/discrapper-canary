"use strict";
n.d(t, { k: () => _, p: () => f }), n(321073);
var r = n(961350),
    i = n(383501),
    s = n(954571),
    a = n(661191),
    o = n(85277);
let l = 10,
    u = new Map(),
    c = -1;
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (e) {
        let e = a.default.extractTimestamp(r.default.getId());
        e !== c && (f(!1), (c = e));
    }
    return c % l == 0;
}
function _(e, t) {
    d() && (u.has(e) || u.set(e, []), u.get(e)?.push({ timestamp: new Date(), rtc_state: i.A.getState(), ...t }));
}
function f() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!d(e)) return void u.clear();
    for (let [e, t] of u) s.default.track(e, (0, o.z)(e, t));
    u.clear();
}
