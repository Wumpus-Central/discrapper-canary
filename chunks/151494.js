n.d(t, {
    I: () => s,
    Z: () => u
});
var r = n(442837),
    i = n(430824),
    o = n(50101),
    l = n(317169),
    a = n(981631);
function s(e) {
    var t, n;
    let r = (0, o.gV)(e, 'useGuildPowerupsBoostCount'),
        s = (0, l.I)(e),
        u = null !== (n = null === (t = i.Z.getGuild(e)) || void 0 === t ? void 0 : t.premiumTier) && void 0 !== n ? n : a.Eu4.NONE;
    return r ? a.oCV[u] + s.available : s.total;
}
function u(e) {
    let t = (0, o.Ek)(e, 'useGuildPowerupsBoostCount'),
        n = (0, l.Z)(e),
        s = (0, r.e7)([i.Z], () => {
            var t, n;
            return null !== (n = null === (t = i.Z.getGuild(e)) || void 0 === t ? void 0 : t.premiumTier) && void 0 !== n ? n : a.Eu4.NONE;
        });
    return t ? a.oCV[s] + n.available : n.total;
}
