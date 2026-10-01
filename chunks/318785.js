a.d(t, { b: () => r });
var d = a(17928),
    c = a(696451),
    n = a(71393),
    s = a(685073);
function r() {
    return (0, d.yK)([n.A, c.Ay], () =>
        n.A.getGuildsArray().filter((e) => {
            let t = c.Ay.getSelfMember(e.id);
            return (0, s.Rg)(e) && t?.joinedAt != null && !0 !== t.isPending && e.profile?.tag != null;
        }),
    );
}
