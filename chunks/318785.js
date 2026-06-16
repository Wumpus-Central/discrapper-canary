l.d(i, { b: () => d });
var n = l(17928),
    t = l(696451),
    r = l(71393),
    u = l(685073);
function d() {
    return (0, n.yK)([r.A, t.Ay], () =>
        r.A.getGuildsArray().filter(
            (e) => (0, u.Rg)(e) && t.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
        ),
    );
}
