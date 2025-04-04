t.d(n, { Z: () => a });
var i = t(442837),
    l = t(241155),
    r = t(430824);
function a(e, n) {
    return (0, i.cj)(
        [r.Z, l.Z],
        () => {
            let t = r.Z.getGuild(e),
                i = null != t;
            return (
                null == t && null != n && (t = l.Z.getCachedGuildByEventId(n)),
                {
                    isMember: i,
                    guild: t
                }
            );
        },
        [e, n]
    );
}
