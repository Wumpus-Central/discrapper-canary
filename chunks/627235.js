n.d(t, { A: () => h });
var i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(843472),
    r = n(155718),
    o = n(320501),
    c = n(309010),
    d = n(810397),
    u = n(49999);
function h(e) {
    let [t, n] = (0, d.A)(e),
        h = (0, l.bG)([o.A], () => o.A.isReady(e.id), [e.id]);
    i.useEffect(() => {
        h &&
            null != t &&
            c.A.getChannelId() === e.id &&
            (t === s.M.FIRST_BOOSTER_UPSELL &&
                a.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: r.Mk.FIRST_BOOSTER }),
            n(u.i.DISMISS));
    }, [t, h, e.id, n]);
}
