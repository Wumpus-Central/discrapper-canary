n.d(t, { A: () => d }), n(321073);
var i = n(311907),
    l = n(554146),
    s = n(932001),
    a = n(801667),
    r = n(71393),
    o = n(320501),
    c = n(652215);
function d(e) {
    let t = (0, i.bG)([o.A], () => o.A.isReady(e.id), [e.id]),
        n = [],
        d = (0, i.bG)([r.A], () => r.A.getGuild(e.guild_id)),
        u = (0, a.A)(e);
    t && u && n.push(l.M.FIRST_BOOSTER_UPSELL);
    let [h, m] = (0, s.ww)(n, d?.id ?? c.eGj);
    return [h, m];
}
