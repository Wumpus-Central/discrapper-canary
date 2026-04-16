"use strict";
n.d(t, { $: () => c, A: () => p });
var r = n(439372),
    i = n(287809),
    s = n(695515),
    a = n(390660);
let o = 6e4,
    l = !1,
    u = null;
function c() {
    return s.A.isCurrentUserInRestrictedHours();
}
function d() {
    let e = c();
    e !== l && ((l = e) ? (0, a.openRestrictedHoursModal)() : (0, a.k)());
}
function _() {
    (l = !1), (0, a.k)();
}
class f extends r.A {
    stores = new Map().set(i.default, d).set(s.A, d);
    actions = { POST_CONNECTION_OPEN: d, CURRENT_USER_UPDATE: d, LOGOUT: _ };
    _initialize() {
        (l = c()) && (0, a.openRestrictedHoursModal)(), (u = setInterval(d, o));
    }
    _terminate() {
        null != u && (clearInterval(u), (u = null)), (0, a.k)(), (l = !1);
    }
}
let p = new f();
