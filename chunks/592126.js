t.d(n, { Z: () => r });
var i = t(442837),
    l = t(241155),
    a = t(430824);
function r(e, n) {
    return (0, i.cj)(
        [a.Z, l.Z],
        () => {
            let t = a.Z.getGuild(e),
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
