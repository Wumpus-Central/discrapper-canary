(n.d(t, { D: () => s }), n(323874), n(14289), n(35956));
var i = n(636537),
    r = n(956518),
    a = n(652215);
async function s(e, t, n) {
    var s = e;
    let l = (0, r.Ay)(s);
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
        (await i.Bo.post({ url: a.Rsh.APPLICATION_PROXY_TICKET(e), body: o, rejectWithError: !0 })).body.ticket
    );
}
