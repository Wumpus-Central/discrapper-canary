n.d(t, {
    D: () => s,
    Z: () => l
});
var r = n(442837),
    i = n(430824),
    o = n(496675),
    a = n(231338);
function s(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(a.Pl.ADMINISTRATOR, t);
}
function l(e) {
    return (0, r.e7)([o.Z, i.Z], () => s(o.Z, i.Z.getGuild(e)));
}
