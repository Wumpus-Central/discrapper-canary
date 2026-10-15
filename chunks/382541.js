n.d(t, { d: () => i, g: () => c });
var r = n(636537),
    o = n(361504),
    a = n(652215);
function i(e) {
    return l(a.Rsh.CONJURE_PROJECT_WS_TICKET(e));
}
function c(e) {
    return l(a.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
}
async function l(e) {
    let { body: t } = await r.Bo.post({ url: e, rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, o.d)() ?? t.url };
}
