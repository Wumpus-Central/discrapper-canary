n.d(t, { b: () => o });
var r = n(311907),
    i = n(696451),
    a = n(71393),
    s = n(685073);
function o() {
    return (0, r.yK)([a.A, i.Ay], () =>
        a.A.getGuildsArray().filter((e) => {
            var t, n;
            return (
                (0, s.Rg)(e) &&
                (null == (t = i.Ay.getSelfMember(e.id)) ? void 0 : t.joinedAt) != null &&
                (null == (n = e.profile) ? void 0 : n.tag) != null
            );
        }),
    );
}
