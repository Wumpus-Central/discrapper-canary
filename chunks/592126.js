t.d(n, { Z: () => o });
var l = t(442837),
    i = t(241155),
    r = t(430824);
function o(e, n) {
    return (0, l.cj)(
        [r.Z, i.Z],
        () => {
            let t = r.Z.getGuild(e),
                l = null != t;
            return (
                null == t && null != n && (t = i.Z.getCachedGuildByEventId(n)),
                {
                    isMember: l,
                    guild: t
                }
            );
        },
        [e, n]
    );
}
