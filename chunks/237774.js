"use strict";
n.d(t, { k: () => l, p: () => u }), n(321073);
var r = n(383501),
    i = n(954571),
    s = n(85277),
    a = n(359171);
let o = new Map();
function l(e, t) {
    o.has(e) || o.set(e, []), o.get(e)?.push({ timestamp: new Date(), rtc_state: r.A.getState(), ...t });
}
function u() {
    if (!(0, a.j)()) return void o.clear();
    for (let [e, t] of o) i.default.track(e, (0, s.z)(e, t));
    o.clear();
}
