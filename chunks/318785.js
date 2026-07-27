d.d(t, { b: () => o });
var a = d(17928),
    c = d(696451),
    n = d(71393),
    s = d(685073);
function o() {
    return (0, a.yK)([n.A, c.Ay], () =>
        n.A.getGuildsArray().filter((e) => {
            let t = c.Ay.getSelfMember(e.id);
            return (0, s.Rg)(e) && t?.joinedAt != null && !0 !== t.isPending && e.profile?.tag != null;
        }),
    );
}
