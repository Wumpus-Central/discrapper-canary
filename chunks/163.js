n.d(t, { Z: () => h }), n(388685);
var r = n(192379),
    l = n(442837),
    a = n(570140),
    i = n(211739),
    o = n(680089),
    s = n(9156),
    c = n(152376),
    d = n(724213),
    u = n(981631);
function m(e) {
    a.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
function h(e) {
    let t = (0, l.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
    return (
        r.useEffect(() => (m(e), () => m(e)), [e]),
        r.useEffect(() => {
            null != t && (0, c.C1)(e, t);
        }, [e, t]),
        {
            onChannelClick: r.useCallback((e, t, n) => {
                let r = s.ZP.isChannelOptedIn(e, t),
                    l = t === n;
                !r && o.Z.isCollapsed(n) && null != n && (0, i.mJ)(n), (0, d.hi)(e) ? (l ? (0, d.rz)(e, { include: new Set([t]) }) : (0, d.rz)(e, { exclude: new Set([t]) })) : (0, c.k$)(e, t, !r, { section: u.jXE.CHANNEL_BROWSER });
            }, [])
        }
    );
}
