n.d(t, {
    GG: () => d,
    Xg: () => c,
    q3: () => u,
});
var r = n(532812),
    i = n(81643),
    a = n(594174),
    o = n(695346),
    s = n(682578);
let l = (e, t, n, r) => (!t || !!r) && !1 !== n && null != e && e,
    c = () => {
        let e = o.xM.useSetting(),
            t = (0, i.l6)(),
            n = (0, s.J)();
        return l(e, (0, r.H)("useViewNsfwCommandsOrDefault"), n, t);
    },
    u = () => {
        let e = o.DC.useSetting(),
            t = (0, i.l6)(),
            n = (0, s.J)();
        return l(e, (0, r.H)("useViewNsfwGuildsOrDefault"), n, t);
    },
    d = () => {
        let e = o.xM.getSetting(),
            t = (0, i.kJ)(),
            n = a.default.getCurrentUser();
        return l(e, (0, r.S)("getViewNsfwCommandsOrDefault"), null == n ? void 0 : n.nsfwAllowed, t);
    };
