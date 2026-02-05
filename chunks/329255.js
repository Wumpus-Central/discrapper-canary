n.d(t, { A: () => h });
var l = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(914430),
    r = n(924985),
    d = n(543465),
    c = n(816662),
    o = n(234053),
    u = n(652215);
function _(e) {
    s.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
function h(e) {
    let t = (0, i.bG)([d.Ay], () => d.Ay.getPendingChannelUpdates(e));
    return (
        l.useEffect(() => (_(e), () => _(e)), [e]),
        l.useEffect(() => {
            null != t && (0, c.hp)(e, t);
        }, [e, t]),
        {
            onChannelClick: l.useCallback((e, t, n) => {
                let l = d.Ay.isChannelOptedIn(e, t),
                    i = t === n;
                !l && r.A.isCollapsed(n) && null != n && (0, a.fh)(n),
                    (0, o.cE)(e)
                        ? i
                            ? (0, o.le)(e, { include: new Set([t]) })
                            : (0, o.le)(e, { exclude: new Set([t]) })
                        : (0, c.zk)(e, t, !l, { section: u.JJy.CHANNEL_BROWSER });
            }, []),
        }
    );
}
