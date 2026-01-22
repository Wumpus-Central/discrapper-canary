n.d(t, {
    Ce: () => c,
    f7: () => f,
    gx: () => m,
    rB: () => u,
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

function u(e) {
    let t = 0 | e,
        n = Math.floor(t / 3600),
        r = Math.floor((t % 3600) / 60),
        l = t % 60;
    return n > 0
        ? "".concat(n, ":").concat(String(r).padStart(2, "0"), ":").concat(String(l).padStart(2, "0"))
        : "".concat(r, ":").concat(String(l).padStart(2, "0"));
}
async function d(e) {
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
async function f(e) {
    try {
        if (a.A.isDiscordUrl(e)) return !0;
        return await d(e);
    } catch (e) {
        return !1;
    }
}

function m(e, t, n) {
    return e ? (t.timestampSec >= t.duration ? 0 : t.timestampSec) : Math.max(t.timestampSec, n.progressSeconds);
}
