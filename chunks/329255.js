t.d(n, { A: () => h });
var l = t(64700),
    i = t(311907),
    s = t(73153),
    a = t(914430),
    r = t(924985),
    d = t(543465),
    c = t(816662),
    o = t(234053),
    u = t(652215);
function _(e) {
    s.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
function h(e) {
    let n = (0, i.bG)([d.Ay], () => d.Ay.getPendingChannelUpdates(e));
    return (
        l.useEffect(() => (_(e), () => _(e)), [e]),
        l.useEffect(() => {
            null != n && (0, c.hp)(e, n);
        }, [e, n]),
        {
            onChannelClick: l.useCallback((e, n, t) => {
                let l = d.Ay.isChannelOptedIn(e, n),
                    i = n === t;
                !l && r.A.isCollapsed(t) && null != t && (0, a.fh)(t),
                    (0, o.cE)(e)
                        ? i
                            ? (0, o.le)(e, { include: new Set([n]) })
                            : (0, o.le)(e, { exclude: new Set([n]) })
                        : (0, c.zk)(e, n, !l, { section: u.JJy.CHANNEL_BROWSER });
            }, []),
        }
    );
}
