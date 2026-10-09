n.d(t, { d: () => i, g: () => a });
var r = n(636537),
    s = n(361504),
    o = n(652215);
function i(e) {
    return l(o.Rsh.CONJURE_PROJECT_WS_TICKET(e));
}
function a(e) {
    return l(o.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
}
async function l(e) {
    let { body: t } = await r.Bo.post({ url: e, rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, s.d)() ?? t.url };
}
