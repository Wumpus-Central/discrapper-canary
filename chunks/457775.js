n.d(t, {
    Ce: () => c,
    f7: () => d,
}),
    n(896048),
    n(64700);
var r = n(846293),
    l = n(167189),
    o = n(833291),
    i = n(299091),
    s = n(711014),
    a = n(998218);
let c = (e) => null != e.text;
async function u(e) {
    try {
        var t;
        let n = (0, o.br)(e);
        if (null == n || n.type !== l.I.INVITE) return !1;
        let a = i.A.getInvite(n.code);
        if (null == a) {
            let { invite: e } = await r.Ay.resolveInvite(n.code, "Markdown Link");
            a = e;
        }
        if (null == a) return !1;
        let c = s.Ay.getFlattenedGuildIds(),
            u = null == a || null == (t = a.guild) ? void 0 : t.id;
        return null != u && c.includes(u);
    } catch (e) {
        return !1;
    }
}
async function d(e) {
    try {
        if (a.A.isDiscordUrl(e)) return !0;
        return await u(e);
    } catch (e) {
        return !1;
    }
}
