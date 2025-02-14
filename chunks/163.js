t.d(n, { Z: () => m }), t(47120);
var l = t(192379),
    i = t(442837),
    a = t(570140),
    r = t(211739),
    o = t(680089),
    s = t(9156),
    d = t(152376),
    c = t(724213),
    u = t(981631);
function h(e) {
    a.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
function m(e) {
    let n = (0, i.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
    return (
        l.useEffect(() => (h(e), () => h(e)), [e]),
        l.useEffect(() => {
            null != n && (0, d.C1)(e, n);
        }, [e, n]),
        {
            onChannelClick: l.useCallback((e, n, t) => {
                let l = s.ZP.isChannelOptedIn(e, n),
                    i = n === t;
                !l && o.Z.isCollapsed(t) && null != t && (0, r.mJ)(t), (0, c.hi)(e) ? (i ? (0, c.rz)(e, { include: new Set([n]) }) : (0, c.rz)(e, { exclude: new Set([n]) })) : (0, d.k$)(e, n, !l, { section: u.jXE.CHANNEL_BROWSER });
            }, [])
        }
    );
}
