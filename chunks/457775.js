n.d(t, { f: () => c });
var r = n(846293),
    l = n(167189),
    i = n(833291),
    s = n(299091),
    a = n(711014),
    o = n(998218);
async function u(e) {
    try {
        let t = (0, i.br)(e);
        if (null == t || t.type !== l.I.INVITE) return !1;
        let n = s.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await r.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let o = a.Ay.getFlattenedGuildIds(),
            u = n?.guild?.id;
        return null != u && o.includes(u);
    } catch (e) {
        return !1;
    }
}
async function c(e) {
    try {
        if (o.A.isDiscordUrl(e)) return !0;
        return await u(e);
    } catch (e) {
        return !1;
    }
}
