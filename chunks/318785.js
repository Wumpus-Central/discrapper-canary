l.d(i, { b: () => d });
var t = l(17928),
    n = l(696451),
    r = l(71393),
    u = l(685073);
function d() {
    return (0, t.yK)([r.A, n.Ay], () =>
        r.A.getGuildsArray().filter(
            (e) => (0, u.Rg)(e) && n.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
        ),
    );
}
