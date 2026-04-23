n.d(t, { A: () => l, G: () => _ });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(818348);
function _(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(s.xB.ADMINISTRATOR, t);
}
function l(e) {
    return (0, i.bG)([a.A, r.A], () => _(a.A, r.A.getGuild(e)));
}
