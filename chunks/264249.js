"use strict";
n.d(t, { S9: () => _, hT: () => c, tI: () => d });
var r = n(687123),
    i = n(36149),
    s = n(207560),
    a = n(287809),
    o = n(253932),
    l = n(406274);
let u = (e, t, n, r) => (!t || !!r) && !1 !== n && (e ?? !1),
    c = () => {
        let e = o.Qe.useSetting(),
            t = (0, i.b8)(),
            n = (0, l.A)();
        return u(e, (0, s.aX)(r.t.COMMANDS_TOGGLE), n, t);
    },
    d = () => {
        let e = o.Kg.useSetting(),
            t = (0, i.b8)(),
            n = (0, l.A)();
        return u(e, (0, s.aX)(r.t.COMMANDS_TOGGLE), n, t);
    },
    _ = () => {
        let e = o.Qe.getSetting(),
            t = (0, i.Q9)(),
            n = a.default.getCurrentUser();
        return u(e, (0, s.d6)(r.t.COMMANDS_TOGGLE), n?.nsfwAllowed, t);
    };
