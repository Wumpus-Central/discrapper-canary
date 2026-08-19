n.d(i, { b: () => d });
var t = n(17928),
    l = n(696451),
    r = n(71393),
    u = n(685073);
function d() {
    return (0, t.yK)([r.A, l.Ay], () =>
        r.A.getGuildsArray().filter((e) => {
            let i = l.Ay.getSelfMember(e.id);
            return (0, u.Rg)(e) && i?.joinedAt != null && !0 !== i.isPending && e.profile?.tag != null;
        }),
    );
}
