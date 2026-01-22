n.d(t, {
    Tx: () => o,
    q9: () => l,
});
var r = n(311907),
    i = n(71393),
    a = n(612025),
    s = n(652215);
let o = () => (0, a.xk)().selectedGuildId,
    l = () => {
        var e;
        let t = o(),
            n = (0, r.bG)([i.A], () => i.A.getGuild(t));
        return null != (e = null == n ? void 0 : n.features.has(s.GuildFeatures.HUB)) && e;
    };
