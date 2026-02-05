"use strict";
n.d(t, { A: () => p });
var r = n(439372),
    i = n(287809),
    a = n(936926),
    s = n(390660);
let o = 6e4,
    l = !1,
    u = null;
function c() {
    return (
        !!(0, a.Eq)({ location: "RestrictedHoursManager" }) &&
        (i.default.getCurrentUser()?.restrictedSchedule?.isInRestrictedHours() ?? !1)
    );
}
function d() {
    let e = c();
    e !== l && ((l = e) ? (0, s.u)() : (0, s.k)());
}
function _() {
    d();
}
class f extends r.A {
    stores = new Map().set(i.default, _);
    _initialize() {
        (l = c()) && (0, s.u)(), (u = setInterval(d, o));
    }
    _terminate() {
        null != u && (clearInterval(u), (u = null)), (0, s.k)(), (l = !1);
    }
}
let p = new f();
