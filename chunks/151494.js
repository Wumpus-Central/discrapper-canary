n.d(t, {
    I: () => c,
    Z: () => u
});
var r = n(442837),
    i = n(430824),
    o = n(905128),
    a = n(50101),
    s = n(317169),
    l = n(981631);
function c(e) {
    var t, n;
    let r = (0, a.gV)(e, 'useGuildPowerupsBoostCount'),
        c = (0, s.I)(e),
        u = null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : l.Eu4.NONE,
        d = o.Z.hasFetchedUnlockedPowerups(e);
    return r ? (d ? l.oCV[u] + c.available : 0) : c.total;
}
function u(e) {
    let t = (0, a.Ek)(e, 'useGuildPowerupsBoostCount'),
        n = (0, s.Z)(e),
        c = (0, r.e7)([i.Z], () => {
            var t, n;
            return null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : l.Eu4.NONE;
        }),
        u = (0, r.e7)([o.Z], () => o.Z.hasFetchedUnlockedPowerups(e));
    return t ? (u ? l.oCV[c] + n.available : 0) : n.total;
}
