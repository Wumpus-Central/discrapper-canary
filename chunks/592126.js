n.d(t, { Z: () => a });
var i = n(442837),
    l = n(241155),
    r = n(430824);
function a(e, t) {
    return (0, i.cj)([r.Z, l.Z], () => {
        let n = r.Z.getGuild(e),
            i = null != n;
        return (
            null == n && null != t && (n = l.Z.getCachedGuildByEventId(t)),
            {
                isMember: i,
                guild: n,
            }
        );
    }, [e, t]);
}
