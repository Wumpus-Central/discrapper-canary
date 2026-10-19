(n.d(t, { D: () => o, M: () => d }), n(323874), n(14289), n(35956));
var i = n(636537),
    r = n(280450),
    a = n(956518),
    s = n(652215);
let l = new Map();
async function o(e, t, n) {
    let i = c(e, t, n),
        r = l.get(i);
    if ((l.delete(i), null != r && r.expiresAt > Date.now())) {
        let e = await r.ticket.catch(() => null);
        if (null != e) return e;
    }
    return u(e, t, n);
}
function d(e, t, n) {
    let i = u(e, t, n);
    (i.catch(() => void 0), l.set(c(e, t, n), { ticket: i, expiresAt: Date.now() + 6e4 }));
}
function c(e, t, n) {
    return [r.default.getId(), e, t ?? "", n ?? ""].join(":");
}
async function u(e, t, n) {
    var r = e;
    let l = (0, a.Ay)(r);
    if (null != l)
        try {
            fetch(new URL("/.discord/prewarm", l).toString(), {
                method: "GET",
                mode: "no-cors",
                credentials: "omit",
            }).catch(() => void 0);
        } catch {}
    let o = { use_stateless_ticket: !0 };
    return (
        null != t && (o.channel_id = t),
        null != n && (o.surface = n),
        (await i.Bo.post({ url: s.Rsh.APPLICATION_PROXY_TICKET(e), body: o, rejectWithError: !0 })).body.ticket
    );
}
