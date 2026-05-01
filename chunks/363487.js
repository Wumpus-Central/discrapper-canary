n.d(t, { A: () => o, G: () => l });
var i = n(17928),
    a = n(71393),
    r = n(576705),
    s = n(818348);
function l(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(s.xB.ADMINISTRATOR, t);
}
function o(e) {
    return (0, i.bG)([r.A, a.A], () => l(r.A, a.A.getGuild(e)));
}
