n.d(t, { D: () => a });
var i = n(636537),
    r = n(652215);
async function a(e, t, n) {
    let a = { use_stateless_ticket: !0 };
    return (
        null != t && (a.channel_id = t),
        null != n && (a.surface = n),
        (await i.Bo.post({ url: r.Rsh.APPLICATION_PROXY_TICKET(e), body: a, rejectWithError: !0 })).body.ticket
    );
}
