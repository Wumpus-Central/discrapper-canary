(n.d(t, { BK: () => s, j_: () => o, yn: () => l }), n(508300));
var i = n(642785);
let r = new Map(),
    a = new Map();
function s(e) {
    let t = r.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = a.get(e);
    if (null != n) return n;
    let s = (0, i.dv)(e)
        .then((t) => {
            let n = (function (e) {
                try {
                    let t = atob(e.split(".")[0].replace(/-/g, "+").replace(/_/g, "/")),
                        n = JSON.parse(t).exp;
                    return "number" == typeof n && Number.isFinite(n) ? 1e3 * n : null;
                } catch {
                    return null;
                }
            })(t.ticket);
            return (null != n && r.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            a.delete(e);
        });
    return (a.set(e, s), s);
}
function l(e) {
    (r.delete(e), (0, i.$Y)(e));
}
function o() {
    (r.clear(), (0, i.k9)());
}
