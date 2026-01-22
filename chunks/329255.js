n.d(t, {
    A: () => b,
}),
    n(896048);
var l = n(64700),
    r = n(311907),
    i = n(73153),
    a = n(914430),
    s = n(924985),
    c = n(543465),
    d = n(816662),
    o = n(234053),
    u = n(652215);

function f(e) {
    i.h.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e,
    });
}

function b(e) {
    let t = (0, r.bG)([c.Ay], () => c.Ay.getPendingChannelUpdates(e));
    return (
        l.useEffect(() => (f(e), () => f(e)), [e]),
        l.useEffect(() => {
            null != t && (0, d.hp)(e, t);
        }, [e, t]),
        {
            onChannelClick: l.useCallback((e, t, n) => {
                let l = c.Ay.isChannelOptedIn(e, t),
                    r = t === n;
                !l && s.A.isCollapsed(n) && null != n && (0, a.fh)(n),
                    (0, o.cE)(e)
                        ? r
                            ? (0, o.le)(e, {
                                  include: new Set([t]),
                              })
                            : (0, o.le)(e, {
                                  exclude: new Set([t]),
                              })
                        : (0, d.zk)(e, t, !l, {
                              section: u.JJy.CHANNEL_BROWSER,
                          });
            }, []),
        }
    );
}
