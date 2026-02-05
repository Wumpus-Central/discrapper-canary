"use strict";
n.d(t, { S9: () => f, hT: () => d, tI: () => _ });
var r = n(687123),
    i = n(36149),
    a = n(207560),
    s = n(287809),
    o = n(64313),
    l = n(253932),
    u = n(406274);
let c = (e, t, n, r) => (!t || !!r) && !1 !== n && (e ?? !1),
    d = () => {
        let e = l.Qe.useSetting(),
            t = (0, i.b8)(),
            n = (0, u.A)(),
            s = (0, a.aX)(r.t.COMMANDS_TOGGLE);
        return c(e, (0, o.j)("useViewNsfwCommandsOrDefault") || s, n, t);
    },
    _ = () => {
        let e = l.Kg.useSetting(),
            t = (0, i.b8)(),
            n = (0, u.A)(),
            s = (0, a.aX)(r.t.COMMANDS_TOGGLE);
        return c(e, (0, o.j)("useViewNsfwGuildsOrDefault") || s, n, t);
    },
    f = () => {
        let e = l.Qe.getSetting(),
            t = (0, i.Q9)(),
            n = s.default.getCurrentUser(),
            u = (0, a.d6)(r.t.COMMANDS_TOGGLE);
        return c(e, (0, o.o)("getViewNsfwCommandsOrDefault") || u, n?.nsfwAllowed, t);
    };
