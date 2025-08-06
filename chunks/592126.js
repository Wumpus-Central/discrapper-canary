t.d(n, { Z: () => o });
var i = t(442837),
    r = t(241155),
    l = t(430824);
function o(e, n) {
    return (0, i.cj)(
        [l.Z, r.Z],
        () => {
            let t = l.Z.getGuild(e),
                i = null != t;
            return (
                null == t && null != n && (t = r.Z.getCachedGuildByEventId(n)),
                {
                    isMember: i,
                    guild: t
                }
            );
        },
        [e, n]
    );
}
