n.d(t, { w: () => l });
var i = n(442837),
    r = n(271383),
    s = n(430824),
    a = n(731722);
function l() {
    return (0, i.Wu)([s.Z, r.ZP], () =>
        s.Z.getGuildsArray().filter((e) => {
            var t, n;
            return (0, a.up)(e) && (null == (t = r.ZP.getSelfMember(e.id)) ? void 0 : t.joinedAt) != null && (null == (n = e.profile) ? void 0 : n.tag) != null;
        })
    );
}
