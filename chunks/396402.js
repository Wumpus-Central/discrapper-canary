n.d(t, { w: () => s });
var r = n(442837),
    i = n(271383),
    a = n(430824),
    o = n(731722);
function s() {
    return (0, r.Wu)([a.Z, i.ZP], () =>
        a.Z.getGuildsArray().filter((e) => {
            var t, n;
            return (
                (0, o.up)(e) &&
                (null == (t = i.ZP.getSelfMember(e.id)) ? void 0 : t.joinedAt) != null &&
                (null == (n = e.profile) ? void 0 : n.tag) != null
            );
        }),
    );
}
