var i = n(855986),
    r = n(71393),
    a = n(576705),
    s = n(818348);
function l(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(s.xB.ADMINISTRATOR, t);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.bG)([a.A, r.A], () => l(a.A, r.A.getGuild(e)));
        },
        G: l,
    },
);
