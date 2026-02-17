"use strict";
n.d(t, { f: () => c });
var r = n(846293),
    i = n(167189),
    a = n(833291),
    s = n(299091),
    o = n(711014),
    l = n(998218);
async function u(e) {
    try {
        let t = (0, a.br)(e);
        if (null == t || t.type !== i.I.INVITE) return !1;
        let n = s.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await r.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let l = o.Ay.getFlattenedGuildIds(),
            u = n?.guild?.id;
        return null != u && l.includes(u);
    } catch (e) {
        return !1;
    }
}
async function c(e) {
    try {
        if (l.A.isDiscordUrl(e)) return !0;
        return await u(e);
    } catch (e) {
        return !1;
    }
}
