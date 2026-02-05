n.d(t, { Ce: () => u, f7: () => d }), n(64700);
var r = n(846293),
    s = n(167189),
    i = n(833291),
    l = n(299091),
    a = n(711014),
    o = n(998218);
let u = (e) => null != e.text;
async function c(e) {
    try {
        let t = (0, i.br)(e);
        if (null == t || t.type !== s.I.INVITE) return !1;
        let n = l.A.getInvite(t.code);
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
async function d(e) {
    try {
        if (o.A.isDiscordUrl(e)) return !0;
        return await c(e);
    } catch (e) {
        return !1;
    }
}
