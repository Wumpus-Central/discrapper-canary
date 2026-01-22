n.d(t, {
    S9: () => p,
    hT: () => d,
    tI: () => f,
});
var r = n(687123),
    i = n(36149),
    a = n(207560),
    s = n(287809),
    o = n(64313),
    l = n(253932),
    c = n(406274);
let u = (e, t, n, r) => (!t || !!r) && !1 !== n && null != e && e,
    d = () => {
        let e = l.Qe.useSetting(),
            t = (0, i.b8)(),
            n = (0, c.A)(),
            s = (0, a.aX)(r.t.COMMANDS_TOGGLE);
        return u(e, (0, o.j)("useViewNsfwCommandsOrDefault") || s, n, t);
    },
    f = () => {
        let e = l.Kg.useSetting(),
            t = (0, i.b8)(),
            n = (0, c.A)(),
            s = (0, a.aX)(r.t.COMMANDS_TOGGLE);
        return u(e, (0, o.j)("useViewNsfwGuildsOrDefault") || s, n, t);
    },
    p = () => {
        let e = l.Qe.getSetting(),
            t = (0, i.Q9)(),
            n = s.default.getCurrentUser(),
            c = (0, a.d6)(r.t.COMMANDS_TOGGLE);
        return u(e, (0, o.o)("getViewNsfwCommandsOrDefault") || c, null == n ? void 0 : n.nsfwAllowed, t);
    };
