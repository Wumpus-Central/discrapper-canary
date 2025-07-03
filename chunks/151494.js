n.d(t, {
    I: () => l,
    Z: () => c
});
var r = n(442837),
    i = n(430824),
    a = n(50101),
    o = n(317169),
    s = n(981631);
function l(e) {
    var t, n;
    let r = (0, a.gV)(e, 'useGuildPowerupsBoostCount'),
        l = (0, o.I)(e),
        c = null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : s.Eu4.NONE;
    return r ? s.oCV[c] + l.available : l.total;
}
function c(e) {
    let t = (0, a.Ek)(e, 'useGuildPowerupsBoostCount'),
        n = (0, o.Z)(e),
        l = (0, r.e7)([i.Z], () => {
            var t, n;
            return null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : s.Eu4.NONE;
        }),
        c = (0, r.e7)([i.Z], () => {
            var t;
            return (null == (t = i.Z.getGuild(e)) ? void 0 : t.features.has(s.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        })
            ? 0
            : s.oCV[l];
    return t ? c + n.available : n.total;
}
