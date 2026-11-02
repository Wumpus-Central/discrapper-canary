n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getSpendLimit(e) {
        return i.get(e) ?? null;
    }
}
let l = new o(s.h, {
        CONJURE_SPEND_LIMIT_SET: function (e) {
            let { projectId: t, spendLimit: n } = e;
            if (null == n) return i.delete(t);
            i.set(t, n);
        },
    }),
    a = 221552 == n.j ? l : null;
