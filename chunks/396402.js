n.d(t, { w: () => a });
var i = n(442837),
    r = n(271383),
    s = n(430824),
    l = n(731722);
function a() {
    return (0, i.Wu)([s.Z, r.ZP], () =>
        Object.values(s.Z.getGuilds()).filter((e) => {
            var t, n;
            return (0, l.up)(e) && (null == (t = r.ZP.getSelfMember(e.id)) ? void 0 : t.joinedAt) != null && (null == (n = e.profile) ? void 0 : n.tag) != null;
        })
    );
}
