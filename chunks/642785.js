(n.d(t, { dv: () => u, vG: () => s, $Y: () => d, Et: () => o, k9: () => c, gA: () => _ }), n(321073));
var i = n(636537);
(n(323874), n(14289), n(35956));
var r = n(652215);
let a = new Map();
function s(e, t) {
    a.set(e, { ticket: Promise.resolve(A(t)), until: Date.now() + 3e4 });
}
let l = [];
function o(e) {
    let t = Date.now(),
        n = a.get(e);
    if (null != n && n.until > t) return;
    for (; l.length > 0 && t - l[0] > 6e4;) l.shift();
    if (l.length >= 5) return;
    l.push(t);
    let i = E(r.Rsh.CONJURE_PROJECT_WS_TICKET(e)),
        s = { ticket: i, until: Date.now() + 3e4 };
    (a.set(e, s),
        i.catch(() => {
            a.get(e) === s && a.delete(e);
        }));
}
function d(e) {
    a.delete(e);
}
function c() {
    a.clear();
}
function u(e) {
    let t = a.get(e);
    return null != t && t.until > Date.now() ? t.ticket : (a.delete(e), E(r.Rsh.CONJURE_PROJECT_WS_TICKET(e)));
}
function _(e) {
    return E(r.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
}
async function E(e) {
    let { body: t } = await i.Bo.post({ url: e, rejectWithError: !0 });
    return A(t);
}
function A(e) {
    let { ticket: t, url: n } = e;
    return { ticket: t, baseUrl: n };
}
