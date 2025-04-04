n.d(t, {
    I: () => l,
    Z: () => c
});
var r = n(442837),
    i = n(430824),
    o = n(50101),
    a = n(317169),
    s = n(981631);
function l(e) {
    var t, n;
    let r = (0, o.gV)(e, 'useGuildPowerupsBoostCount'),
        l = (0, a.I)(e),
        c = null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : s.Eu4.NONE;
    return r ? s.oCV[c] + l.available : l.total;
}
function c(e) {
    let t = (0, o.Ek)(e, 'useGuildPowerupsBoostCount'),
        n = (0, a.Z)(e),
        l = (0, r.e7)([i.Z], () => {
            var t, n;
            return null != (n = null == (t = i.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : s.Eu4.NONE;
        });
    return t ? s.oCV[l] + n.available : n.total;
}
