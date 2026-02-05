n.d(t, { b: () => l });
var i = n(311907),
    s = n(696451),
    r = n(71393),
    a = n(685073);
function l() {
    return (0, i.yK)([r.A, s.Ay], () =>
        r.A.getGuildsArray().filter(
            (e) => (0, a.Rg)(e) && s.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
        ),
    );
}
