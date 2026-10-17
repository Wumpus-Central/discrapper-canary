(n.d(t, { BK: () => i, j_: () => c, yn: () => l }), n(508300));
var r = n(382541);
let a = new Map(),
    o = new Map();
function i(e) {
    let t = a.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = o.get(e);
    if (null != n) return n;
    let i = (0, r.dv)(e)
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
            return (null != n && a.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            o.delete(e);
        });
    return (o.set(e, i), i);
}
function l(e) {
    (a.delete(e), (0, r.$Y)(e));
}
function c() {
    (a.clear(), (0, r.k9)());
}
