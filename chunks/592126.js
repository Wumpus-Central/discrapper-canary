t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(442837),
    a = t(241155),
    l = t(430824);
function r(e, n) {
    return (0, i.cj)(
        [l.Z, a.Z],
        () => {
            let t = l.Z.getGuild(e),
                i = null != t;
            return (
                null == t && null != n && (t = a.Z.getCachedGuildByEventId(n)),
                {
                    isMember: i,
                    guild: t
                }
            );
        },
        [e, n]
    );
}
