n.d(t, { b: () => r });
var i = n(311907),
    s = n(696451),
    l = n(71393),
    a = n(685073);
function r() {
    return (0, i.yK)([l.A, s.Ay], () =>
        l.A.getGuildsArray().filter(
            (e) => (0, a.Rg)(e) && s.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
        ),
    );
}
