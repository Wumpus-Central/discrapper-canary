n.d(t, { Z: () => p }), n(388685);
var a = n(473749),
    r = n(442837),
    l = n(570140),
    i = n(211739),
    o = n(680089),
    c = n(9156),
    d = n(152376),
    s = n(724213),
    u = n(981631);
function b(e) {
    l.Z.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e,
    });
}
function p(e) {
    let t = (0, r.e7)([c.ZP], () => c.ZP.getPendingChannelUpdates(e));
    return (
        a.useEffect(() => (b(e), () => b(e)), [e]),
        a.useEffect(() => {
            null != t && (0, d.C1)(e, t);
        }, [e, t]),
        {
            onChannelClick: a.useCallback((e, t, n) => {
                let a = c.ZP.isChannelOptedIn(e, t),
                    r = t === n;
                !a && o.Z.isCollapsed(n) && null != n && (0, i.mJ)(n),
                    (0, s.hi)(e)
                        ? r
                            ? (0, s.rz)(e, { include: new Set([t]) })
                            : (0, s.rz)(e, { exclude: new Set([t]) })
                        : (0, d.k$)(e, t, !a, { section: u.jXE.CHANNEL_BROWSER });
            }, []),
        }
    );
}
