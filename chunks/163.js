t.d(n, { Z: () => h }), t(388685);
var r = t(473749),
    l = t(442837),
    i = t(570140),
    a = t(211739),
    o = t(680089),
    s = t(9156),
    c = t(152376),
    d = t(724213),
    u = t(981631);
function p(e) {
    i.Z.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e,
    });
}
function h(e) {
    let n = (0, l.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
    return (
        r.useEffect(() => (p(e), () => p(e)), [e]),
        r.useEffect(() => {
            null != n && (0, c.C1)(e, n);
        }, [e, n]),
        {
            onChannelClick: r.useCallback((e, n, t) => {
                let r = s.ZP.isChannelOptedIn(e, n),
                    l = n === t;
                !r && o.Z.isCollapsed(t) && null != t && (0, a.mJ)(t),
                    (0, d.hi)(e)
                        ? l
                            ? (0, d.rz)(e, { include: new Set([n]) })
                            : (0, d.rz)(e, { exclude: new Set([n]) })
                        : (0, c.k$)(e, n, !r, { section: u.jXE.CHANNEL_BROWSER });
            }, []),
        }
    );
}
