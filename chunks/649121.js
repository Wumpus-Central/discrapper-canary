(n.d(t, { BK: () => l, j_: () => c, yn: () => u }), n(508300));
var r = n(642785);
let i = new Map(),
    a = new Map();
function l(e) {
    let t = i.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = a.get(e);
    if (null != n) return n;
    let l = (0, r.dv)(e)
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
            return (null != n && i.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            a.delete(e);
        });
    return (a.set(e, l), l);
}
function u(e) {
    (i.delete(e), (0, r.$Y)(e));
}
function c() {
    (i.clear(), (0, r.k9)());
}
