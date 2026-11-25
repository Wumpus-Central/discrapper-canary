var r = n(855986),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getSpendLimit(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(s.h, {
        CONJURE_SPEND_LIMIT_SET: function (e) {
            let { projectId: t, spendLimit: n } = e;
            if (null == n) return o.delete(t);
            o.set(t, n);
        },
    }),
    a = 221552 == n.j ? l : null;
n.d(t, {}, { A: a });
