"use strict";
n.d(t, { S9: () => _, hT: () => c, tI: () => d });
var i = n(687123),
    r = n(36149),
    s = n(207560),
    a = n(287809),
    o = n(885386),
    l = n(96607);
let u = (e, t, n, i) => (!t || !!i) && !1 !== n && (e ?? !1),
    c = () => {
        let e = o.Qe.useSetting(),
            t = (0, r.b8)(),
            n = (0, l.A)();
        return u(e, (0, s.aX)(i.t.COMMANDS_TOGGLE), n, t);
    },
    d = () => {
        let e = o.Kg.useSetting(),
            t = (0, r.b8)(),
            n = (0, l.A)();
        return u(e, (0, s.aX)(i.t.COMMANDS_TOGGLE), n, t);
    },
    _ = () => {
        let e = o.Qe.getSetting(),
            t = (0, r.Q9)(),
            n = a.default.getCurrentUser();
        return u(e, (0, s.d6)(i.t.COMMANDS_TOGGLE), n?.nsfwAllowed, t);
    };
