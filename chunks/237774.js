"use strict";
n.d(t, { k: () => c, p: () => _ }), n(321073);
var r = n(961350),
    i = n(383501),
    s = n(954571),
    a = n(661191),
    o = n(85277);
let l = new Map(),
    u = -1;
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (e) {
        let e = a.default.extractTimestamp(r.default.getId());
        e !== u && (_(!1), (u = e));
    }
    return u % 10 == 0;
}
function c(e, t) {
    d() && (l.has(e) || l.set(e, []), l.get(e)?.push({ timestamp: new Date(), rtc_state: i.A.getState(), ...t }));
}
function _() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!d(e)) return void l.clear();
    for (let [e, t] of l) s.default.track(e, (0, o.z)(e, t));
    l.clear();
}
