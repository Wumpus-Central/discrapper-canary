"use strict";
n.d(t, { S9: () => _, hT: () => c, tI: () => u });
var i = n(687123),
    r = n(36149),
    a = n(207560),
    s = n(287809),
    l = n(885386),
    o = n(96607);
function d(e, t, n, i) {
    return (!t || !!i) && !1 !== n && (e ?? !1);
}
function c() {
    let e = l.Qe.useSetting(),
        t = (0, r.b8)(),
        n = (0, o.A)();
    return d(e, (0, a.aX)(i.t.COMMANDS_TOGGLE), n, t);
}
function u() {
    let e = l.Kg.useSetting(),
        t = (0, r.b8)(),
        n = (0, o.A)();
    return d(e, (0, a.aX)(i.t.COMMANDS_TOGGLE), n, t);
}
function _() {
    let e = l.Qe.getSetting(),
        t = (0, r.Q9)(),
        n = s.default.getCurrentUser();
    return d(e, (0, a.d6)(i.t.COMMANDS_TOGGLE), n?.nsfwAllowed, t);
}
