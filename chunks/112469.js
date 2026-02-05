n.d(t, { Tx: () => l, q9: () => o });
var i = n(311907),
    s = n(71393),
    r = n(612025),
    a = n(652215);
let l = () => (0, r.xk)().selectedGuildId,
    o = () => {
        let e = l(),
            t = (0, i.bG)([s.A], () => s.A.getGuild(e));
        return t?.features.has(a.GuildFeatures.HUB) ?? !1;
    };
