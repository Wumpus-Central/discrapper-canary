n.d(t, {
    A: () => l,
    G: () => o,
});
var r = n(311907),
    i = n(71393),
    a = n(576705),
    s = n(818348);
function o(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(s.xB.ADMINISTRATOR, t);
}
function l(e) {
    return (0, r.bG)([a.A, i.A], () => o(a.A, i.A.getGuild(e)));
}
