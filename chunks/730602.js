(n.d(t, { D2: () => o, M: () => d, WL: () => c }), n(323874), n(14289), n(35956));
var i = n(636537),
    r = n(280450),
    a = n(956518),
    s = n(652215);
let l = new Map();
async function o(e, t, n, i) {
    if (null != i) return _(e, t, n, i);
    let r = u(e, t, n),
        a = l.get(r);
    if ((l.delete(r), null != a && a.expiresAt > Date.now()))
        try {
            let e = await a.ticket;
            if (null != e) return e;
        } catch {}
    return _(e, t, n);
}
function d(e, t, n) {
    let i = u(e, t, n),
        r = l.get(i);
    if (null != r && r.expiresAt > Date.now()) return;
    let a = _(e, t, n),
        s = { ticket: a, expiresAt: Date.now() + 6e4 };
    (l.set(i, s),
        a.catch(() => {
            l.get(i) === s && l.delete(i);
        }));
}
function c(e, t, n, i) {
    l.set(u(t, n, i), { ticket: Promise.resolve(e), expiresAt: Date.now() + 6e4 });
}
function u(e, t, n) {
    return [r.default.getId(), e, t ?? "", n ?? ""].join(":");
}
async function _(e, t, n, r) {
    var l = e;
    let o = (0, a.Ay)(l);
    if (null != o)
        try {
            fetch(new URL("/.discord/prewarm", o).toString(), {
                method: "GET",
                mode: "no-cors",
                credentials: "omit",
            }).catch(() => void 0);
        } catch {}
    let d = { use_stateless_ticket: !0 };
    return (
        null != r && ((d.invite_channel_id = r.channelId), (d.invite_message_id = r.messageId)),
        null != t && (d.channel_id = t),
        null != n && (d.surface = n),
        (await i.Bo.post({ url: s.Rsh.APPLICATION_PROXY_TICKET(e), body: d, rejectWithError: !0 })).body.ticket
    );
}
