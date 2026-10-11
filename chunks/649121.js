(n.d(t, { BK: () => o, j_: () => l, yn: () => c }), n(508300));
var r = n(382541);
let a = new Map(),
    i = new Map();
function o(e) {
    let t = a.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = i.get(e);
    if (null != n) return n;
    let o = (0, r.d)(e)
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
            i.delete(e);
        });
    return (i.set(e, o), o);
}
function c(e) {
    a.delete(e);
}
function l() {
    a.clear();
}
