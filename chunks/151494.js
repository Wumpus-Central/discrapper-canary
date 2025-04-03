n.d(t, {
    I: () => c,
    Z: () => _
});
var l = n(442837),
    o = n(430824),
    r = n(50101),
    i = n(317169),
    a = n(981631);
function c(e) {
    var t, n;
    let l = (0, r.gV)(e, 'useGuildPowerupsBoostCount'),
        c = (0, i.I)(e),
        _ = null != (n = null == (t = o.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : a.Eu4.NONE;
    return l ? a.oCV[_] + c.available : c.total;
}
function _(e) {
    let t = (0, r.Ek)(e, 'useGuildPowerupsBoostCount'),
        n = (0, i.Z)(e),
        c = (0, l.e7)([o.Z], () => {
            var t, n;
            return null != (n = null == (t = o.Z.getGuild(e)) ? void 0 : t.premiumTier) ? n : a.Eu4.NONE;
        });
    return t ? a.oCV[c] + n.available : n.total;
}
