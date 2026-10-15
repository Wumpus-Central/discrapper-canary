(n.d(t, { BK: () => i, j_: () => l, yn: () => c }), n(508300));
var r = n(382541);
let o = new Map(),
    a = new Map();
function i(e) {
    let t = o.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = a.get(e);
    if (null != n) return n;
    let i = (0, r.d)(e)
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
            return (null != n && o.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            a.delete(e);
        });
    return (a.set(e, i), i);
}
function c(e) {
    o.delete(e);
}
function l() {
    o.clear();
}
