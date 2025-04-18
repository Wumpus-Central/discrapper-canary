n.d(t, { Z: () => l });
var r = n(442837),
    i = n(430824),
    a = n(496675),
    o = n(231338);
function s(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(o.Pl.ADMINISTRATOR, t);
}
function l(e) {
    return (0, r.e7)([a.Z, i.Z], () => s(a.Z, i.Z.getGuild(e)));
}
