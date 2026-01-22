n.d(t, {
    GG: () => p,
    Xg: () => d,
    q3: () => f,
});
var r = n(310882),
    i = n(81643),
    a = n(980945),
    o = n(594174),
    s = n(312870),
    l = n(695346),
    c = n(682578);
let u = (e, t, n, r) => (!t || !!r) && !1 !== n && null != e && e,
    d = () => {
        let e = l.xM.useSetting(),
            t = (0, i.l6)(),
            n = (0, c.J)(),
            o = (0, a.Uf)(r.X.COMMANDS_TOGGLE);
        return u(e, (0, s.s)("useViewNsfwCommandsOrDefault") || o, n, t);
    },
    f = () => {
        let e = l.DC.useSetting(),
            t = (0, i.l6)(),
            n = (0, c.J)(),
            o = (0, a.Uf)(r.X.COMMANDS_TOGGLE);
        return u(e, (0, s.s)("useViewNsfwGuildsOrDefault") || o, n, t);
    },
    p = () => {
        let e = l.xM.getSetting(),
            t = (0, i.kJ)(),
            n = o.default.getCurrentUser(),
            c = (0, a.ML)(r.X.COMMANDS_TOGGLE);
        return u(e, (0, s.U)("getViewNsfwCommandsOrDefault") || c, null == n ? void 0 : n.nsfwAllowed, t);
    };
