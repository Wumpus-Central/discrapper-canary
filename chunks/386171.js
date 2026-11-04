var i = n(687123),
    r = n(36149),
    a = n(207560),
    s = n(287809),
    l = n(253932),
    o = n(96607);
function d(e, t, n, i) {
    return (!t || !!i) && !1 !== n && (e ?? !1);
}
n.d(
    t,
    {},
    {
        S9: function () {
            let e = l.Qe.getSetting(),
                t = (0, r.Q9)(),
                n = s.default.getCurrentUser();
            return d(e, (0, a.d6)(i.t.COMMANDS_TOGGLE), n?.nsfwAllowed, t);
        },
        hT: function () {
            let e = l.Qe.useSetting(),
                t = (0, r.b8)(),
                n = (0, o.A)();
            return d(e, (0, a.aX)(i.t.COMMANDS_TOGGLE), n, t);
        },
        tI: function () {
            let e = l.Kg.useSetting(),
                t = (0, r.b8)(),
                n = (0, o.A)();
            return d(e, (0, a.aX)(i.t.COMMANDS_TOGGLE), n, t);
        },
    },
);
