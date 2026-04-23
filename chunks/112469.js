n.d(t, { Tx: () => r, q9: () => o });
var i = n(311907),
    s = n(71393),
    l = n(612025),
    a = n(652215);
let r = () => (0, l.xk)().selectedGuildId,
    o = () => {
        let e = r(),
            t = (0, i.bG)([s.A], () => s.A.getGuild(e));
        return t?.features.has(a.GuildFeatures.HUB) ?? !1;
    };
