var i = n(855986),
    r = n(967198),
    a = n(181079),
    s = n(5180);
function l(e, t, n) {
    return !!(n && (0, s.ai)(t.getGuildId())) || e.favoriteGuildEnabled;
}
n.d(
    t,
    {},
    {
        A: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return (0, i.bG)([a.A, r.A], () => l(a.A, r.A, e), [e]);
        },
        J: function () {
            return l(a.A, r.A, !0);
        },
    },
);
