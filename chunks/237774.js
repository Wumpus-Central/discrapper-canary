n.d(t, { k: () => c, p: () => h }), n(321073);
var i = n(495544),
    r = n(763827),
    l = n(954571),
    a = n(935208),
    s = n(85277);
let o = new Map(),
    d = -1;
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (e) {
        let e = a.default.extractTimestamp(i.default.getId());
        e !== d && (h(!1), (d = e));
    }
    return d % 10 == 0;
}
function c(e, t) {
    u() && (o.has(e) || o.set(e, []), o.get(e)?.push({ timestamp: new Date(), rtc_state: r.A.getState(), ...t }));
}
function h() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!u(e)) return void o.clear();
    for (let [e, t] of o) l.default.track(e, (0, s.z)(e, t));
    o.clear();
}
