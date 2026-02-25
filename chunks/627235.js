n.d(t, { A: () => c });
var i = n(64700),
    l = n(554146),
    s = n(843472),
    a = n(155718),
    r = n(810397),
    o = n(49999);
function c(e) {
    let [t, n] = (0, r.A)(e);
    i.useEffect(() => {
        null != t &&
            (t === l.M.FIRST_BOOSTER_UPSELL &&
                s.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: a.Mk.FIRST_BOOSTER }),
            n(o.i.AUTO_DISMISS));
    }, [t, e.id, n]);
}
