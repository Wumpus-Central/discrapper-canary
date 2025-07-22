(n.d(t, { Z: () => h }), n(388685));
var l = n(73800),
    r = n(442837),
    i = n(570140),
    a = n(211739),
    o = n(680089),
    s = n(9156),
    c = n(152376),
    d = n(724213),
    u = n(981631);
function m(e) {
    i.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
function h(e) {
    let t = (0, r.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
    return (
        l.useEffect(() => (m(e), () => m(e)), [e]),
        l.useEffect(() => {
            null != t && (0, c.C1)(e, t);
        }, [e, t]),
        {
            onChannelClick: l.useCallback((e, t, n) => {
                let l = s.ZP.isChannelOptedIn(e, t),
                    r = t === n;
                (!l && o.Z.isCollapsed(n) && null != n && (0, a.mJ)(n), (0, d.hi)(e) ? (r ? (0, d.rz)(e, { include: new Set([t]) }) : (0, d.rz)(e, { exclude: new Set([t]) })) : (0, c.k$)(e, t, !l, { section: u.jXE.CHANNEL_BROWSER }));
            }, [])
        }
    );
}
