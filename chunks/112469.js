n.d(t, { Tx: () => r, q9: () => o });
var i = n(17928),
    l = n(71393),
    s = n(612025),
    a = n(652215);
let r = () => (0, s.xk)().selectedGuildId,
    o = () => {
        let e = r(),
            t = (0, i.bG)([l.A], () => l.A.getGuild(e));
        return t?.features.has(a.GuildFeatures.HUB) ?? !1;
    };
