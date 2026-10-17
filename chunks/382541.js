(n.d(t, { $Y: () => c, Et: () => d, dv: () => _, gA: () => E, k9: () => u, vG: () => l }), n(321073));
var i = n(636537),
    r = n(361504),
    a = n(652215);
let s = new Map();
function l(e, t) {
    s.set(e, { ticket: Promise.resolve(h(t)), until: Date.now() + 3e4 });
}
let o = [];
function d(e) {
    let t = Date.now(),
        n = s.get(e);
    if (null != n && n.until > t) return;
    for (; o.length > 0 && t - o[0] > 6e4;) o.shift();
    if (o.length >= 5) return;
    o.push(t);
    let i = A(a.Rsh.CONJURE_PROJECT_WS_TICKET(e)),
        r = { ticket: i, until: Date.now() + 3e4 };
    (s.set(e, r),
        i.catch(() => {
            s.get(e) === r && s.delete(e);
        }));
}
function c(e) {
    s.delete(e);
}
function u() {
    s.clear();
}
function _(e) {
    let t = s.get(e);
    return null != t && t.until > Date.now() ? t.ticket : (s.delete(e), A(a.Rsh.CONJURE_PROJECT_WS_TICKET(e)));
}
function E(e) {
    return A(a.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
}
async function A(e) {
    let { body: t } = await i.Bo.post({ url: e, rejectWithError: !0 });
    return h(t);
}
function h(e) {
    let { ticket: t, url: n } = e;
    return { ticket: t, baseUrl: (0, r.d)() ?? n };
}
