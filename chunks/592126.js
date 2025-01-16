n.d(t, {
    Z: function () {
        return r;
    }
});
var d = n(442837),
    u = n(241155),
    i = n(430824);
function r(e, t) {
    return (0, d.cj)(
        [i.Z, u.Z],
        () => {
            let n = i.Z.getGuild(e),
                d = null != n;
            return (
                null == n && null != t && (n = u.Z.getCachedGuildByEventId(t)),
                {
                    isMember: d,
                    guild: n
                }
            );
        },
        [e, t]
    );
}
